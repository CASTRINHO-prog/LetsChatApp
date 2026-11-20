import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator, Alert, AppState, FlatList, KeyboardAvoidingView, Platform,
  Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

type Screen = 'home' | 'chat';
type Conversation = {
  id: string;
  participantIds: string[];
  participantNames?: Record<string, string>;
  lastMessage?: string;
  updatedAt?: FirebaseFirestoreTypes.Timestamp;
};
type ChatMessage = { id: string; text: string; senderId: string; createdAt?: FirebaseFirestoreTypes.Timestamp };

const db = firestore();
const authClient = auth();

function friendlyError(error: any): string {
  const code = String(error?.code || '');
  const messages: Record<string, string> = {
    'auth/email-already-in-use': 'Este e-mail já está registado.',
    'auth/invalid-email': 'O endereço de e-mail não é válido.',
    'auth/weak-password': 'A palavra-passe deve ter pelo menos 6 caracteres.',
    'auth/user-not-found': 'Não existe uma conta com estes dados.',
    'auth/wrong-password': 'Palavra-passe incorrecta.',
    'auth/invalid-credential': 'E-mail ou palavra-passe incorrectos.',
    'auth/too-many-requests': 'Demasiadas tentativas. Tenta novamente mais tarde.',
    'auth/invalid-phone-number': 'Número de telefone inválido. Usa o indicativo internacional.',
    'auth/quota-exceeded': 'O limite de SMS do Firebase foi atingido.'
  };
  return messages[code] || error?.message || 'Ocorreu um erro. Tenta novamente.';
}

function Avatar({ label, online = false }: { label: string; online?: boolean }) {
  return <View style={s.avatarWrap}>
    <View style={s.avatar}><Text style={s.avatarText}>{(label || '?').trim().charAt(0).toUpperCase()}</Text></View>
    {online && <View style={s.profileOnlineDot} />}
  </View>;
}

function PrimaryButton({ title, onPress, disabled = false, light = false }: { title: string; onPress: () => void; disabled?: boolean; light?: boolean }) {
  return <Pressable disabled={disabled} onPress={onPress} style={[s.primaryButton, light && s.lightButton, disabled && s.disabled]}>
    <Text style={[s.primaryButtonText, light && s.lightButtonText]}>{title}</Text>
  </Pressable>;
}

export default function App() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [mode, setMode] = useState<'login' | 'register' | 'phone' | 'verify'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [smsCode, setSmsCode] = useState('');
  const [confirmation, setConfirmation] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [screen, setScreen] = useState<Screen>('home');
  const [activeTab, setActiveTab] = useState('LETSCHAT GERAL');
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selected, setSelected] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [searchBusy, setSearchBusy] = useState(false);
  const [otherOnline, setOtherOnline] = useState(false);

  useEffect(() => authClient.onAuthStateChanged(async current => {
    setUser(current);
    setAuthReady(true);
    if (current) {
      const ref = db.collection('users').doc(current.uid);
      const snap = await ref.get();
      if (!snap.exists) {
        await ref.set({ uid: current.uid, displayName: current.displayName || 'Utilizador', email: current.email?.toLowerCase() || null, phoneNumber: current.phoneNumber || null, createdAt: firestore.FieldValue.serverTimestamp() }, { merge: true });
      }
    }
  }), []);

  useEffect(() => {
    if (!user) return;
    const presenceRef = db.collection('users').doc(user.uid);
    const mark = (state: 'online' | 'offline') => presenceRef.set({ presence: state, lastSeen: firestore.FieldValue.serverTimestamp() }, { merge: true }).catch(() => {});
    mark('online');
    const subscription = AppState.addEventListener('change', state => mark(state === 'active' ? 'online' : 'offline'));
    return () => { subscription.remove(); mark('offline'); };
  }, [user?.uid]);

  useEffect(() => {
    if (!user || !selected) { setOtherOnline(false); return; }
    const otherId = selected.participantIds.find(id => id !== user.uid);
    if (!otherId) { setOtherOnline(false); return; }
    return db.collection('users').doc(otherId).onSnapshot(snapshot => {
      setOtherOnline(snapshot.data()?.presence === 'online');
    }, () => setOtherOnline(false));
  }, [user?.uid, selected?.id]);

  useEffect(() => {
    if (!user) { setConversations([]); return; }
    const unsubscribe = db.collection('conversations').where('participantIds', 'array-contains', user.uid)
      .onSnapshot(snapshot => {
        const rows = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Conversation));
        rows.sort((a, b) => (b.updatedAt?.toMillis?.() || 0) - (a.updatedAt?.toMillis?.() || 0));
        setConversations(rows);
      }, error => Alert.alert('Erro nas conversas', friendlyError(error)));
    return unsubscribe;
  }, [user?.uid]);

  useEffect(() => {
    if (!user || !selected) { setMessages([]); return; }
    const unsubscribe = db.collection('conversations').doc(selected.id).collection('messages')
      .orderBy('createdAt', 'asc').onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ChatMessage)));
      }, error => Alert.alert('Erro nas mensagens', friendlyError(error)));
    return unsubscribe;
  }, [user?.uid, selected?.id]);

  const displayName = useMemo(() => user?.displayName || user?.email?.split('@')[0] || 'Utilizador', [user]);

  async function registerEmail() {
    if (!name.trim() || !email.trim() || password.length < 6) return Alert.alert('Dados em falta', 'Indica o teu nome, e-mail e uma palavra-passe com pelo menos 6 caracteres.');
    setBusy(true);
    try {
      const credential = await authClient.createUserWithEmailAndPassword(email.trim().toLowerCase(), password);
      await credential.user.updateProfile({ displayName: name.trim() });
      await db.collection('users').doc(credential.user.uid).set({ uid: credential.user.uid, displayName: name.trim(), email: email.trim().toLowerCase(), emailVerified: false, createdAt: firestore.FieldValue.serverTimestamp() }, { merge: true });
      Alert.alert('Conta criada', 'A tua conta LETSCHATAPP foi criada. A confirmação do e-mail não é obrigatória nesta modalidade.');
    } catch (e) { Alert.alert('Não foi possível criar a conta', friendlyError(e)); }
    finally { setBusy(false); }
  }

  async function loginEmail() {
    if (!email.trim() || !password) return Alert.alert('Dados em falta', 'Indica o e-mail e a palavra-passe.');
    setBusy(true);
    try { await authClient.signInWithEmailAndPassword(email.trim().toLowerCase(), password); }
    catch (e) { Alert.alert('Falha no acesso', friendlyError(e)); }
    finally { setBusy(false); }
  }

  async function continueWithoutVerification() {
    setBusy(true);
    try { await authClient.signInAnonymously(); }
    catch (e) { Alert.alert('Não foi possível continuar', friendlyError(e)); }
    finally { setBusy(false); }
  }

  async function requestSms() {
    if (!phone.trim().startsWith('+')) return Alert.alert('Número inválido', 'Escreve o número com indicativo internacional, por exemplo +258...');
    setBusy(true);
    try { const result = await authClient.signInWithPhoneNumber(phone.trim()); setConfirmation(result); setMode('verify'); }
    catch (e) { Alert.alert('Falha no envio do SMS', friendlyError(e)); }
    finally { setBusy(false); }
  }

  async function confirmSms() {
    if (!confirmation || !smsCode.trim()) return;
    setBusy(true);
    try { await confirmation.confirm(smsCode.trim()); setMode('login'); }
    catch (e) { Alert.alert('Código não aceite', friendlyError(e)); }
    finally { setBusy(false); }
  }

  async function startConversation() {
    const targetEmail = newEmail.trim().toLowerCase();
    if (!targetEmail || !user) return Alert.alert('E-mail necessário', 'Escreve o e-mail da pessoa que pretendes contactar.');
    if (targetEmail === user.email?.toLowerCase()) return Alert.alert('Atenção', 'Não podes iniciar uma conversa contigo próprio.');
    setSearchBusy(true);
    try {
      const found = await db.collection('users').where('email', '==', targetEmail).limit(1).get();
      if (found.empty) return Alert.alert('Utilizador não encontrado', 'Ainda não existe uma conta com esse e-mail.');
      const other = found.docs[0].data();
      const ids = [user.uid, other.uid].sort();
      const conversationId = `${ids[0]}_${ids[1]}`;
      const ref = db.collection('conversations').doc(conversationId);
      await ref.set({ participantIds: ids, participantNames: { [user.uid]: displayName, [other.uid]: other.displayName || 'Utilizador' }, lastMessage: '', updatedAt: firestore.FieldValue.serverTimestamp(), createdAt: firestore.FieldValue.serverTimestamp() }, { merge: true });
      const snap = await ref.get();
      setSelected({ id: ref.id, ...snap.data() } as Conversation);
      setScreen('chat'); setNewEmail('');
    } catch (e) { Alert.alert('Não foi possível iniciar a conversa', friendlyError(e)); }
    finally { setSearchBusy(false); }
  }

  async function sendMessage() {
    const text = draft.trim();
    if (!text || !user || !selected) return;
    setDraft('');
    try {
      const ref = db.collection('conversations').doc(selected.id);
      await ref.collection('messages').add({ text, senderId: user.uid, createdAt: firestore.FieldValue.serverTimestamp() });
      await ref.update({ lastMessage: text, updatedAt: firestore.FieldValue.serverTimestamp() });
    } catch (e) { setDraft(text); Alert.alert('Mensagem não enviada', friendlyError(e)); }
  }

  async function signOut() {
    await authClient.signOut(); setSelected(null); setScreen('home'); setMode('login');
  }

  if (!authReady) return <SafeAreaView style={s.center}><ActivityIndicator size="large" color="#2563EB" /><Text style={s.muted}>A iniciar o LETSCHATAPP...</Text></SafeAreaView>;

  if (!user) return <SafeAreaView style={s.safe}>
    <StatusBar style="dark" />
    <KeyboardAvoidingView style={s.authPage} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={s.brandBlock}><View style={s.brandMark}><Text style={s.brandMarkText}>L</Text></View><Text style={s.brand}>LETSCHATAPP</Text><Text style={s.tagline}>Connect. Chat. Share.</Text></View>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={s.authCard}>
        <Text style={s.heading}>{mode === 'register' ? 'Criar conta' : mode === 'phone' ? 'Entrar com SMS' : mode === 'verify' ? 'Confirmar número' : 'Bem-vindo'}</Text>
        <Text style={s.muted}>Escolhe como queres aceder à aplicação.</Text>
        {mode === 'register' && <TextInput value={name} onChangeText={setName} placeholder="Nome" style={s.field} />}
        {(mode === 'login' || mode === 'register') && <>
          <TextInput value={email} onChangeText={setEmail} placeholder="E-mail" autoCapitalize="none" keyboardType="email-address" style={s.field} />
          <TextInput value={password} onChangeText={setPassword} placeholder="Palavra-passe" secureTextEntry style={s.field} />
          <PrimaryButton title={busy ? 'A processar...' : mode === 'register' ? 'CRIAR CONTA' : 'ENTRAR'} onPress={mode === 'register' ? registerEmail : loginEmail} disabled={busy} />
          <Pressable onPress={() => setMode(mode === 'register' ? 'login' : 'register')}><Text style={s.link}>{mode === 'register' ? 'Já tenho conta' : 'Criar uma conta com e-mail'}</Text></Pressable>
        </>}
        {mode === 'phone' && <>
          <TextInput value={phone} onChangeText={setPhone} placeholder="Número com indicativo (ex.: +258...)" keyboardType="phone-pad" style={s.field} />
          <PrimaryButton title={busy ? 'A enviar...' : 'ENVIAR CÓDIGO SMS'} onPress={requestSms} disabled={busy} />
          <Pressable onPress={() => setMode('login')}><Text style={s.link}>Voltar</Text></Pressable>
        </>}
        {mode === 'verify' && <>
          <Text style={s.muted}>Introduz o código recebido por SMS.</Text>
          <TextInput value={smsCode} onChangeText={setSmsCode} placeholder="Código SMS" keyboardType="number-pad" style={s.field} />
          <PrimaryButton title={busy ? 'A confirmar...' : 'CONFIRMAR NÚMERO'} onPress={confirmSms} disabled={busy} />
          <Pressable onPress={() => setMode('phone')}><Text style={s.link}>Alterar número</Text></Pressable>
        </>}
        {(mode === 'login' || mode === 'register') && <>
          <View style={s.orLine}><View style={s.line} /><Text style={s.muted}>OU</Text><View style={s.line} /></View>
          <PrimaryButton title="CONTINUAR SEM VERIFICAÇÃO" onPress={continueWithoutVerification} disabled={busy} light />
          <PrimaryButton title="USAR NÚMERO DE TELEFONE (SMS)" onPress={() => setMode('phone')} disabled={busy} light />
        </>}
        <Text style={s.legal}>O acesso sem verificação cria uma conta anónima. Para recuperar a conta noutro telemóvel, será necessário associar um e-mail ou número.</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>;

  if (screen === 'chat' && selected) {
    const otherId = selected.participantIds.find(id => id !== user.uid) || '';
    const otherName = selected.participantNames?.[otherId] || 'Conversa';
    return <SafeAreaView style={s.safe}>
      <StatusBar style="dark" />
      <View style={s.chatHeader}>
        <Pressable onPress={() => { setScreen('home'); setSelected(null); }} style={s.back}><Text style={s.backText}>‹</Text></Pressable>
        <View style={{ flex: 1 }}><Text style={s.contactName}>{otherName}</Text><View style={s.statusLine}><View style={[s.statusDot, { backgroundColor: otherOnline ? '#22C55E' : '#9CA3AF' }]} /><Text style={s.statusText}>{otherOnline ? 'online' : 'offline'}</Text></View></View>
        <Text style={s.headerAction}>⋮</Text>
      </View>
      <FlatList data={messages} keyExtractor={item => item.id} contentContainerStyle={s.messages} renderItem={({ item }) => {
        const mine = item.senderId === user.uid;
        return <View style={[s.bubble, mine ? s.myBubble : s.theirBubble]}><Text style={[s.messageText, mine && s.myMessageText]}>{item.text}</Text><Text style={[s.messageTime, mine && s.myMessageTime]}>{item.createdAt?.toDate?.().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) || '...'}</Text></View>;
      }} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={s.composer}><TextInput value={draft} onChangeText={setDraft} placeholder="Escreve uma mensagem..." style={s.input} multiline /><Pressable onPress={sendMessage} style={s.send}><Text style={s.sendText}>➤</Text></Pressable></View>
      </KeyboardAvoidingView>
    </SafeAreaView>;
  }

  return <SafeAreaView style={s.safe}>
    <StatusBar style="dark" />
    <View style={s.header}>
      <View style={s.brandMarkSmall}><Text style={s.brandMarkText}>L</Text></View>
      <View style={{ flex: 1 }}><Text style={s.brand}>LETSCHATAPP</Text><Text style={s.tagline}>Connect. Chat. Share.</Text></View>
      <View style={s.profileAvatarWrap}><View style={s.avatar}><Text style={s.avatarText}>{displayName.charAt(0).toUpperCase()}</Text></View><View style={s.profileOnlineDot} /></View>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.topTabs}>
      {['LETSCHAT GERAL', 'BÍBLIA SAGRADA - ACF', 'FILES SALVOS'].map(tab => <Pressable key={tab} onPress={() => setActiveTab(tab)} style={[s.topTab, activeTab === tab && s.activeTopTab]}><Text style={[s.topTabText, activeTab === tab && s.activeTopTabText]}>{tab}</Text></Pressable>)}
    </ScrollView>
    <View style={s.sectionHeading}><Text style={s.sectionTitle}>{activeTab}</Text><Text style={s.sectionHint}>Olá, {displayName}</Text></View>
    {activeTab === 'LETSCHAT GERAL' ? <>
      <View style={s.newChatBox}><TextInput value={newEmail} onChangeText={setNewEmail} placeholder="E-mail da pessoa para iniciar conversa" autoCapitalize="none" keyboardType="email-address" style={[s.field, { flex: 1, marginBottom: 0 }]} /><Pressable onPress={startConversation} style={s.addButton} disabled={searchBusy}><Text style={s.addButtonText}>{searchBusy ? '...' : '+'}</Text></Pressable></View>
      <FlatList data={conversations} keyExtractor={item => item.id} contentContainerStyle={s.contactList} ListEmptyComponent={<View style={s.empty}><Text style={s.placeholderIcon}>💬</Text><Text style={s.placeholderTitle}>Ainda não tens conversas</Text><Text style={s.placeholderText}>Procura alguém pelo e-mail para começar a conversar.</Text></View>} renderItem={({ item }) => {
        const otherId = item.participantIds.find(id => id !== user.uid) || '';
        const title = item.participantNames?.[otherId] || 'Utilizador';
        return <Pressable style={s.contactRow} onPress={() => { setSelected(item); setScreen('chat'); }}><Avatar label={title} /><View style={s.contactInfo}><Text style={s.contactName}>{title}</Text><Text style={s.preview} numberOfLines={1}>{item.lastMessage || 'Iniciar conversa'}</Text></View><Text style={s.time}>{item.updatedAt?.toDate?.().toLocaleDateString() || ''}</Text></Pressable>;
      }} />
    </> : <View style={s.placeholder}><Text style={s.placeholderIcon}>{activeTab.startsWith('BÍBLIA') ? '📖' : '📁'}</Text><Text style={s.placeholderTitle}>{activeTab}</Text><Text style={s.placeholderText}>Esta área será desenvolvida na próxima etapa. Ainda não está activa.</Text></View>}
    <View style={s.bottomNav}>{['GRUPO', 'PRIVADO', 'ACTUALIDADE', 'CHAMADAS', 'MARCAS'].map((item, i) => <Pressable key={item} style={s.navItem} onPress={() => Alert.alert(item, 'Esta funcionalidade ainda está em desenvolvimento.')}><Text style={s.navIcon}>{['👥', '💬', '📰', '📞', '⭐'][i]}</Text><Text style={s.navLabel}>{item}</Text></Pressable>)}</View>
    <View style={s.footer}><Text style={s.footerText}>Conta {user.isAnonymous ? 'sem verificação' : 'registada'} · v0.6.0</Text><Pressable onPress={signOut}><Text style={s.linkSmall}>Terminar sessão</Text></Pressable></View>
  </SafeAreaView>;
}

// Regra de negócio também aplicada nas regras de segurança do Firestore.
export function canAddGroupAdmin(currentAdmins: number): boolean { return currentAdmins < 5; }

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F8FAFC' }, center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8FAFC', gap: 12 },
  authPage: { flex: 1 }, brandBlock: { alignItems: 'center', paddingTop: 36, paddingBottom: 20 }, brandMark: { width: 58, height: 58, borderRadius: 18, backgroundColor: '#2563EB', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }, brandMarkSmall: { width: 40, height: 40, borderRadius: 13, backgroundColor: '#2563EB', alignItems: 'center', justifyContent: 'center' }, brandMarkText: { color: '#fff', fontSize: 27, fontWeight: '900' }, brand: { color: '#111827', fontWeight: '900', fontSize: 19, letterSpacing: .4 }, tagline: { color: '#64748B', fontSize: 11, marginTop: 3 },
  authCard: { margin: 16, padding: 20, borderRadius: 20, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E5E7EB' }, heading: { fontSize: 24, fontWeight: '800', color: '#111827', marginBottom: 6 }, muted: { color: '#64748B', fontSize: 12, marginBottom: 14 }, field: { minHeight: 48, backgroundColor: '#F1F5F9', borderRadius: 12, paddingHorizontal: 14, marginBottom: 10, color: '#111827', borderWidth: 1, borderColor: '#E2E8F0' }, primaryButton: { minHeight: 48, borderRadius: 12, backgroundColor: '#2563EB', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 14, marginTop: 8 }, primaryButtonText: { color: '#fff', fontSize: 12, fontWeight: '800' }, lightButton: { backgroundColor: '#EFF6FF', borderWidth: 1, borderColor: '#BFDBFE' }, lightButtonText: { color: '#1D4ED8' }, disabled: { opacity: .55 }, link: { color: '#2563EB', textAlign: 'center', fontSize: 12, fontWeight: '700', marginTop: 14 }, linkSmall: { color: '#2563EB', fontSize: 11, fontWeight: '700' }, orLine: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 18, marginBottom: 4 }, line: { flex: 1, height: 1, backgroundColor: '#E2E8F0' }, legal: { color: '#94A3B8', fontSize: 10, lineHeight: 15, marginTop: 18 },
  header: { height: 66, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', gap: 11, borderBottomWidth: 1, borderBottomColor: '#E5E7EB' }, avatarWrap: { width: 44, height: 44, position: 'relative', justifyContent: 'center' }, avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#DBEAFE', alignItems: 'center', justifyContent: 'center' }, avatarText: { color: '#1D4ED8', fontWeight: '800', fontSize: 16 }, profileAvatarWrap: { width: 44, height: 44, position: 'relative', alignItems: 'center', justifyContent: 'center' }, profileOnlineDot: { position: 'absolute', right: -2, bottom: -1, width: 13, height: 13, borderRadius: 7, backgroundColor: '#22C55E', borderWidth: 2, borderColor: '#F8FAFC' },
  topTabs: { paddingHorizontal: 12, paddingVertical: 12, gap: 8 }, topTab: { paddingHorizontal: 12, paddingVertical: 10, borderRadius: 12, backgroundColor: '#E2E8F0' }, activeTopTab: { backgroundColor: '#2563EB' }, topTabText: { color: '#334155', fontSize: 10, fontWeight: '800' }, activeTopTabText: { color: '#fff' }, sectionHeading: { paddingHorizontal: 17, paddingTop: 10, paddingBottom: 8 }, sectionTitle: { color: '#111827', fontSize: 20, fontWeight: '900' }, sectionHint: { color: '#64748B', fontSize: 12, marginTop: 3 }, newChatBox: { flexDirection: 'row', gap: 8, alignItems: 'center', paddingHorizontal: 12, paddingBottom: 6 }, addButton: { width: 48, height: 48, borderRadius: 12, backgroundColor: '#2563EB', alignItems: 'center', justifyContent: 'center' }, addButtonText: { color: '#fff', fontSize: 28, fontWeight: '400' },
  contactList: { paddingHorizontal: 12, paddingBottom: 90 }, contactRow: { flexDirection: 'row', alignItems: 'center', padding: 12, backgroundColor: '#fff', borderRadius: 15, marginTop: 8, borderWidth: 1, borderColor: '#EEF2F7', gap: 10 }, contactInfo: { flex: 1 }, contactName: { fontSize: 15, color: '#111827', fontWeight: '800' }, preview: { fontSize: 12, color: '#64748B', marginTop: 4 }, time: { color: '#94A3B8', fontSize: 10 }, empty: { alignItems: 'center', padding: 36, marginTop: 20 }, placeholder: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }, placeholderIcon: { fontSize: 42, marginBottom: 12 }, placeholderTitle: { fontSize: 18, fontWeight: '800', color: '#111827', textAlign: 'center' }, placeholderText: { color: '#64748B', textAlign: 'center', marginTop: 8, lineHeight: 20, fontSize: 12 },
  bottomNav: { height: 62, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#E5E7EB', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }, navItem: { alignItems: 'center', gap: 3 }, navIcon: { fontSize: 17 }, navLabel: { fontSize: 8, color: '#475569', fontWeight: '800' }, footer: { paddingHorizontal: 16, paddingVertical: 7, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F8FAFC' }, footerText: { color: '#94A3B8', fontSize: 10 },
  chatHeader: { height: 66, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', gap: 12, borderBottomWidth: 1, borderBottomColor: '#E5E7EB', backgroundColor: '#fff' }, back: { width: 34, height: 42, justifyContent: 'center' }, backText: { fontSize: 32, color: '#2563EB' }, statusLine: { flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 3 }, statusDot: { width: 7, height: 7, borderRadius: 4 }, statusText: { color: '#64748B', fontSize: 11 }, headerAction: { fontSize: 24, color: '#64748B', paddingHorizontal: 8 }, messages: { padding: 14, gap: 10, flexGrow: 1, justifyContent: 'flex-end' }, bubble: { maxWidth: '82%', padding: 11, borderRadius: 15 }, myBubble: { alignSelf: 'flex-end', backgroundColor: '#2563EB', borderBottomRightRadius: 4 }, theirBubble: { alignSelf: 'flex-start', backgroundColor: '#fff', borderBottomLeftRadius: 4, borderWidth: 1, borderColor: '#E5E7EB' }, messageText: { color: '#111827', fontSize: 14 }, myMessageText: { color: '#fff' }, messageTime: { color: '#94A3B8', fontSize: 9, textAlign: 'right', marginTop: 5 }, myMessageTime: { color: '#DBEAFE' }, composer: { flexDirection: 'row', alignItems: 'flex-end', padding: 10, gap: 8, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#E5E7EB' }, input: { flex: 1, minHeight: 42, maxHeight: 110, borderRadius: 22, backgroundColor: '#F1F5F9', paddingHorizontal: 16, paddingVertical: 10, color: '#111827' }, send: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#2563EB', alignItems: 'center', justifyContent: 'center' }, sendText: { color: '#fff', fontSize: 19, fontWeight: '800' }
});
