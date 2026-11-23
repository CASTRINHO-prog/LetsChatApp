# LetsChatApp
Aplicativo de mensagens e rede social global

LETSCHATAPP

LETSCHATAPP — README PRINCIPAL

Última actualização: 23 de Novembro de 2026
Plataforma principal: Android
Identificador Android: "com.letschatapp.mobile"
Tecnologias identificadas: Expo SDK 54, React Native, TypeScript e Firebase nativo.

«Este documento é a referência principal das decisões, funcionalidades, arquitectura técnica e orientações do LETSCHATAPP. Distingue as funcionalidades aprovadas, as implementações identificadas e o trabalho ainda pendente. Uma funcionalidade descrita como requisito não deve ser considerada concluída sem confirmação no código e testes.»

---

1. VISÃO GERAL DO PROJECTO

O LETSCHATAPP é uma aplicação de comunicação, comunidade e serviços digitais, desenvolvida para aproximar pessoas, facilitar conversas, reuniões, chamadas, partilha de conteúdos, descoberta de marcas e acesso a serviços financeiros e armazenamento na nuvem.

A aplicação reúne:

- PAPO PRIVADO;
- REUNIÕES;
- ACTUALIDADE;
- PAPO ORAL;
- MARCAS;
- LETSCHAT GERAL;
- BÍBLIA SAGRADA;
- FILES SALVOS;
- LetsPay;
- Conta Geral e definições;
- Transmissões LIVE;
- Sistema de recomendações personalizadas.

O desenvolvimento deve respeitar as decisões mais recentes aprovadas pelo responsável do projecto.

Quando uma decisão nova substituir uma anterior, esta documentação e os ficheiros de código afectados devem ser actualizados para evitar contradições.

2. IDENTIDADE VISUAL E MARCA

2.1 Logótipo oficial

A identidade visual oficial do LETSCHATAPP é composta por:

- Imagem quadrada;
- Globo;
- Avião de papel;
- Balões de conversa;
- Nome LetsChatApp;
- Slogan: Connect. Chat. Share.

O logótipo deve manter a identidade visual aprovada.

2.2 Ecrã inicial — Splash Screen

O ecrã de abertura oficial deve apresentar:

- Texto «Bem-vindo ao»;
- Símbolo oficial;
- Marca LetsChatApp;
- Slogan «Connect. Chat. Share.»;
- Apresentação visual das funcionalidades principais.

Deve respeitar o modelo visual aprovado.

2.3 Cabeçalho

- A marca/logótipo LetsChatApp no cabeçalho é exclusivamente um elemento visual de identidade.
- O logótipo não é botão, separador, sessão nem destino de navegação.
- A Conta Geral e as definições são acessadas através do ícone ou fotografia de perfil do utilizador.
- O acesso ao LetsPay deve respeitar a disposição visual aprovada.
- A identificação do plano PREMIUM deve utilizar a designação actual.

Não transformar o logótipo em botão de navegação.

3. NAVEGAÇÃO PRINCIPAL

3.1 Cinco menus inferiores oficiais

A barra inferior deve apresentar exactamente cinco menus, nesta ordem:

1. PAPO PRIVADO
2. REUNIÕES
3. ACTUALIDADE
4. PAPO ORAL
5. MARCAS

Esta ordem é obrigatória em todos os ecrãs principais.

Não acrescentar outros menus à barra inferior nem substituir os nomes aprovados.

REUNIÕES é a designação oficial da área de grupos e reuniões.

3.2 Acessos superiores

Os acessos seguintes devem permanecer nas respectivas áreas superiores, conforme o desenho aprovado:

- LETSCHAT GERAL;
- BÍBLIA SAGRADA;
- FILES SALVOS.

Não devem substituir os cinco menus inferiores.

3.3 Conta Geral

A Conta Geral e as definições são acessadas pelo perfil do utilizador.

O logótipo não deve ser utilizado para abrir a Conta Geral.

4. PAPO PRIVADO

A área PAPO PRIVADO destina-se à comunicação individual entre utilizadores.

Funcionalidades

- Conversas privadas;
- Envio e recepção de mensagens;
- Actualização de mensagens em tempo real;
- Identificação dos contactos;
- Acesso a novas conversas;
- Privacidade das conversas;
- Gestão dos contactos e permissões.

Nova conversa

Para iniciar uma nova conversa:

1. O utilizador abre a opção de nova conversa.
2. A aplicação solicita autorização para aceder à lista telefónica do Android.
3. Os contactos são comparados com os números registados no LETSCHATAPP.
4. Os contactos que já possuem conta podem ser seleccionados.
5. Os contactos sem conta podem receber um convite.

Não utilizar pesquisa de utilizadores por e-mail.

A lista telefónica deve ser utilizada mediante autorização do utilizador.

5. REUNIÕES

REUNIÕES é a área destinada à criação e participação em grupos.

5.1 Limites

- Máximo de 500 participantes por grupo.
- Máximo de 5 administradores por grupo.
- O criador é automaticamente o primeiro administrador.

5.2 Direitos do fundador

O criador/fundador de um grupo nunca pode sair do grupo que criou.

A opção «Sair do grupo» deve aparecer desactivada ou indisponível para o fundador.

A aplicação deve impedir efectivamente essa acção, tanto na interface como no backend.

O fundador deve manter a sua condição de administrador principal.

5.3 Administração

As permissões devem ser verificadas no backend e nas regras Firestore.

Não confiar apenas na interface para controlar administradores e participantes.

5.4 Interface

A interface interior de uma reunião/grupo deve preservar o desenho visual aprovado.

A barra inferior deve apresentar sempre os cinco menus oficiais, na ordem definida.

5.5 Selecção de participantes

A criação de grupos deve utilizar a lista telefónica do dispositivo, mediante autorização, e identificar os contactos que já possuem uma conta LETSCHATAPP.

Os contactos sem conta devem poder ser convidados.

6. CHAMADAS DE CONFERÊNCIA

As chamadas de conferência são independentes dos grupos de REUNIÕES.

- Não é obrigatório criar um grupo para iniciar uma chamada.
- O utilizador pode iniciar uma chamada de conferência.
- Pode adicionar participantes durante a chamada.
- A chamada não deve ser confundida com um grupo permanente.
- As permissões e os limites técnicos devem ser respeitados.

7. PAPO ORAL

Área destinada à comunicação oral.

Funcionalidades previstas

- Chamadas de voz;
- Chamadas de vídeo;
- Controlos de microfone;
- Terminar chamada;
- Gestão de participantes;
- Tradução;
- Conversão de voz para texto;
- Leitura de texto em voz.

A tradução, a conversão de voz para texto e a leitura de texto em voz devem ser implementadas e testadas antes de serem apresentadas como funcionalidades concluídas.

8. ACTUALIDADE

ACTUALIDADE é a área de conteúdos, vídeos e transmissões ao vivo.

8.1 LIVE

A área ACTUALIDADE inclui transmissões ao vivo.

A experiência LIVE deve contemplar, conforme a implementação:

- Visualização de transmissões;
- Identificação de transmissões activas;
- Comentários;
- Contagem de espectadores;
- Controlos de privacidade;
- Controlos do transmissor;
- Opção para terminar a própria transmissão.

8.2 Símbolo animado LIVE

O símbolo ao lado da palavra LIVE deve ser composto por:

- Um ponto central;
- Ondas simétricas à esquerda;
- Ondas simétricas à direita.

As ondas devem expandir-se e recolher-se suavemente, num movimento contínuo.

O símbolo deve substituir o pontinho simples anteriormente utilizado.

A animação GIF correspondente deve ser produzida e integrada no projecto. A especificação visual está aprovada, mas a integração deve ser confirmada no código.

8.3 Botão TÁ A DAR

Durante a visualização de vídeos e transmissões, assim como nas sugestões de vídeos, deve aparecer o botão:

TÁ A DAR

Características:

- Formato rectangular;
- Cantos curvos;
- Texto «TÁ A DAR»;
- Animação de piscar uma vez por segundo.

A animação não deve prejudicar a leitura nem a acessibilidade.

8.4 Recomendações personalizadas

O algoritmo de recomendações deve aprender os interesses do utilizador a partir das suas conversas e interacções relevantes.

Deve utilizar esses interesses para recomendar:

- MARCAS;
- Transmissões LIVE;
- Vídeos;
- Conteúdos relacionados com os interesses identificados.

A aprendizagem dos interesses deve respeitar a privacidade.

As conversas privadas não podem ser expostas a outros utilizadores ou às marcas.

A implementação deve prever segurança, transparência e controlos adequados para a utilização dos dados.

9. MARCAS

MARCAS é um menu independente de ACTUALIDADE.

Deve permitir:

- Descoberta de marcas;
- Apresentação de conteúdos de marcas;
- Recomendações personalizadas;
- Descoberta de produtos e serviços;
- Apresentação de marcas relacionadas com os interesses do utilizador.

O sistema de recomendações deve utilizar os interesses identificados pelo algoritmo, respeitando a privacidade.

Não juntar MARCAS e ACTUALIDADE num único menu.

10. REGISTO E AUTENTICAÇÃO

10.1 Método de registo

O registo e o acesso à conta são exclusivamente por número de telefone.

Não utilizar:

- Registo por e-mail;
- Login por e-mail;
- Pesquisa de utilizadores por e-mail;
- Acesso anónimo como método de registo do produto.

10.2 Verificação por SMS

Na versão 1.0:

- A verificação por SMS é opcional.
- O utilizador pode criar ou aceder à conta sem confirmar o número por SMS.

A obrigatoriedade da verificação SMS fica reservada para uma versão futura e depende de nova confirmação do responsável pelo projecto.

10.3 Firebase Authentication

Firebase Authentication foi escolhido para suportar o fluxo de autenticação por telefone.

Os custos de SMS dependem do país, destino e fornecedor.

10.4 Contactos

A selecção de contactos para conversas e grupos deve utilizar a lista telefónica do Android, após autorização.

A correspondência deve ser feita através dos números de telefone.

Não reintroduzir autenticação por e-mail.

11. PLANOS E SUBSCRIÇÕES

Existem dois planos principais.

Plano| Preço
FREE BASIC| Gratuito
PREMIUM| US$ 0,10 por mês

11.1 FREE BASIC

- Preço: 0 MZN/mês.
- Plano gratuito.
- Acesso às funcionalidades disponibilizadas para este plano.
- Acesso à Bíblia Sagrada ACF.
- Acesso ao LetsPay.

11.2 PREMIUM

- Preço: US$ 0,10 por mês.
- Designação oficial: PREMIUM.
- Substitui a designação PRO utilizada em documentação anterior.
- O pagamento deve ser integrado no fluxo de pagamentos previsto.

11.3 LetsPay nos planos

O LetsPay deve estar disponível tanto no FREE BASIC como no PREMIUM.

Não exigir subscrição PREMIUM para aceder à carteira.

11.4 Regras de documentação

Os preços acima são as decisões actuais do produto.

Não conservar os valores antigos de 1 MZN ou 5 MZN como preços actuais do PREMIUM.

A cobrança real só deve ser considerada activa depois da implementação e dos testes necessários.

12. BÍBLIA SAGRADA

A aplicação deve disponibilizar a Bíblia Sagrada na tradução:

Almeida Corrigida Fiel (ACF).

Funcionalidades

- Bíblia integral;
- Navegação por livros;
- Navegação por capítulos;
- Navegação por versículos;
- Leitura do texto bíblico.

Acesso

A Bíblia ACF deve permanecer desbloqueada para todos os utilizadores:

- FREE BASIC;
- PREMIUM.

A Bíblia ACF não é exclusiva do plano pago.

Não voltar a bloquear a Bíblia ACF para utilizadores FREE BASIC.

13. FILES SALVOS — ARMAZENAMENTO NA NUVEM

FILES SALVOS é a área destinada ao armazenamento de ficheiros pessoais na nuvem.

13.1 Preço oficial

O preço aprovado é:

US$ 0,80 por GB, por mês.

Cada GB adquirido custa US$ 0,80 mensalmente.

13.2 Aquisição de capacidade

- O utilizador pode adquirir quantos GB quiser.
- Pode adquirir vários GB no mesmo mês.
- Não existe um limite fixo da quantidade de GB que pode adquirir no mesmo mês.
- Cada GB adicional acrescenta US$ 0,80 ao custo mensal.
- A aquisição de capacidade adicional não deve apagar os ficheiros existentes.

Exemplos:

Capacidade| Preço mensal
1 GB| US$ 0,80
5 GB| US$ 4,00
10 GB| US$ 8,00
20 GB| US$ 16,00
50 GB| US$ 40,00
100 GB| US$ 80,00

13.3 Renovação

A capacidade contratada tem renovação mensal.

O sistema deve apresentar claramente:

- Capacidade contratada;
- Espaço ocupado;
- Espaço livre;
- Preço mensal;
- Data de renovação;
- Estado do pagamento;
- Opções para adquirir mais capacidade.

13.4 Meios de pagamento previstos

A renovação e a aquisição de capacidade adicional podem utilizar:

- LetsPay;
- m-Pesa;
- e-Mola;
- Pix;
- Airtm;
- PayPal.

A disponibilidade depende da região, dos fornecedores e da integração efectiva.

13.5 Segurança e privacidade

Os ficheiros devem ser protegidos contra acesso não autorizado.

O sistema deve respeitar:

- Privacidade;
- Controlo de acesso;
- Segurança de armazenamento;
- Integridade dos ficheiros;
- Gestão de capacidade;
- Retenção e recuperação;
- Registo de operações.

Não eliminar ficheiros existentes simplesmente porque o utilizador adquiriu capacidade adicional.

14. LETSPAY — CARTEIRA DIGITAL

LetsPay é a carteira digital integrada no LETSCHATAPP.

14.1 Criação da carteira

- Criar automaticamente o perfil LetsPay após o registo no LETSCHATAPP.
- Disponibilizar a carteira nos planos FREE BASIC e PREMIUM.
- A carteira deve possuir identificação e registo próprio.
- A movimentação de dinheiro depende das verificações de segurança e dos requisitos legais aplicáveis.

14.2 Fornecedores e meios de pagamento

Integrações previstas:

- PayPal;
- m-Pesa;
- e-Mola;
- Pix;
- Airtm.

A disponibilidade depende dos países, fornecedores, autorizações e integrações efectivas.

Não prometer cobertura universal.

14.3 Transferências entre utilizadores

O destinatário de uma transferência deve ser seleccionado a partir da lista telefónica do dispositivo.

Requisitos:

1. Solicitar autorização para aceder aos contactos.
2. Identificar os números correspondentes a contas LETSCHATAPP.
3. Permitir seleccionar o destinatário identificado.
4. Confirmar os dados antes da transferência.
5. Registar a operação de forma segura.

Não permitir transferências para destinatários cuja conta não tenha sido identificada e validada.

14.4 Limite de saldo

O limite de saldo pretendido é:

US$ 1.000.000 por utilizador.

14.5 Apresentação do saldo

O saldo principal deve ser apresentado em USD.

Também deve ser apresentado o equivalente na moeda local.

A aplicação deve indicar:

- Taxa de câmbio;
- Moeda utilizada;
- Hora da última actualização;
- Valor estimado na moeda local.

O valor final depende da taxa aplicada pelo fornecedor no momento da conversão.

Os valores monetários devem ser guardados em unidades inteiras, como cêntimos, evitando cálculos financeiros com números de ponto flutuante.

14.6 PIN de segurança

O PIN deve possuir quatro dígitos.

Não aceitar:

- "0000";
- "1234";
- PIN iniciado por 1;
- PIN iniciado por 2;
- Quatro dígitos iguais;
- Sequências triviais;
- Padrões simples de teclado.

O PIN nunca deve ser guardado em texto simples.

Deve ser protegido por hash seguro no backend.

Implementar controlo de tentativas, bloqueio progressivo e recuperação segura.

14.7 Intervalo de segurança entre transacções

Depois de uma transacção financeira concluída com sucesso, o utilizador deve aguardar:

10 minutos antes de realizar a próxima transacção financeira.

O intervalo deve ser imposto pelo servidor.

O telemóvel pode apresentar o tempo restante, mas não pode ser responsável pela imposição da regra.

14.8 Pagamento do PREMIUM

O utilizador deve poder efectuar a subscrição PREMIUM através do fluxo de pagamento previsto.

Após confirmação válida do fornecedor, o pagamento deve ser creditado na conta LetsPay do desenvolvedor, conforme a arquitectura financeira aprovada.

Registar taxas, reembolsos e estornos.

Antes de activar a cobrança, confirmar as regras dos fornecedores e as exigências aplicáveis à distribuição da aplicação e às subscrições digitais.

14.9 Segurança financeira

O backend deve controlar exclusivamente:

- Saldos;
- Transferências;
- Depósitos;
- Levantamentos;
- Livro-razão financeiro (ledger);
- Confirmações dos pagamentos;
- Limites;
- Histórico financeiro.

O cliente Android não pode alterar directamente os saldos nem confirmar transacções.

Cada operação deve possuir identificador único e protecção contra duplicação (idempotência).

Implementar:

- Validação dos fornecedores;
- Registo seguro das operações;
- Prevenção de fraude;
- KYC;
- AML;
- Limites por país;
- Parceiros financeiros autorizados;
- Licenças e requisitos legais aplicáveis.

Não activar movimentação de dinheiro real antes de concluir e testar o backend, as integrações, a segurança e os requisitos legais.

15. TECNOLOGIAS E ARQUITECTURA

A última análise técnica identificou as seguintes tecnologias:

Componente| Versão ou tecnologia
Expo| SDK 54
React| 19.1.0
React Native| 0.81.4
TypeScript| 5.9.2
Firebase App| 23.5.0
Firebase Auth| 23.5.0
Firebase Firestore| 23.5.0

Outras referências técnicas:

- Aplicação Android: "com.letschatapp.mobile".
- Versão indicada no "app.json": "0.6.0".
- Firebase Authentication;
- Cloud Firestore;
- React Native Firebase;
- Expo EAS Build.

Estas versões representam o estado identificado na análise anterior e devem ser confirmadas nos ficheiros actuais antes de qualquer actualização de dependências.

16. ESTADO TÉCNICO IDENTIFICADO

Na análise anterior dos ficheiros foram identificados:

- "App.tsx";
- "app.json";
- "eas.json";
- "firebase.json";
- "firestore.rules" ou variante com nome diferente;
- "groupService.ts";
- "letsPay.ts";
- "package.json";
- "tsconfig.json";
- "README.md".

A aplicação já possuía uma base Expo, React Native, TypeScript e integração Firebase.

Foram também identificadas funcionalidades de mensagens privadas e comunicação com Firestore.

16.1 Problemas encontrados na análise anterior

A análise de 20 de Novembro de 2026 identificou os seguintes desalinhamentos:

1. O "App.tsx" ainda continha autenticação por e-mail.
2. Existia acesso anónimo.
3. Existia pesquisa de utilizadores por e-mail.
4. Estes pontos contradizem a decisão de registo exclusivamente por telefone.
5. A Bíblia ACF aparecia como funcionalidade futura ou inactiva, embora deva estar desbloqueada para todos os planos.

Estes pontos precisam de ser corrigidos e testados.

16.2 Regras Firestore

Foi identificada uma possível diferença entre:

- "firestore.rules";
- "firestore(1).rules".

É necessário confirmar qual ficheiro está efectivamente indicado no "firebase.json".

Não assumir que o ficheiro correcto já está a ser publicado.

O ficheiro de regras utilizado deve corresponder à arquitectura actual e às permissões aprovadas.

17. FIREBASE E SEGURANÇA

O projecto utiliza Firebase como parte da sua infraestrutura.

17.1 Firebase Authentication

Utilizar autenticação por telefone conforme as regras aprovadas.

Não reintroduzir e-mail nem autenticação anónima como métodos de registo do produto.

17.2 Cloud Firestore

Utilizar regras restritivas e testadas.

As regras devem proteger:

- Contas;
- Conversas;
- Mensagens;
- Reuniões;
- Administradores;
- Participantes;
- Carteiras;
- Transacções;
- Dados pessoais.

17.3 Ficheiro de configuração Android

O "app.json" analisado referencia:

"./google-services.json"

Confirmar que o ficheiro existe no local esperado no ambiente de compilação.

Não publicar senhas, tokens, chaves privadas ou credenciais de serviço.

Não incluir credenciais privadas de servidor no repositório.

17.4 Protecção contra abuso

Implementar limites e protecção contra abuso nos fluxos de autenticação, SMS, mensagens, chamadas e operações financeiras.

18. BUILD ANDROID — EXPO EAS

O projecto utiliza módulos nativos do React Native Firebase.

Por isso, o Expo Go não substitui uma compilação nativa completa.

O EAS Build permite gerar o APK através da infraestrutura de compilação.

18.1 Preparação

npm install

18.2 Iniciar sessão no EAS

npx eas-cli@latest login

18.3 Configurar EAS

npx eas-cli@latest build:configure

18.4 Gerar APK Android

npx eas-cli@latest build --platform android --profile preview

18.5 Configuração do perfil

No "eas.json", o perfil "preview" deve estar configurado para produzir APK.

Verificar:

"android.buildType: "apk""

A compilação depende da compatibilidade das dependências, configuração Firebase e credenciais necessárias.

Não considerar o APK pronto sem uma compilação bem-sucedida e testes num dispositivo Android real.

19. FICHEIROS IMPORTANTES DO PROJECTO

A estrutura do repositório deve preservar os ficheiros técnicos necessários.

Ficheiros identificados:

LETSCHATAPP/
│
├── App.tsx
├── app.json
├── eas.json
├── package.json
├── tsconfig.json
├── firebase.json
├── google-services.json
│
├── firestore.rules
├── groupService.ts
├── letsPay.ts
├── LETSCHATAPP_LETSPAY_SPEC.md
│
└── README.md

A estrutura real pode conter outros ficheiros e pastas.

Não apagar ficheiros técnicos apenas porque não aparecem nesta lista.

Não adicionar ao repositório:

- "node_modules";
- Senhas;
- Tokens privados;
- Chaves privadas;
- Credenciais de serviço;
- Ficheiros secretos de configuração.

20. FUNCIONALIDADES PENDENTES OU A VALIDAR

As seguintes funcionalidades devem ser verificadas no código e nos testes antes de serem consideradas concluídas:

Comunicação

- Autenticação exclusivamente por telefone;
- SMS opcional na versão 1.0;
- Lista telefónica Android;
- Correspondência por número;
- Convites;
- Conversas privadas;
- REUNIÕES;
- Limite de 500 participantes;
- Máximo de cinco administradores;
- Protecção do fundador;
- Chamadas de conferência independentes de grupos;
- Chamadas de voz e vídeo;
- Tradução;
- Voz para texto;
- Leitura de texto em voz.

ACTUALIDADE e MARCAS

- Transmissões LIVE;
- Comentários;
- Contagem de espectadores;
- Controlos de privacidade;
- Ícone LIVE animado;
- Produção e integração do GIF;
- Botão TÁ A DAR;
- Animação de um piscar por segundo;
- Recomendações personalizadas;
- Recomendações de marcas e transmissões.

Serviços

- Bíblia ACF integral;
- FILES SALVOS;
- Armazenamento na nuvem;
- Compra de capacidade adicional;
- Renovação mensal;
- LetsPay;
- PIN seguro;
- Ledger;
- Integrações com fornecedores;
- KYC/AML;
- Gestão de planos;
- Cobrança PREMIUM.

Qualidade e segurança

- Testes em Android real;
- Segurança Firestore;
- Verificação de permissões;
- Protecção de dados pessoais;
- Acessibilidade;
- Moderação;
- Prevenção de abuso;
- Testes de desempenho;
- Testes de recuperação de erros.

21. REGRAS DE MANUTENÇÃO DO PROJECTO

1. Este README é a referência principal consolidada do LETSCHATAPP.
2. Todas as decisões novas aprovadas devem ser acrescentadas a este documento.
3. Quando uma decisão nova substituir uma anterior, corrigir ou eliminar a informação antiga.
4. Não apagar informações técnicas importantes sem necessidade.
5. Preservar os ficheiros de código e configurações que continuam necessários.
6. Distinguir requisitos aprovados de funcionalidades efectivamente implementadas.
7. Não declarar uma funcionalidade pronta sem revisão e testes.
8. Não reintroduzir autenticação por e-mail.
9. Não alterar os cinco menus oficiais nem a sua ordem.
10. Não bloquear a Bíblia ACF para utilizadores FREE BASIC.
11. Não alterar os preços actuais do PREMIUM e dos FILES SALVOS sem nova decisão.
12. Não permitir que o fundador saia do grupo que criou.
13. Não permitir que o cliente Android altere directamente saldos financeiros.
14. Não activar dinheiro real antes de concluir as verificações técnicas, financeiras e legais.
15. Não apagar ficheiros existentes quando o utilizador adquire mais capacidade de armazenamento.

---

22. RESUMO DAS DECISÕES ACTUAIS

Elemento| Decisão aprovada
Plataforma principal| Android
Registo| Número de telefone
SMS na versão 1.0| Opcional
Menu 1| PAPO PRIVADO
Menu 2| REUNIÕES
Menu 3| ACTUALIDADE
Menu 4| PAPO ORAL
Menu 5| MARCAS
Participantes por grupo| Até 500
Administradores por grupo| Máximo 5
Fundador| Não pode sair do próprio grupo
FREE BASIC| Gratuito
PREMIUM| US$ 0,10/mês
Bíblia ACF| Desbloqueada em todos os planos
FILES SALVOS| US$ 0,80/GB/mês
Compra de armazenamento| Vários GB, sem limite fixo mensal
Renovação do armazenamento| Mensal
LetsPay| Disponível nos dois planos
Saldo máximo pretendido| US$ 1.000.000
PIN LetsPay| 4 dígitos
Intervalo entre transacções concluídas| 10 minutos
LIVE| Ponto central com ondas simétricas animadas
TÁ A DAR| Pisca uma vez por segundo
Build Android| Expo EAS com perfil APK

---

FIM DO README PRINCIPAL — LETSCHATAPP

Este documento consolida as decisões conhecidas do projecto. A implementação efectiva deve ser confirmada através da análise dos ficheiros e dos testes.
