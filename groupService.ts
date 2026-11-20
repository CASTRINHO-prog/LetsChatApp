import firestore from '@react-native-firebase/firestore';

/** Adiciona um administrador sem permitir ultrapassar o limite de cinco. */
export async function addGroupAdmin(groupId: string, actorUid: string, newAdminUid: string): Promise<void> {
  const ref = firestore().collection('groups').doc(groupId);
  await firestore().runTransaction(async transaction => {
    const snapshot = await transaction.get(ref);
    if (!snapshot.exists) throw new Error('Grupo não encontrado.');
    const group = snapshot.data()!;
    const admins: string[] = group.adminIds || [];
    const members: string[] = group.memberIds || [];
    if (!admins.includes(actorUid)) throw new Error('Apenas um administrador pode gerir administradores.');
    if (admins.includes(newAdminUid)) return;
    if (admins.length >= 5) throw new Error('Este grupo já atingiu o máximo de cinco administradores.');
    if (!members.includes(newAdminUid)) throw new Error('A pessoa precisa de ser membro do grupo primeiro.');
    transaction.update(ref, { adminIds: [...admins, newAdminUid] });
  });
}

export function canAddGroupAdmin(currentAdmins: number): boolean { return currentAdmins < 5; }
