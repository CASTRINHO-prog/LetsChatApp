# LetsChatApp
Aplicação de mensagens LetsChatApp

LETSCHATAPP

Documentação oficial do projecto

Aplicação Android de mensagens, Bíblia Sagrada, armazenamento de ficheiros na nuvem e carteira digital LetsPay.

- Plataforma principal: Android
- Versão da base de código: 0.6.0
- Documentação: Actualizada em 20 de Novembro de 2026
- Tecnologias: Expo, React Native, TypeScript e Firebase
- Identificador Android: "com.letschatapp.mobile"

---

1. VISÃO GERAL DO PROJECTO

O LETSCHATAPP é uma aplicação que pretende reunir comunicação, conteúdos bíblicos, armazenamento de ficheiros e serviços financeiros numa única plataforma.

A aplicação deverá incluir:

1. LETSCHAT GERAL — mensagens privadas e grupos.
2. BÍBLIA SAGRADA - ACF — Bíblia Almeida Corrigida Fiel.
3. FILES SALVOS — armazenamento de ficheiros na nuvem.
4. LETSPAY — carteira digital integrada.

O projecto deve funcionar principalmente em dispositivos Android, com uma interface simples, moderna, segura e adaptada a telemóveis.

Importante: as funcionalidades descritas neste documento representam os requisitos do produto. A sua inclusão neste README não significa que todas estejam implementadas ou prontas para produção.

---

2. PLANOS DE UTILIZAÇÃO

2.1 FREE BASIC

Preço: 0 MZN/mês

O plano FREE BASIC deverá permitir:

- Utilização das funcionalidades básicas de mensagens.
- Conversas privadas.
- Participação e criação de grupos, conforme as permissões.
- Acesso à Bíblia Sagrada ACF.
- Acesso ao LetsPay.
- Depósitos e levantamentos, quando as integrações estiverem disponíveis.
- Transferências entre utilizadores, quando autorizadas.
- Acesso às funcionalidades básicas da aplicação.

2.2 PREMIUM

Preço: 5 MZN/mês

O PREMIUM deverá desbloquear as funcionalidades adicionais definidas para o plano pago.

O pagamento deverá ser realizado através do LetsPay.

Após confirmação efectiva do pagamento pelo fornecedor, o sistema deverá activar o PREMIUM e creditar a receita correspondente na carteira LetsPay do desenvolvedor, considerando taxas, reembolsos e estornos.

2.3 Bíblia Sagrada ACF

A Bíblia Almeida Corrigida Fiel deverá permanecer desbloqueada para todos os utilizadores.

- FREE BASIC: acesso gratuito.
- PREMIUM: acesso gratuito.

A Bíblia ACF não é exclusiva do PREMIUM.

---

3. ESTRUTURA DO MENU PRINCIPAL

A navegação principal deverá manter exactamente esta ordem, da esquerda para a direita:

1. LETSCHAT GERAL
2. BÍBLIA SAGRADA - ACF
3. FILES SALVOS

A entrada do LetsPay deverá ser acrescentada sem alterar a ordem dos três separadores principais.

---

4. REGISTO E AUTENTICAÇÃO

4.1 Cadastro por telefone

O registo deverá utilizar exclusivamente o número de telefone.

Não utilizar:

- Registo por e-mail.
- Login por e-mail.
- Recuperação de conta baseada em e-mail.

4.2 Verificação por SMS

Na primeira versão:

- A verificação por SMS será opcional.
- O utilizador poderá criar a conta sem confirmar o número por SMS.
- O Firebase Authentication será o fornecedor escolhido para a verificação SMS opcional.

A verificação obrigatória ficará reservada para uma versão futura, mediante nova decisão do responsável pelo projecto.

4.3 Firebase

Utilizar Firebase Authentication e Cloud Firestore.

A implementação deverá garantir:

- Identificação segura dos utilizadores.
- Protecção dos dados.
- Controlo de sessões.
- Regras de acesso por utilizador.
- Protecção contra utilização indevida.

---

5. CONTACTOS, CONVERSAS E GRUPOS

5.1 Lista telefónica

As novas conversas privadas e a criação de grupos deverão utilizar a lista telefónica do dispositivo Android.

Funcionamento:

1. Solicitar autorização para aceder aos contactos.
2. Ler os contactos autorizados.
3. Comparar os números telefónicos com as contas registadas no LETSCHATAPP.
4. Apresentar os utilizadores encontrados.
5. Permitir convidar contactos que ainda não utilizam a aplicação.

Não utilizar pesquisa de utilizadores por e-mail.

A autorização do utilizador deverá ser respeitada e os dados dos contactos protegidos.

5.2 Conversas privadas

Implementar:

- Envio e recepção de mensagens.
- Actualização em tempo real.
- Identificação dos contactos.
- Estado online.
- Indicador online no canto inferior esquerdo do menu principal.
- Indicador online abaixo do nome do contacto no ecrã de conversa.

5.3 Grupos

Implementar:

- Criação de grupos.
- Adição de participantes.
- Gestão de membros.
- Administração de grupos.
- Mensagens em grupo.

Limite máximo: 5 administradores por grupo.

---

6. VOZ, TEXTO E LEITURA

A aplicação deverá permitir funcionalidades de acessibilidade e comunicação:

- Conversão de voz em texto.
- Detecção automática do idioma, quando suportada.
- Possibilidade de converter texto em voz.
- Botão com símbolo de altifalante para leitura de mensagens.
- Opção de conversão de voz em texto após detecção do idioma.

Estas funcionalidades deverão ser integradas na interface de conversação e testadas em dispositivos Android.

---

7. BÍBLIA SAGRADA - ACF

A Bíblia Sagrada Almeida Corrigida Fiel deverá estar disponível gratuitamente em todos os planos.

Requisitos:

- Acesso aos livros bíblicos.
- Organização por Antigo e Novo Testamento.
- Selecção de capítulos e versículos.
- Leitura dos textos bíblicos.
- Navegação simples.
- Disponibilidade para FREE BASIC e PREMIUM.

A disponibilização integral da tradução deverá respeitar os direitos e condições aplicáveis à edição utilizada.

---

8. FILES SALVOS

A aplicação deverá disponibilizar uma área de armazenamento de ficheiros na nuvem.

Objectivos:

- Guardar ficheiros pessoais.
- Consultar ficheiros guardados.
- Organizar os ficheiros.
- Permitir acesso posterior.
- Associar os ficheiros à conta do utilizador.

O projecto pretende oferecer armazenamento permanente, mas a retenção efectiva, capacidade, custos, cópias de segurança e condições de disponibilidade deverão ser implementados e definidos antes da disponibilização do serviço.

---

9. LETSPAY — CARTEIRA DIGITAL

O LetsPay é uma funcionalidade financeira integrada no LETSCHATAPP.

Disponibilidade: FREE BASIC e PREMIUM.

O LetsPay não deverá ser exclusivo dos utilizadores PREMIUM.

9.1 Funcionalidades principais

O LetsPay deverá apresentar:

1. Saldo da carteira.
2. Depósitos.
3. Levantamentos.
4. Transferências.
5. Histórico de transacções.
6. Desbloqueio do PREMIUM.
7. PIN de segurança.
8. Identificação do utilizador.
9. Conversão e apresentação de valores na moeda local.

9.2 Métodos de depósito

Implementar integrações com:

- PayPal.
- m-Pesa.
- e-Mola.
- Pix.
- Airtm.

9.3 Métodos de levantamento

Disponibilizar os mesmos fornecedores:

- PayPal.
- m-Pesa.
- e-Mola.
- Pix.
- Airtm.

A disponibilidade de cada fornecedor deverá depender do país, das APIs disponíveis e dos parceiros autorizados.

O m-Pesa e o e-Mola deverão aparecer nos países em que operem e onde exista integração válida.

Não apresentar cobertura internacional como garantida sem confirmação do fornecedor.

9.4 Transferências entre utilizadores

O destinatário deverá ser seleccionado a partir da lista telefónica do Android.

Procedimento:

1. Solicitar autorização para consultar os contactos.
2. Identificar os números correspondentes a contas LETSCHATAPP.
3. Apresentar os destinatários disponíveis.
4. Permitir seleccionar o destinatário.
5. Solicitar o valor.
6. Validar o PIN.
7. Validar o saldo e as regras de segurança.
8. Processar a operação através do backend.
9. Registar o resultado no histórico.

Não permitir transferências para contas não identificadas ou não autorizadas.

9.5 Limite da carteira

Limite máximo pretendido por utilizador:

US$ 1.000.000,00

O backend deverá impedir operações que ultrapassem o limite.

9.6 Criação automática da carteira

Após o registo do utilizador no LETSCHATAPP por número de telefone, o sistema deverá criar automaticamente o perfil LetsPay.

A criação do perfil não significa autorização automática para movimentar dinheiro.

As operações financeiras dependerão das verificações de identidade, requisitos legais e aprovações necessárias.

9.7 PIN de segurança

O LetsPay deverá utilizar um PIN de quatro dígitos.

Regras obrigatórias:

- Exactamente quatro dígitos.
- Não aceitar 0000.
- Não aceitar 1234.
- Não aceitar PIN iniciado por 1 ou 2.
- Rejeitar dígitos repetidos.
- Rejeitar sequências numéricas.
- Rejeitar padrões triviais e combinações previsíveis.

O PIN nunca deverá ser armazenado em texto simples.

Deverá existir protecção contra tentativas repetidas, bloqueio progressivo e recuperação mediante verificação segura.

9.8 Intervalo obrigatório entre transacções

Após cada transacção financeira concluída com sucesso, o utilizador deverá aguardar:

10 MINUTOS

Antes de iniciar outra transacção financeira.

Esta regra deverá ser aplicada pelo servidor, e não depender apenas do relógio do telemóvel.

O intervalo deverá abranger:

- Depósitos.
- Levantamentos.
- Transferências.
- Outras operações financeiras abrangidas pela política do LetsPay.

Operações rejeitadas ou não concluídas não deverão ser tratadas como transacções bem-sucedidas para efeitos deste intervalo.

O backend deverá controlar o momento da última operação concluída com sucesso.

9.9 Moeda e saldo

A carteira deverá apresentar:

- Saldo principal em USD.
- Equivalente na moeda local do utilizador.

O equivalente local deverá apresentar a taxa de câmbio e a hora da última actualização.

O valor convertido será uma estimativa de apresentação. O valor financeiro definitivo dependerá da taxa aplicada pelo fornecedor no momento da operação.

Os valores monetários deverão ser armazenados em unidades inteiras, como cêntimos, evitando erros de precisão.

9.10 Pagamento do PREMIUM

O utilizador deverá conseguir desbloquear o PREMIUM directamente no LetsPay.

Preço:

5 MZN por mês.

Depois da confirmação efectiva do pagamento:

1. Validar a transacção.
2. Activar o PREMIUM.
3. Registar a operação.
4. Creditar a receita correspondente na carteira LetsPay do desenvolvedor.
5. Registar taxas, reembolsos e eventuais estornos.

Nunca creditar receitas com base apenas numa confirmação apresentada pelo telemóvel.

---

10. SEGURANÇA FINANCEIRA E BACKEND

O LetsPay deverá utilizar uma arquitectura financeira controlada pelo servidor.

Requisitos:

- Firebase Cloud Functions ou backend financeiro equivalente.
- Livro-razão (ledger) transaccional.
- Validação de pagamentos.
- Identificadores únicos para operações.
- Protecção contra duplicação de transacções.
- Idempotência.
- Controlo de saldos no servidor.
- Histórico de operações.
- Protecção do PIN.
- Prevenção de fraude.
- Verificação de identidade (KYC).
- Prevenção de branqueamento de capitais (AML).
- Controlo de limites.
- Gestão de reembolsos e estornos.

O cliente Android não deverá poder alterar directamente saldos, confirmar pagamentos ou criar transacções financeiras válidas.

As credenciais secretas dos fornecedores deverão permanecer no backend, nunca no código público da aplicação.

As integrações financeiras só deverão ser activadas depois das aprovações, requisitos legais e testes necessários.

---

11. TECNOLOGIAS DO PROJECTO

Tecnologias identificadas na base de código:

- Expo SDK 54.
- React Native 0.81.4.
- React 19.1.0.
- TypeScript.
- Firebase Authentication.
- Cloud Firestore.
- Expo EAS Build.

Identificador Android:

"com.letschatapp.mobile"

A configuração exacta deverá ser confirmada nos ficheiros do projecto antes de cada compilação.

---

12. ESTRUTURA DOS FICHEIROS

Ficheiros existentes a preservar

- "app.json"
- "eas.json"
- "firebase.json"
- "App.tsx"
- "firestore.rules"
- "groupService.ts"
- "package.json"
- "tsconfig.json"

Ficheiros de documentação e implementação acrescentados

- "README.md" — documentação principal do projecto.
- "letsPay.ts" — tipos, validações e utilitários do LetsPay.
- "LETSCHATAPP_LETSPAY_SPEC.md" — especificação funcional e técnica do LetsPay.
- "INTEGRACAO_PENDENTE.txt" — lista de integrações e funcionalidades ainda por concluir.

O "firestore.rules" deverá utilizar a versão actualizada que protege as carteiras e transacções contra escrita directa pelo cliente.

Não substituir o "App.tsx" actual por uma implementação incompleta. A integração das novas funcionalidades deverá ser feita de forma controlada, preservando o código existente.

---

13. ESTADO ACTUAL DA IMPLEMENTAÇÃO

13.1 Funcionalidades existentes na base de código

A base recebida contém:

- Estrutura Expo e React Native.
- Código TypeScript.
- Integração Firebase Authentication.
- Integração Cloud Firestore.
- Funcionalidades de conversação e mensagens de texto.
- Serviço de grupos.
- Limite de cinco administradores por grupo.

13.2 Funcionalidades ainda pendentes

As seguintes funcionalidades precisam de implementação ou validação:

1. Autenticação exclusivamente por telefone, com SMS opcional.
2. Eliminação do fluxo de autenticação por e-mail e anónima.
3. Lista telefónica e correspondência de números.
4. Convites para contactos que ainda não utilizam a aplicação.
5. Indicadores de estado online.
6. Bíblia ACF integral.
7. FILES SALVOS e armazenamento na nuvem.
8. Conversão de voz em texto.
9. Conversão de texto em voz.
10. Interface completa do LetsPay.
11. Criação e gestão de PIN seguro.
12. Carteira e histórico financeiro.
13. Transferências entre utilizadores.
14. Backend financeiro e ledger.
15. Integração PayPal.
16. Integração m-Pesa.
17. Integração e-Mola.
18. Integração Pix.
19. Integração Airtm.
20. Conversão de USD para moeda local.
21. Aplicação do intervalo de 10 minutos no servidor.
22. Carteira do desenvolvedor.
23. Verificações KYC/AML.
24. Testes de segurança e prevenção de fraude.
25. Preparação e validação do APK Android.

---

14. REGRAS DO FIRESTORE

As regras Firestore deverão:

- Proteger os dados dos utilizadores.
- Restringir o acesso às conversas.
- Controlar as permissões dos grupos.
- Impedir que utilizadores não autorizados alterem dados.
- Limitar a administração dos grupos a cinco administradores.
- Impedir escrita directa do cliente nos saldos e transacções financeiras.
- Permitir que operações financeiras sejam executadas apenas através de serviços autorizados no backend.

As regras Firestore são uma camada de segurança. Não substituem validações de servidor nem um sistema financeiro completo.

---

15. PREPARAÇÃO DO AMBIENTE ANDROID

Requisitos

- Node.js compatível com Expo SDK 54.
- npm.
- Expo.
- Conta Firebase.
- Projecto Firebase configurado.
- Android SDK ou EAS Build.

Configuração Firebase

1. Aceder a https://console.firebase.google.com/
2. Criar ou abrir o projecto Firebase.
3. Adicionar a aplicação Android.
4. Utilizar o identificador "com.letschatapp.mobile".
5. Configurar Firebase Authentication.
6. Configurar Cloud Firestore.
7. Publicar as regras actualizadas.
8. Configurar os países e limites permitidos para SMS, quando aplicável.
9. Descarregar o "google-services.json" e colocá-lo na raiz do projecto, conforme a configuração do Expo.

O ficheiro de configuração e as credenciais privadas não deverão ser publicados indevidamente.

Instalação das dependências

npm install

Preparação Android

npx expo prebuild

Execução local

npx expo run:android

Preparação para EAS Build

npm install
npx eas-cli login

Geração de APK

npx eas build --platform android --profile preview

O perfil de compilação deverá estar configurado correctamente no "eas.json".

O APK só deverá ser considerado pronto depois da compilação terminar com sucesso e de os testes de instalação e funcionamento serem concluídos.

---

16. SEGURANÇA E PROTECÇÃO DE DADOS

O LETSCHATAPP deverá adoptar os seguintes princípios:

- Proteger informações pessoais.
- Solicitar autorização antes de consultar contactos.
- Não divulgar números telefónicos sem autorização.
- Proteger sessões e contas.
- Não armazenar PIN em texto simples.
- Não permitir alterações financeiras pelo cliente.
- Não publicar credenciais secretas.
- Aplicar regras de acesso adequadas.
- Registar operações financeiras.
- Implementar mecanismos de prevenção de fraude.

O tratamento de dados pessoais e financeiros deverá respeitar as leis aplicáveis nos países em que o serviço for disponibilizado.

---

17. ORDEM DE DESENVOLVIMENTO

Para evitar erros e preservar a aplicação existente, o desenvolvimento deverá seguir esta sequência:

1. Consolidar e proteger a estrutura actual.
2. Corrigir o registo e autenticação por telefone.
3. Implementar a lista telefónica.
4. Finalizar conversas e grupos.
5. Implementar os três separadores principais.
6. Integrar a Bíblia ACF.
7. Implementar FILES SALVOS.
8. Desenvolver a interface LetsPay.
9. Implementar PIN e segurança.
10. Criar backend financeiro e ledger.
11. Integrar os fornecedores de pagamento.
12. Implementar câmbio e saldo local.
13. Implementar a carteira do desenvolvedor.
14. Implementar o intervalo de 10 minutos.
15. Realizar testes completos.
16. Preparar o APK de produção.

---

18. REGRAS IMPORTANTES PARA FUTURAS ACTUALIZAÇÕES

Todas as futuras actualizações deverão respeitar as decisões confirmadas:

- O FREE BASIC permanece gratuito.
- O PREMIUM custa 5 MZN por mês.
- A Bíblia ACF permanece gratuita em todos os planos.
- O LetsPay permanece disponível no FREE BASIC e no PREMIUM.
- O registo utiliza exclusivamente números de telefone.
- O SMS é opcional na primeira versão.
- Conversas privadas e grupos utilizam a lista telefónica, com autorização.
- Cada grupo admite no máximo cinco administradores.
- O saldo principal do LetsPay é apresentado em USD.
- O equivalente local também deve ser apresentado.
- O limite pretendido da carteira é US$ 1.000.000.
- O PIN tem quatro dígitos e regras de segurança obrigatórias.
- O intervalo entre transacções financeiras bem-sucedidas é de dez minutos, controlado pelo servidor.
- Os pagamentos PREMIUM confirmados devem gerar receita para a carteira LetsPay do desenvolvedor.

Nenhuma actualização deverá eliminar funcionalidades existentes sem necessidade técnica e sem preservar as decisões do projecto.

---

19. AVISO SOBRE O ESTADO FINANCEIRO

O LetsPay ainda não deverá ser utilizado para movimentar dinheiro real enquanto não estiverem concluídos:

- Backend financeiro.
- Ledger.
- Integrações autorizadas.
- Verificações de identidade.
- Segurança do PIN.
- Controlo de fraude.
- Testes de pagamentos.
- Requisitos legais e regulatórios.

A existência de tipos e funções de validação em "letsPay.ts" não significa que os pagamentos estejam activos.

---

20. OBJECTIVO FINAL

O objectivo é desenvolver uma aplicação LETSCHATAPP funcional, segura e instalável em Android, reunindo:

LETSCHAT GERAL + BÍBLIA SAGRADA ACF + FILES SALVOS + LETSPAY.

O desenvolvimento deverá preservar a estabilidade da aplicação, respeitar as decisões do responsável pelo projecto e implementar progressivamente todas as funcionalidades descritas nesta documentação.

LETSCHATAPP — Uma aplicação, múltiplas funcionalidades.
