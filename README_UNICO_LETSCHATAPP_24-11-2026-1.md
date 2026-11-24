# LETSCHATAPP — README MASTER DO PROJECTO

**Documentação consolidada e actualizada em:** 24 de Novembro de 2026  
**Produto:** LETSCHATAPP  
**Plataforma prioritária:** Android  
**Identificador Android conhecido:** `com.letschatapp.mobile`  
**Versão da base técnica identificada nos documentos:** `0.6.0`  
**Estado deste documento:** especificação consolidada do produto, arquitectura pretendida, estado técnico conhecido e plano de implementação.
**Origem da consolidação:** reúne as três partes do README MASTER de 24/11/2026 com o README principal de 23/11/2026, integrando o conteúdo repetido nas secções correspondentes e preservando no histórico as decisões anteriores que foram substituídas.

> **Nota importante sobre o estado do projecto:** este README reúne decisões do produto e informação técnica que constava dos documentos fornecidos. Uma funcionalidade descrita como requisito não deve ser considerada implementada só por aparecer neste documento. O código, os serviços externos, as regras de segurança e os testes devem ser verificados antes de anunciar que uma funcionalidade está pronta ou de movimentar dinheiro real.

---

## Índice

1. Visão geral
2. Identidade, marca e princípios visuais
3. Estrutura geral da aplicação
4. Navegação principal e menus internos
5. Conta, cadastro, login e recuperação
6. Contactos e descoberta de utilizadores
7. PAPO PRIVADO
8. REUNIÕES
9. PAPO ORAL e chamadas
10. ACTUALIDADE, vídeos e transmissões LIVE
11. LETSLIVE — símbolo e comportamento visual
12. MARCAS e recomendações
13. TÁ A DAR
14. LETSCHAT GERAL
15. BÍBLIA SAGRADA — Almeida Corrigida Fiel
16. FILES SALVOS e armazenamento cloud
17. LetsPay — visão geral
18. LetsPay — cadastro, carteira e saldo
19. LetsPay — PIN e segurança
20. LetsPay — depósitos, levantamentos e transferências
21. LetsPay — PREMIUM, receitas e regras comerciais
22. Planos FREE BASIC e PREMIUM
23. Privacidade, segurança e protecção de dados
24. Arquitectura técnica conhecida
25. Firebase e backend
26. Requisitos de implementação por módulo
27. Interface, acessibilidade e experiência Android
28. Notificações e permissões
29. Requisitos legais, pagamentos e fornecedores
30. Testes e critérios de aceitação
31. Build e distribuição Android
32. Estrutura de ficheiros e repositório
33. Estado conhecido: implementado, pendente e por validar
34. Plano de trabalho recomendado
35. Regras para manutenção deste README
36. Histórico de decisões e alterações até 24/11/2026

---

# 1. Visão geral

O LETSCHATAPP é uma aplicação de comunicação e serviços digitais que reúne, numa experiência móvel, conversas privadas, reuniões/grupos, chamadas, actualidade e transmissões ao vivo, conteúdos de marcas, Bíblia Sagrada, armazenamento de ficheiros e uma carteira digital denominada LetsPay.

A aplicação tem como prioridade o Android. A experiência deve ser simples, consistente, segura e adequada a diferentes condições de rede e capacidades de dispositivos.

## 1.1 Objectivos do produto

- Permitir comunicação privada entre utilizadores.
- Permitir a criação e participação em reuniões/grupos.
- Disponibilizar chamadas de voz e vídeo.
- Reunir conteúdos de actualidade e transmissões LIVE.
- Apresentar MARCAS e conteúdos recomendados de forma relevante.
- Disponibilizar a Bíblia Sagrada na tradução Almeida Corrigida Fiel (ACF), sem a reservar a um plano pago.
- Permitir guardar ficheiros na nuvem através de FILES SALVOS.
- Disponibilizar LetsPay nos planos FREE BASIC e PREMIUM.
- Manter uma identidade visual reconhecível em todos os módulos.

## 1.2 Princípios do produto

1. As decisões visuais aprovadas devem ser respeitadas nas actualizações futuras.
2. A segurança da conta, das conversas e das operações financeiras deve ser tratada como requisito central.
3. Os dados privados das conversas não podem ser expostos a marcas, anunciantes ou outros utilizadores.
4. As funcionalidades financeiras só podem ser activadas depois da implementação e validação do backend, dos fornecedores e das obrigações legais.
5. A documentação deve distinguir requisitos, funcionalidades implementadas e funcionalidades ainda por validar.
6. A aplicação deve continuar utilizável em dispositivos Android de recursos modestos, dentro dos limites técnicos possíveis.

---

# 2. Identidade, marca e princípios visuais

## 2.1 Marca oficial

A identidade visual oficial aprovada para o LETSCHATAPP utiliza:

- Um globo.
- Um avião de papel.
- Balões de conversa.
- A designação **LetsChatApp**.
- O slogan **“Connect. Chat. Share.”**

O logótipo é um elemento de identidade visual. A marca LetsChatApp apresentada no cabeçalho não é uma sessão, separador ou botão de navegação.

## 2.2 Cabeçalho e acesso à conta

- Não transformar o logótipo LetsChatApp num botão de navegação.
- O acesso à Conta Geral e às definições deve ser feito através do ícone ou fotografia de perfil do utilizador.
- O cabeçalho deve manter uma hierarquia visual limpa.
- Não reintroduzir elementos de navegação que tenham sido removidos por decisão expressa.

## 2.3 Ecrã inicial

O ecrã inicial/splash screen aprovado apresenta:

- “Bem-vindo ao”.
- O símbolo e a marca LetsChatApp.
- O slogan “Connect. Chat. Share.”
- Uma apresentação visual das funcionalidades principais.

O ecrã inicial deve preservar a identidade visual aprovada. Alterações futuras devem actualizar a implementação sem descaracterizar a marca.

## 2.4 Cores e consistência

- A barra inferior principal deve usar fundo azul-escuro.
- O azul-escuro removido da faixa superior não deve ser simplesmente reproduzido noutra faixa equivalente.
- Manter contraste suficiente entre texto, ícones, fundos e estados seleccionados.
- Os estados activos, inactivos, desactivados e de carregamento devem ser visualmente distinguíveis.

---

# 3. Estrutura geral da aplicação

A experiência geral inclui três áreas de entrada principais:

1. **LETSCHAT GERAL**
2. **BÍBLIA SAGRADA — ACF**
3. **FILES SALVOS**

Estas três áreas não devem ser confundidas com os cinco menus de navegação internos do LETSCHATAPP.

O LetsPay deve ter uma entrada acessível a partir da experiência da conta/carteira, sem alterar a ordem dos três cartões/áreas principais nem substituir os cinco menus oficiais.

---

# 4. Navegação principal e menus internos

## 4.1 Cinco menus oficiais

Dentro do LETSCHATAPP, a barra de navegação inferior deve apresentar exactamente cinco menus, pela seguinte ordem, da esquerda para a direita:

1. **PAPO PRIVADO**
2. **REUNIÕES**
3. **ACTUALIDADE**
4. **PAPO ORAL**
5. **MARCAS**

A ordem é obrigatória e deve ser mantida em todas as vistas internas em que a navegação inferior principal esteja prevista, incluindo o interior de uma reunião/grupo.

## 4.2 Barra inferior

- Fundo azul-escuro.
- Cinco menus oficiais, sem acrescentar um sexto menu.
- Ícones e rótulos coerentes com cada funcionalidade.
- Estado seleccionado claramente identificável.
- Não substituir os nomes oficiais por GRUPO, PRIVADO ou CHAMADAS na barra principal.

## 4.3 Faixa superior removida — decisão de 24/11/2026

Foi decidido remover completamente a faixa superior azul-escura que apresentava:

- LETSLIVE;
- PAPO ORAL;
- reuniões;
- chamadas;
- MARCAS.

A remoção diz respeito à faixa de navegação superior, não à eliminação das funcionalidades. Cada funcionalidade continua a ser acedida no seu menu, ecrã ou controlo próprio.

Não criar uma nova faixa superior equivalente para voltar a agrupar esses atalhos.

## 4.4 Áreas que não alteram os cinco menus

As áreas LETSCHAT GERAL, BÍBLIA SAGRADA — ACF e FILES SALVOS mantêm a sua estrutura própria. A abertura dessas áreas não autoriza a alteração da ordem dos cinco menus internos do LETSCHATAPP.

---

# 5. Conta, cadastro, login e recuperação

## 5.1 Identificação da conta

- O cadastro e a identificação da conta devem utilizar o número de telefone.
- Não utilizar endereço de e-mail como método de criação de conta ou login.
- Não disponibilizar acesso anónimo como método normal de utilização do produto.
- O número deve ser tratado e armazenado em formato normalizado, incluindo indicativo internacional quando aplicável.
- A aplicação deve evitar a criação de contas duplicadas para o mesmo número.

## 5.2 Código OTP

A decisão mais recente é:

- O código OTP é solicitado durante o cadastro.
- O OTP não deve ser exigido em todos os logins.
- A verificação do cadastro deve confirmar que o utilizador controla o número de telefone.
- O OTP de cadastro não deve ser tratado como mecanismo universal de recuperação de credenciais.
- Devem existir limites de envio, validade, tentativas e protecção contra abuso.

O Firebase Authentication foi identificado como tecnologia escolhida para o fluxo telefónico/SMS. A disponibilidade e o custo do envio dependem do país, destino, configuração e condições do fornecedor.

## 5.3 Login

Depois do cadastro, o acesso normal deve seguir o mecanismo de autenticação seguro definido para a aplicação, sem solicitar novamente o OTP em cada entrada, salvo se uma verificação adicional for necessária por motivo de segurança.

Não reintroduzir login por e-mail ou autenticação anónima.

## 5.4 Recuperação da palavra-passe

A recuperação da palavra-passe da conta deve ser um fluxo separado do OTP de cadastro. Deve validar a identidade do titular através de um mecanismo de recuperação seguro que venha a ser definido e implementado.

Não assumir que o simples facto de o utilizador ter recebido um OTP no cadastro permite recuperar a conta indefinidamente.

## 5.5 Recuperação do PIN LetsPay

A recuperação do PIN financeiro é independente da recuperação da palavra-passe da conta. Deve incluir verificação adicional da identidade e protecção contra tentativas abusivas.

## 5.6 Perfil

O perfil deve guardar apenas os dados necessários ao funcionamento da aplicação, com controlos de privacidade adequados. O utilizador deve poder consultar e actualizar os dados editáveis da sua conta segundo as regras do produto.

---

# 6. Contactos e descoberta de utilizadores

## 6.1 Lista telefónica Android

- Novas conversas privadas devem poder ser iniciadas a partir da lista telefónica do Android.
- A selecção de contactos deve pedir autorização ao utilizador.
- A criação de reuniões/grupos também deve permitir seleccionar participantes a partir dos contactos.
- A aplicação deve comparar números normalizados com os números associados a contas LETSCHATAPP.
- Não utilizar pesquisa por e-mail para encontrar contactos.

## 6.2 Contactos que ainda não utilizam a aplicação

Deve existir uma opção para convidar contactos que ainda não tenham conta LETSCHATAPP.

O convite deve ser iniciado pelo utilizador, respeitando as permissões do Android e as regras aplicáveis ao envio de mensagens ou convites.

## 6.3 Privacidade dos contactos

- Pedir apenas as permissões necessárias.
- Explicar a finalidade da utilização dos contactos.
- Não publicar a lista telefónica.
- Não permitir que um utilizador consulte a lista privada de contactos de outro utilizador.
- Proteger os dados transmitidos ao serviço de correspondência de números.
- Não manter cópias desnecessárias da lista telefónica no backend.

---

# 7. PAPO PRIVADO

PAPO PRIVADO é a área de conversas individuais entre utilizadores.

## 7.1 Funcionalidades previstas

- Lista de conversas.
- Início de nova conversa através dos contactos autorizados.
- Identificação de contactos que já utilizam o LETSCHATAPP.
- Convite de contactos que ainda não utilizam a aplicação.
- Envio e recepção de mensagens de texto.
- Actualização de conversas em tempo real.
- Apresentação do estado das mensagens, quando implementado.
- Histórico de mensagens associado à conta e à conversa.
- Controlos de bloqueio, denúncia e privacidade a definir e testar.

## 7.2 Regras

- A conversa deve estar associada aos participantes autorizados.
- Um utilizador não pode ler conversas de que não faça parte.
- As regras de acesso devem ser impostas no backend, não apenas escondidas na interface.
- A eliminação, retenção e sincronização de mensagens devem seguir uma política documentada.
- Não utilizar a pesquisa por e-mail.

## 7.3 Conteúdos multimédia

O envio de imagens, vídeos, áudio, documentos e outros anexos depende de armazenamento, limites, validação de ficheiros e regras de segurança. Não considerar estes tipos de envio disponíveis apenas porque a interface apresenta um ícone de anexo.

---

# 8. REUNIÕES

REUNIÕES é o menu oficial para reuniões e grupos. A designação antiga GRUPOS não deve substituir o nome REUNIÕES na navegação principal.

## 8.1 Criação e participantes

- A criação de uma reunião/grupo deve permitir seleccionar participantes a partir da lista telefónica Android, após autorização.
- Deve ser possível convidar contactos que ainda não tenham conta.
- O limite previsto é de até **500 participantes** por reunião/grupo.
- A implementação deve validar o limite no backend, não apenas na interface.

## 8.2 Administradores

- Cada reunião/grupo pode ter no máximo **5 administradores**.
- O fundador/criador é o primeiro administrador.
- A promoção de outros administradores deve respeitar o máximo de cinco.
- O backend deve impedir que uma operação ultrapasse o limite.
- A interface deve apresentar claramente os administradores e as respectivas permissões.

## 8.3 Regra especial do fundador

O fundador de uma reunião/grupo nunca pode sair desse grupo.

- A opção “Sair do grupo” deve aparecer desactivada/indisponível para o fundador.
- O backend deve rejeitar qualquer tentativa de remover o fundador através de uma operação normal de saída.
- A regra não pode depender apenas da interface.
- Qualquer processo excepcional de transferência de propriedade ou encerramento do grupo terá de ser definido separadamente; não deve ser presumido.

## 8.4 Interior da reunião

O interior de uma reunião deve manter a navegação inferior oficial, com os cinco menus e pela ordem definida:

PAPO PRIVADO → REUNIÕES → ACTUALIDADE → PAPO ORAL → MARCAS.

## 8.5 Gestão e segurança

Devem existir regras para entrada, saída, convites, remoção de participantes, administração, denúncias e encerramento, com validação no servidor e registos adequados.

---

# 9. PAPO ORAL e chamadas

PAPO ORAL é a área de comunicação por voz e vídeo.

## 9.1 Controlos visuais aprovados

Na área PAPO ORAL:

1. O primeiro ícone é o ícone de chamadas.
2. O segundo ícone é o ícone do globo dentro de si.

A ordem não deve ser invertida.

## 9.2 Chamadas

A funcionalidade deve prever, conforme implementação:

- Iniciar chamada de voz.
- Iniciar chamada de vídeo.
- Atender ou rejeitar chamada.
- Activar/desactivar microfone.
- Activar/desactivar câmara.
- Terminar chamada.
- Apresentar o estado da ligação.
- Gerir permissões de microfone e câmara.
- Tratar interrupções, perda de rede e reconexão.

## 9.3 Chamadas de conferência

As chamadas de conferência são independentes da criação de grupos/reuniões.

- Não é necessário existir previamente um grupo comum.
- O utilizador pode adicionar participantes à conferência.
- A selecção de participantes deve respeitar a lista de contactos autorizada.
- A gestão de participantes e permissões deve ser feita de forma segura.
- Os limites técnicos de participantes dependem da solução de comunicação seleccionada e devem ser confirmados antes de serem anunciados.

## 9.4 Funcionalidades de idioma e acessibilidade

Estão previstas ou em avaliação:

- Tradução de conversas/voz.
- Conversão de voz para texto.
- Leitura de texto em voz.
- Apoio a comunicação entre utilizadores de idiomas diferentes.

Estas capacidades dependem de serviços, modelos, licenças, custos e testes. Não devem ser apresentadas como concluídas antes de existir integração funcional.

---

# 10. ACTUALIDADE, vídeos e transmissões LIVE

ACTUALIDADE é a área de conteúdos, vídeos e transmissões.

## 10.1 Conteúdos

A área deve poder apresentar conteúdos de actualidade e vídeos, com sugestões e controlos de visualização.

## 10.2 Transmissões LIVE

Requisitos previstos:

- Iniciar uma transmissão em directo.
- Visualizar transmissões de outros utilizadores.
- Apresentar o número de espectadores.
- Permitir comentários conforme as regras de privacidade e moderação.
- Permitir ao criador terminar a própria transmissão.
- Distinguir claramente transmissões activas e conteúdos gravados.
- Gerir permissões de câmara e microfone.
- Tratar falhas de rede e interrupções.
- Aplicar mecanismos de denúncia e moderação.

## 10.3 Privacidade e controlo

- O criador deve controlar o início e o fim da própria transmissão.
- Não permitir que um utilizador termine a transmissão de outro sem permissão administrativa legítima.
- Os comentários devem seguir regras de moderação.
- A contagem de espectadores deve ser consistente e não expor dados privados desnecessários.

---

# 11. LETSLIVE — símbolo e comportamento visual

## 11.1 Símbolo oficial

O símbolo LETSLIVE aprovado é composto por:

- Um ponto sólido central.
- Três ondas curvas de um lado.
- Três ondas curvas do outro lado.
- As ondas devem manter equilíbrio visual e simetria em relação ao ponto central.

Não substituir este símbolo por um simples ponto, por um ícone genérico de áudio ou por ondas em número diferente.

## 11.2 Animação

Nas sugestões de LIVE, as três ondas de cada lado devem animar-se a expandir para fora a partir do ponto central.

A animação deve:

- Preservar o ponto central sólido.
- Preservar as três ondas de cada lado.
- Expandir as ondas do centro para o exterior.
- Manter uma apresentação fluida e reconhecível.
- Evitar efeitos excessivos que prejudiquem a leitura ou o desempenho.

A integração do GIF/animação deve ser testada em dispositivos Android reais. A especificação visual não significa que o ficheiro animado já esteja integrado.

---

# 12. MARCAS e recomendações

MARCAS é um menu próprio, separado de ACTUALIDADE.

## 12.1 Objectivo

Apresentar marcas, páginas, conteúdos ou ofertas relevantes para os interesses do utilizador.

## 12.2 Recomendações

O algoritmo de recomendações deve aprender os interesses do utilizador a partir de sinais relevantes de utilização e interacção, para sugerir MARCAS e transmissões LIVE.

A decisão de produto prevê que os interesses possam ser inferidos a partir das conversas e interacções relevantes. Esta capacidade exige uma implementação que preserve a privacidade.

## 12.3 Limites de privacidade

- Não expor o conteúdo de conversas privadas às marcas.
- Não permitir que marcas ou outros utilizadores leiam mensagens privadas.
- Não apresentar mensagens privadas como conteúdo publicitário.
- Utilizar apenas sinais e dados cuja utilização esteja devidamente explicada, autorizada e protegida.
- Disponibilizar controlos de privacidade e preferências quando aplicável.
- Definir retenção, finalidade e acesso aos dados usados para recomendação.

## 12.4 Separação de áreas

MARCAS permanece como menu próprio. Não deve ser fundido com ACTUALIDADE nem recolocado na faixa superior removida.

---

# 13. TÁ A DAR

O botão **TÁ A DAR** é um elemento visual e funcional associado a vídeos e conteúdos em destaque.

## 13.1 Apresentação

- Botão rectangular.
- Cantos curvos.
- Texto exacto: **TÁ A DAR**.
- Deve piscar uma vez por segundo.

## 13.2 Locais de apresentação

O botão deve aparecer:

- Durante a visualização de vídeos, conforme a regra de apresentação definida.
- Nas sugestões de vídeos.

## 13.3 Comportamento

A animação deve ser perceptível sem impedir a leitura do vídeo ou dos restantes controlos. Deve ser testada em dispositivos com diferentes capacidades e respeitar opções de acessibilidade para utilizadores sensíveis a animações.

---

# 14. LETSCHAT GERAL

LETSCHAT GERAL é uma das três áreas principais de entrada da aplicação.

A sua função é reunir o acesso geral às funcionalidades do LETSCHATAPP, respeitando a navegação interna oficial.

O logótipo no cabeçalho não é um botão. O acesso à Conta Geral e às definições deve ser feito pelo avatar/fotografia de perfil.

---

# 15. BÍBLIA SAGRADA — Almeida Corrigida Fiel

## 15.1 Disponibilidade

A Bíblia Sagrada na tradução **Almeida Corrigida Fiel (ACF)** deve estar desbloqueada para:

- FREE BASIC.
- PREMIUM.

A Bíblia não é exclusiva de um plano pago.

## 15.2 Navegação

A experiência deve permitir:

- Escolher livros.
- Navegar por capítulos.
- Consultar versículos.
- Manter uma leitura clara e confortável.
- Retomar a navegação conforme as funcionalidades que venham a ser implementadas.

## 15.3 Conteúdo e licenciamento

O texto integral ACF deve ser obtido e integrado a partir de uma fonte autorizada. A presença da área Bíblia na interface não prova que o texto integral esteja incluído.

Antes da distribuição, confirmar os direitos de utilização, reprodução e distribuição do texto e de eventuais recursos adicionais.

---

# 16. FILES SALVOS e armazenamento cloud

## 16.1 Objectivo

FILES SALVOS permite ao utilizador guardar e consultar ficheiros na nuvem associados à sua conta.

A funcionalidade deve ser distinta de um simples registo local dos nomes dos ficheiros seleccionados.

## 16.2 Preço do armazenamento

O preço aprovado é:

**US$ 0,80 por GB por mês.**

O utilizador pode adquirir ou libertar qualquer quantidade de GB no mesmo mês, pagando US$ 0,80 por cada GB contratado/adicionado.

Não foi definido um limite comercial fixo para a quantidade de GB que pode ser adicionada no mesmo mês. A utilização continua sujeita à capacidade técnica, disponibilidade do serviço, prevenção de abuso e condições do fornecedor de armazenamento.

## 16.3 Gestão de capacidade

A interface deve apresentar, pelo menos:

- Espaço contratado.
- Espaço utilizado.
- Espaço disponível.
- Custo mensal correspondente.
- Opção para adicionar capacidade.
- Opção para libertar capacidade, respeitando os ficheiros já armazenados e as regras de retenção.

A aplicação deve explicar o que acontece quando o utilizador tenta reduzir a capacidade para um valor inferior ao espaço ocupado.

## 16.4 Pagamento da extensão

Os métodos previstos para pagar a extensão do armazenamento são:

- LetsPay.
- m-Pesa.
- e-Mola.
- Pix.
- Airtm.
- PayPal.

A disponibilidade depende do país, integração efectiva, parceiro autorizado e condições do fornecedor. Não anunciar que todos os métodos funcionam em todos os países antes de os validar.

## 16.5 Segurança e gestão de ficheiros

- Controlar o acesso aos ficheiros por utilizador.
- Validar tipos e tamanhos de ficheiro.
- Proteger ficheiros em trânsito e em repouso.
- Definir política de retenção, eliminação e recuperação.
- Evitar acesso público não autorizado.
- Registar operações relevantes.
- Não afirmar que existe armazenamento cloud enquanto a integração real não estiver concluída.

---

# 17. LetsPay — visão geral

LetsPay é a carteira digital integrada no LETSCHATAPP.

## 17.1 Disponibilidade

LetsPay deve estar disponível tanto no plano FREE BASIC como no PREMIUM. A utilização da carteira não deve depender da subscrição PREMIUM.

## 17.2 Criação da carteira

O perfil/carteira LetsPay deve ser criado automaticamente após o registo do utilizador no LETSCHATAPP.

A criação automática do perfil não significa que o utilizador esteja automaticamente autorizado a movimentar dinheiro. A activação financeira depende das verificações, integrações e obrigações legais aplicáveis.

## 17.3 Limite pretendido

O limite máximo de saldo pretendido é de **US$ 1.000.000 por utilizador**.

Este valor é um requisito de produto a validar com fornecedores, parceiros financeiros, limites legais, KYC/AML e capacidade operacional. Não deve ser activado como limite efectivo antes dessas validações.

---

# 18. LetsPay — cadastro, carteira e saldo

## 18.1 Moeda de referência

- O saldo principal deve ser apresentado em USD.
- Deve ser apresentado também o equivalente estimado na moeda local do utilizador.
- O equivalente local deve indicar a taxa e a hora da última actualização.
- O montante final de uma conversão depende da taxa e das comissões aplicadas pelo fornecedor no momento da operação.

## 18.2 Precisão monetária

- Guardar dinheiro em unidades inteiras da menor unidade monetária aplicável, por exemplo cêntimos.
- Não utilizar números de ponto flutuante para saldos ou cálculos financeiros.
- Registar moeda, montante, taxa, comissão, data/hora e referência de cada operação.

## 18.3 Histórico

A carteira deve apresentar um histórico verificável de operações, com estados claros, por exemplo: pendente, concluída, falhada, cancelada ou revertida, conforme o fluxo do fornecedor.

Não apresentar uma operação como concluída antes de existir confirmação confiável do backend/fornecedor.

---

# 19. LetsPay — PIN e segurança

## 19.1 PIN de quatro dígitos

O PIN LetsPay deve ter quatro dígitos.

Devem ser rejeitados:

- `0000`.
- `1234`.
- PIN iniciado por `1` ou `2`.
- Quatro dígitos iguais.
- Sequências simples.
- Padrões triviais ou facilmente adivinháveis.

A validação deve ser aplicada no backend, além da validação visual no telemóvel.

## 19.2 Protecção do PIN

- Nunca guardar o PIN em texto simples.
- Utilizar mecanismo de hash seguro adequado a segredos de autenticação.
- Aplicar limites de tentativas.
- Aplicar bloqueio progressivo em caso de tentativas falhadas.
- Registar eventos de segurança relevantes.
- Exigir recuperação verificada.
- Não revelar o PIN em logs, mensagens de erro ou ferramentas de diagnóstico.

## 19.3 Intervalo entre operações

Depois de uma transacção financeira concluída com sucesso, deve decorrer um intervalo de **10 minutos** antes de o utilizador iniciar outra transacção financeira.

- A regra deve ser imposta no servidor.
- O bloqueio apresentado na interface é apenas informativo.
- O backend deve verificar a última operação concluída por utilizador.
- Operações falhadas ou pendentes não devem ser tratadas automaticamente como concluídas; o comportamento exacto deve ser consistente com o estado confirmado pelo backend.
- O intervalo não pode ser contornado alterando a hora do telemóvel.

---

# 20. LetsPay — depósitos, levantamentos e transferências

## 20.1 Fornecedores previstos

Os métodos previstos para depósitos e levantamentos são:

- PayPal.
- m-Pesa.
- e-Mola.
- Pix.
- Airtm.

Cada método depende de integração real, disponibilidade regional, contrato, autorização e requisitos do fornecedor.

## 20.2 Disponibilidade por país

m-Pesa e e-Mola devem ser apresentados apenas nos países em que o serviço opere e exista integração/parceiro autorizado para o caso de uso pretendido.

Não prometer cobertura universal. A lista de métodos apresentada deve ser determinada pela disponibilidade real no país e pela configuração do backend.

## 20.3 Transferências entre utilizadores

- O remetente deve poder seleccionar o destinatário através da lista telefónica Android, com autorização.
- O sistema deve fazer correspondência do número com uma conta LETSCHATAPP.
- Antes de confirmar, apresentar informação suficiente para o remetente validar o destinatário.
- Não permitir transferências para uma conta escolhida apenas por correspondência ambígua.
- O backend deve validar saldo, limites, PIN, intervalo de 10 minutos, estado das contas e idempotência.
- O cliente não pode escrever directamente no saldo do remetente ou destinatário.

## 20.4 Estados e confirmação

Uma operação só deve ser considerada concluída depois de o backend receber e validar a confirmação do fornecedor ou executar com sucesso a transferência interna autorizada.

A aplicação deve tratar notificações repetidas, atrasadas ou fora de ordem sem duplicar créditos ou débitos.

---

# 21. LetsPay — PREMIUM, receitas e regras comerciais

## 21.1 Pagamento da subscrição

O utilizador deve poder desbloquear/assinar PREMIUM através do fluxo de pagamento disponibilizado na aplicação, incluindo a opção LetsPay prevista.

## 21.2 Crédito ao desenvolvedor

O pagamento do PREMIUM deve ser creditado na conta LetsPay do desenvolvedor depois da confirmação válida do fornecedor.

O registo deve considerar:

- Montante bruto.
- Taxas do fornecedor.
- Montante líquido.
- Reembolsos.
- Estornos.
- Cancelamentos.
- Referência externa da operação.
- Data/hora e estado.

## 21.3 Regras de distribuição

Antes de activar a cobrança, confirmar as regras da Google Play e dos fornecedores de pagamento para subscrições e bens/serviços digitais. Não assumir que qualquer método de pagamento externo pode ser usado em qualquer cenário de distribuição Android.

---

# 22. Planos FREE BASIC e PREMIUM

## 22.1 FREE BASIC

- Preço: **0 MZN por mês**.
- Acesso às funcionalidades incluídas no plano gratuito, conforme implementação e limites definidos.
- Bíblia ACF desbloqueada.
- LetsPay disponível.

## 22.2 PREMIUM

- Preço aprovado: **US$ 0,10**.
- O preço anterior de 5 MZN e a designação PRO foram substituídos.
- A designação oficial a utilizar é **PREMIUM**.
- A Bíblia ACF continua desbloqueada.
- LetsPay continua disponível.

A periodicidade exacta, regras de renovação, impostos, cancelamento e preço final apresentado em cada país devem ser definidos e confirmados antes da cobrança. Não inventar uma periodicidade que não esteja confirmada.

## 22.3 Regras de nomenclatura

- Utilizar FREE BASIC.
- Utilizar PREMIUM.
- Remover PRO das interfaces, textos e documentação activa, excepto quando for necessário explicar historicamente que era a designação anterior.
- Não condicionar o acesso à Bíblia ACF ou à carteira LetsPay à subscrição PREMIUM.

---

# 23. Privacidade, segurança e protecção de dados

## 23.1 Princípios

- Recolher apenas os dados necessários.
- Explicar as permissões solicitadas.
- Restringir o acesso a dados pessoais e conteúdos privados.
- Proteger dados em trânsito e em repouso.
- Definir retenção e eliminação.
- Manter registos de segurança sem guardar segredos.
- Disponibilizar mecanismos de denúncia e bloqueio quando aplicável.

## 23.2 Conversas privadas

As conversas privadas devem ser acessíveis apenas aos participantes autorizados e aos serviços estritamente necessários para a entrega e armazenamento.

O algoritmo de recomendações não pode transformar mensagens privadas em conteúdo visível para marcas ou terceiros.

## 23.3 Regras no servidor

As regras de segurança devem ser aplicadas no backend/Firebase. Ocultar botões ou bloquear acções apenas na interface não é suficiente.

## 23.4 Segurança financeira

O backend deve controlar saldos, transacções, PIN, limites, estados, validações de fornecedores e registos financeiros. O cliente Android não deve poder criar saldos ou confirmar operações.

## 23.5 Segredos e credenciais

Nunca colocar num repositório público:

- Chaves privadas.
- Tokens de acesso.
- Credenciais de serviço.
- Segredos de fornecedores.
- Chaves administrativas.
- Ficheiros de configuração que contenham segredos ou dados sensíveis.

O ficheiro `google-services.json` deve ser tratado de acordo com a política de configuração e segurança do projecto; não incluir credenciais privadas ou chaves de servidor no cliente.

---

# 24. Arquitectura técnica conhecida

## 24.1 Base técnica de referência

Os documentos técnicos mais recentes fornecidos identificam:

- Expo `~54.0.0`.
- React `19.1.0`.
- React Native `0.81.4`.
- TypeScript `~5.9.2`.
- `@react-native-firebase/app` `^23.5.0`.
- `@react-native-firebase/auth` `^23.5.0`.
- `@react-native-firebase/firestore` `^23.5.0`.

O `app.json` anteriormente analisado indicava:

- Versão `0.6.0`.
- Identificador Android `com.letschatapp.mobile`.
- Referência a `./google-services.json`.

O `eas.json` analisado tinha um perfil `preview` configurado para gerar APK.

Estes números são a referência dos ficheiros analisados anteriormente e devem ser confirmados no repositório actual antes de actualizar dependências ou preparar uma build.

## 24.2 Protótipo Web/PWA anterior

Um dos READMEs fornecidos descreve uma base inicial Web/PWA com Vite, Capacitor e demonstrações locais. Esse documento refere:

- `npm run dev`.
- `npm run build`.
- Pasta `dist`.
- `npx cap add android`.
- `npx cap sync android`.
- `npx cap open android`.

Essa descrição pertence a uma fase/protótipo anterior e não deve ser misturada com a configuração técnica Expo/React Native identificada nos documentos posteriores.

Não executar os comandos Capacitor como se fossem o fluxo actual do projecto Expo sem confirmar que o repositório em uso corresponde efectivamente ao protótipo Web/PWA.

## 24.3 Limites da informação técnica

Este README não confirma que o código actual tenha sido novamente inspeccionado em 24/11/2026. Os estados técnicos descritos na secção 33 reflectem os documentos fornecidos e a análise técnica anteriormente registada.

---

# 25. Firebase e backend

## 25.1 Serviços identificados

- Firebase Authentication.
- Cloud Firestore.
- Firebase nativo através de `@react-native-firebase/*`.

## 25.2 Configuração Android

1. Criar ou abrir o projecto no Firebase Console.
2. Registar a aplicação Android com o identificador `com.letschatapp.mobile`.
3. Descarregar o ficheiro `google-services.json`.
4. Colocar o ficheiro no local indicado pela configuração do projecto.
5. Configurar Authentication para o fluxo telefónico pretendido.
6. Criar/configurar Cloud Firestore.
7. Rever as regras de segurança.
8. Configurar limites e protecção contra abuso.
9. Testar em dispositivo Android real.

O ficheiro `google-services.json` não está incluído neste README.

## 25.3 Backend financeiro

Antes de activar LetsPay com dinheiro real, criar um backend confiável para:

- Ledger/livro-razão.
- Criação e validação de transacções.
- Integração com fornecedores.
- Webhooks e confirmação de operações.
- Idempotência.
- Conversão cambial e taxas.
- PIN e limites.
- KYC/AML e prevenção de fraude.
- Auditoria e reconciliação.

## 25.4 Regras Firestore

Os documentos anteriores indicam que as regras Firestore impediam a escrita directa do cliente nas carteiras, o que é uma protecção inicial.

É necessário confirmar qual o ficheiro efectivamente referenciado por `firebase.json` e validar as regras publicadas. Foi identificada anteriormente a necessidade de verificar possíveis divergências entre `firestore(1).rules` e `firestore.rules`.

Não assumir que regras locais estão publicadas ou que protegem todos os caminhos da base de dados.

---

# 26. Requisitos de implementação por módulo

Esta secção serve como lista funcional para desenvolvimento. Os itens são requisitos, não uma declaração de conclusão.

## 26.1 Conta e autenticação

- [ ] Cadastro por número de telefone.
- [ ] OTP apenas durante o cadastro.
- [ ] Login sem exigir OTP em todas as entradas.
- [ ] Remover login por e-mail.
- [ ] Remover autenticação anónima como fluxo normal.
- [ ] Recuperação da palavra-passe em fluxo separado.
- [ ] Perfil e sessão persistentes e seguros.
- [ ] Limites e protecção contra abuso.

## 26.2 Contactos e PAPO PRIVADO

- [ ] Permissão Android para contactos.
- [ ] Normalização dos números.
- [ ] Correspondência com contas registadas.
- [ ] Convites para não-utilizadores.
- [ ] Lista de conversas.
- [ ] Envio/recepção de mensagens.
- [ ] Regras de acesso por participante.
- [ ] Bloqueio e denúncia.
- [ ] Testes de sincronização e privacidade.

## 26.3 REUNIÕES

- [ ] Criação de reunião/grupo.
- [ ] Selecção de participantes por contactos.
- [ ] Limite de 500 participantes.
- [ ] Máximo de cinco administradores.
- [ ] Fundador como primeiro administrador.
- [ ] Fundador impedido de sair.
- [ ] Opção “Sair do grupo” desactivada para o fundador.
- [ ] Regras de administração impostas no backend.
- [ ] Navegação inferior com os cinco menus oficiais.

## 26.4 PAPO ORAL e chamadas

- [ ] Ícone de chamadas na primeira posição.
- [ ] Ícone do globo na segunda posição.
- [ ] Chamadas de voz.
- [ ] Chamadas de vídeo.
- [ ] Controlos de microfone e câmara.
- [ ] Terminar chamada.
- [ ] Conferências sem grupo prévio.
- [ ] Adicionar participantes.
- [ ] Testes de rede, permissões e interrupções.

## 26.5 ACTUALIDADE e LETSLIVE

- [ ] Feed de conteúdos.
- [ ] Visualização de vídeos.
- [ ] Iniciar/terminar LIVE.
- [ ] Contagem de espectadores.
- [ ] Comentários e moderação.
- [ ] Símbolo LETSLIVE com ponto central e três ondas por lado.
- [ ] Animação das ondas do centro para fora.
- [ ] Testes em Android real.

## 26.6 MARCAS e TÁ A DAR

- [ ] Menu MARCAS separado.
- [ ] Recomendações relevantes.
- [ ] Protecção de conversas privadas.
- [ ] Botão TÁ A DAR em vídeos.
- [ ] Botão TÁ A DAR nas sugestões.
- [ ] Formato rectangular com cantos curvos.
- [ ] Piscar uma vez por segundo.
- [ ] Testes de acessibilidade e desempenho.

## 26.7 Bíblia e FILES SALVOS

- [ ] Bíblia ACF integral.
- [ ] Fonte/licença autorizada.
- [ ] Navegação por livros, capítulos e versículos.
- [ ] ACF disponível em FREE BASIC e PREMIUM.
- [ ] Armazenamento cloud real.
- [ ] Preço de US$ 0,80 por GB por mês.
- [ ] Gestão de espaço contratado/utilizado/disponível.
- [ ] Pagamento da extensão pelos métodos disponíveis.
- [ ] Segurança, retenção e eliminação de ficheiros.

## 26.8 LetsPay

- [ ] Perfil criado após registo.
- [ ] Carteira disponível em FREE BASIC e PREMIUM.
- [ ] PIN de quatro dígitos e validação.
- [ ] Recuperação segura do PIN.
- [ ] Saldo em USD e estimativa local.
- [ ] Depósitos e levantamentos integrados.
- [ ] Transferências entre utilizadores.
- [ ] Ledger no backend.
- [ ] Intervalo de 10 minutos imposto no servidor.
- [ ] Limite pretendido de US$ 1.000.000 validado.
- [ ] KYC/AML e prevenção de fraude.
- [ ] Reconciliação e auditoria.
- [ ] Aprovações e conformidade dos fornecedores.

---

# 27. Interface, acessibilidade e experiência Android

- Manter os menus e nomes oficiais.
- Evitar faixas ou atalhos duplicados.
- Garantir que botões e ícones têm acções reais.
- Apresentar estados de carregamento, erro, sucesso e indisponibilidade.
- Evitar que animações impeçam a utilização.
- Considerar tamanhos de ecrã e densidades diferentes.
- Pedir permissões apenas no momento em que são necessárias.
- Explicar por que razão uma permissão é solicitada.
- Testar em dispositivos Android reais, incluindo equipamentos com memória e desempenho limitados.
- Não confundir um protótipo visual com uma funcionalidade ligada ao backend.

---

# 28. Notificações e permissões

As funcionalidades que dependem de notificações, câmara, microfone, contactos, ficheiros ou armazenamento devem solicitar as permissões Android necessárias.

A aplicação deve:

- Explicar a finalidade da permissão.
- Funcionar de forma limitada quando uma permissão opcional é recusada.
- Não bloquear funcionalidades não relacionadas.
- Tratar permissões revogadas nas definições do Android.
- Evitar recolha de dados em segundo plano sem necessidade e sem informação adequada.

Notificações push, chamadas em segundo plano e notificações de novas mensagens dependem de configuração e testes próprios. Não assumir que estão activas apenas por existir Firebase no projecto.

---

# 29. Requisitos legais, pagamentos e fornecedores

## 29.1 Pagamentos

Antes de disponibilizar depósitos, levantamentos, transferências ou armazenamento pago:

- Confirmar disponibilidade e autorização dos fornecedores.
- Confirmar os países suportados.
- Confirmar taxas e limites.
- Confirmar regras de utilização comercial.
- Confirmar requisitos de identificação.
- Confirmar requisitos legais e regulamentares.
- Confirmar políticas de cobrança da Google Play quando aplicável.

## 29.2 KYC/AML

A movimentação de dinheiro pode exigir verificação de identidade, monitorização de operações, limites, prevenção de fraude e procedimentos de conformidade.

A implementação deve ser adequada aos países e parceiros onde o serviço for disponibilizado.

## 29.3 Não activar dinheiro real prematuramente

Não activar depósitos, levantamentos ou transferências reais enquanto não existirem:

- Backend financeiro seguro.
- Ledger e reconciliação.
- Integrações aprovadas.
- Webhooks validados.
- KYC/AML aplicável.
- Protecção contra fraude.
- Testes de ponta a ponta.
- Procedimentos de suporte, estorno e resolução de disputas.

---

# 30. Testes e critérios de aceitação

## 30.1 Testes funcionais

Cada módulo deve ser testado em cenários normais, extremos e de erro.

## 30.2 Testes de segurança

- Acesso não autorizado a conversas.
- Tentativa de alterar permissões.
- Tentativa de exceder o limite de administradores.
- Tentativa de remover o fundador.
- Tentativa de exceder o limite de participantes.
- Tentativa de alterar saldo directamente pelo cliente.
- Repetição de pedidos financeiros.
- Tentativas repetidas de PIN.
- Acesso indevido a ficheiros.

## 30.3 Testes financeiros

- Operação concluída.
- Operação pendente.
- Operação falhada.
- Callback/webhook repetido.
- Callback atrasado.
- Reembolso e estorno.
- Taxas e conversão.
- Intervalo de 10 minutos.
- Reconciliação do ledger.
- Limites por país e por utilizador.

## 30.4 Critério de conclusão

Uma funcionalidade só deve ser marcada como concluída depois de:

1. Implementação no cliente e no backend, quando aplicável.
2. Regras de segurança verificadas.
3. Testes funcionais aprovados.
4. Testes em Android real.
5. Tratamento de erros e estados de rede.
6. Documentação actualizada.

---

# 31. Build e distribuição Android

## 31.1 Expo e módulos nativos

A base técnica identificada usa módulos nativos `@react-native-firebase/*`. Expo Go não substitui uma compilação nativa com os módulos necessários.

O fluxo de build de referência é Expo EAS, sujeito à confirmação dos ficheiros actuais do repositório.

## 31.2 Comandos de referência

Num ambiente com Node.js e com o projecto correctamente configurado:

```bash
npm install
npx eas-cli@latest login
npx eas-cli@latest build:configure
npx eas-cli@latest build --platform android --profile preview
```

O perfil `preview` deve manter `android.buildType` como `apk` no `eas.json`, caso esse continue a ser o formato pretendido para testes.

## 31.3 Condições para a build

A compilação depende de:

- Dependências compatíveis.
- Configuração Expo correcta.
- Configuração Firebase nativa.
- `google-services.json` válido e no local esperado.
- Credenciais e configuração EAS.
- Regras e serviços necessários.
- Testes da aplicação compilada.

Uma build concluída não prova que todas as funcionalidades estejam implementadas ou que estejam prontas para produção.

## 31.4 Distribuição

Antes de distribuir uma versão:

- Testar instalação e actualização.
- Testar cadastro e login.
- Testar navegação.
- Testar permissões.
- Testar comunicação e sincronização.
- Testar consumo de dados e estabilidade.
- Confirmar política de privacidade e termos.
- Não activar funcionalidades financeiras não validadas.

---

# 32. Estrutura de ficheiros e repositório

Os documentos técnicos anteriores identificaram ou mencionaram os seguintes ficheiros, conforme aplicável:

- `App.tsx`
- `app.json`
- `eas.json`
- `package.json`
- `firebase.json`
- `firestore.rules`
- `groupService.ts`
- `tsconfig.json`
- `google-services.json` (configuração local, segundo a política do projecto)
- `README.md`
- `LETSCHATAPP_LETSPAY_SPEC.md`
- `letsPay.ts`

A estrutura efectiva deve ser confirmada no repositório actual. Não criar ficheiros vazios apenas para corresponder a esta lista.

Não versionar:

- `node_modules`.
- Senhas.
- Tokens.
- Chaves privadas.
- Credenciais de serviço.
- Ficheiros temporários de build.
- Dados pessoais reais de utilizadores.

---

# 33. Estado conhecido: implementado, pendente e por validar

Esta secção evita confundir o que foi identificado nos documentos técnicos com o que ainda é apenas uma decisão ou requisito.

## 33.1 Identificado na base v0.6.0 analisada anteriormente

Os documentos fornecidos indicam que a base técnica anterior incluía:

- Aplicação Expo / React Native / TypeScript.
- Integração Firebase Authentication.
- Integração Cloud Firestore.
- Conversas e mensagens de texto em tempo real na implementação analisada.
- Limite de até cinco administradores por grupo nas regras/serviço então analisados.
- Perfil EAS `preview` configurado para APK.
- Identificador Android `com.letschatapp.mobile`.

Estes pontos devem ser novamente confirmados no código actual antes de serem tratados como estado presente.

## 33.2 Divergências anteriormente encontradas no código

A análise técnica anterior indicou que:

- `App.tsx` ainda continha autenticação por e-mail.
- Existia acesso anónimo.
- Existia pesquisa de utilizadores por e-mail.
- A área ACF aparecia como futura/inactiva.
- A política de autenticação não estava alinhada com as decisões do produto.
- A lista telefónica e correspondência por número ainda não estavam implementadas.
- FILES SALVOS ainda não tinha armazenamento cloud real.
- LetsPay ainda não tinha integração real com os fornecedores.
- Não existia backend financeiro completo com ledger, KYC, câmbio, pagamentos, PIN e transferências.

## 33.3 Não considerar concluído sem nova validação

- Cadastro por telefone com OTP apenas no cadastro.
- Recuperação separada da palavra-passe e do PIN.
- Contactos Android e convites.
- REUNIÕES completas e limite de 500 participantes.
- Protecção especial do fundador.
- Chamadas e conferências.
- LIVE e LETSLIVE animado.
- Recomendações de MARCAS.
- TÁ A DAR.
- Bíblia ACF integral.
- FILES SALVOS cloud.
- LetsPay com dinheiro real.
- Subscrição PREMIUM e cobrança.
- Notificações push.
- Tradução, voz-para-texto e leitura de texto em voz.

## 33.4 Estado financeiro

Os documentos anteriores indicam que as regras Firestore impediam escrita directa do cliente nas carteiras. Isso é uma protecção inicial, não substitui um backend financeiro completo.

**Não introduzir dinheiro real nesta versão enquanto as integrações, o ledger, a conformidade e os testes não estiverem concluídos.**

---

# 34. Plano de trabalho recomendado

A sequência abaixo reduz riscos e evita activar módulos dependentes antes de existirem as bases necessárias.

## Fase 1 — Consolidar a base

1. Confirmar o repositório e a versão real do código.
2. Confirmar Expo, React Native, TypeScript e Firebase.
3. Remover fluxos antigos de e-mail e autenticação anónima.
4. Implementar cadastro por telefone com OTP apenas no cadastro.
5. Definir login e recuperação separados.
6. Rever as regras Firestore e os ficheiros efectivamente publicados.

## Fase 2 — Navegação e comunicação

1. Aplicar os três cartões/áreas de entrada.
2. Aplicar os cinco menus oficiais na ordem definida.
3. Remover a faixa superior azul-escura.
4. Aplicar a barra inferior azul-escura.
5. Implementar contactos e correspondência por número.
6. Consolidar PAPO PRIVADO.
7. Implementar REUNIÕES, limite de participantes, administradores e regra do fundador.

## Fase 3 — Voz, vídeo e conteúdos

1. Implementar PAPO ORAL.
2. Implementar chamadas e conferências independentes de grupos.
3. Implementar ACTUALIDADE e LIVE.
4. Integrar o símbolo LETSLIVE e a animação aprovada.
5. Implementar MARCAS e recomendações com protecção de privacidade.
6. Integrar TÁ A DAR.

## Fase 4 — Conteúdos e ficheiros

1. Integrar Bíblia ACF a partir de fonte/licença autorizada.
2. Implementar navegação por livros, capítulos e versículos.
3. Implementar FILES SALVOS com armazenamento cloud.
4. Aplicar o preço de US$ 0,80 por GB por mês.
5. Integrar os métodos de pagamento disponíveis e autorizados para a extensão.

## Fase 5 — LetsPay e PREMIUM

1. Criar backend financeiro.
2. Implementar ledger.
3. Implementar PIN e recuperação segura.
4. Integrar fornecedores por país.
5. Implementar depósitos, levantamentos e transferências.
6. Implementar KYC/AML e prevenção de fraude.
7. Implementar o intervalo de 10 minutos no servidor.
8. Implementar PREMIUM a US$ 0,10, após confirmar periodicidade, regras e cobrança.
9. Testar estornos, reembolsos, taxas e reconciliação.
10. Só depois activar dinheiro real.

## Fase 6 — Qualidade e distribuição

1. Testar em Android real.
2. Corrigir falhas de desempenho e estabilidade.
3. Rever privacidade e segurança.
4. Preparar APK de teste.
5. Validar a build e o processo de instalação.
6. Preparar distribuição apenas depois dos critérios de aceitação.

---

# 35. Regras para manutenção deste README

1. Este README é a referência consolidada das decisões do produto até à data indicada.
2. Quando uma decisão for alterada, actualizar a secção correspondente e o histórico.
3. Remover instruções antigas que entrem em conflito com decisões mais recentes.
4. Não manter PRO como plano activo; a designação actual é PREMIUM.
5. Não reintroduzir e-mail ou acesso anónimo como métodos de cadastro/login.
6. Não exigir OTP em todos os logins.
7. Não alterar a ordem dos cinco menus oficiais.
8. Não reintroduzir a faixa superior azul-escura removida.
9. Não alterar o símbolo LETSLIVE aprovado.
10. Não condicionar a Bíblia ACF ou LetsPay ao plano PREMIUM.
11. Não afirmar que uma integração existe sem a testar.
12. Não activar dinheiro real antes de concluir os requisitos financeiros e legais.
13. Manter separadas as decisões do produto, o estado do código e as tarefas pendentes.
14. Actualizar a data deste documento sempre que houver uma revisão substantiva.

---

# 36. Histórico de decisões e alterações até 24/11/2026

## 18–20/11/2026 — base inicial e decisões técnicas

- Documentação inicial da aplicação Android e do protótipo Web/PWA.
- Identificação da base Expo / React Native / TypeScript / Firebase nos ficheiros técnicos posteriores.
- Identificador Android conhecido: `com.letschatapp.mobile`.
- Definição inicial de cadastro por telefone.
- Definição de utilização da lista telefónica para iniciar conversas e seleccionar participantes.
- Definição do limite de cinco administradores por grupo.
- Definição dos planos FREE BASIC e plano pago, inicialmente designado PRO.
- Definição de que a Bíblia ACF deve estar desbloqueada em todos os planos.
- Especificação inicial de LetsPay, fornecedores, PIN, saldo e segurança financeira.

## 21–23/11/2026 — consolidação funcional e visual

- Substituição da designação PRO por PREMIUM.
- Confirmação de LetsPay nos planos FREE BASIC e PREMIUM.
- Consolidação das regras de segurança financeira e necessidade de backend/ledger.
- Aprovação da navegação inferior com cinco menus oficiais: PAPO PRIVADO, REUNIÕES, ACTUALIDADE, PAPO ORAL e MARCAS.
- Confirmação de que o fundador de uma reunião/grupo não pode sair e deve ter a opção “Sair do grupo” desactivada.
- Definição de chamadas de conferência independentes de grupos prévios.
- Definição do símbolo LETSLIVE com ponto central sólido e três ondas curvas de cada lado.
- Definição da animação das ondas a expandirem-se do centro para fora.
- Definição do botão TÁ A DAR, rectangular, de cantos curvos e a piscar uma vez por segundo, nos vídeos e sugestões.
- Definição de recomendações de MARCAS e LIVE baseadas em interesses, com protecção das conversas privadas.
- Definição do custo de FILES SALVOS: US$ 0,80 por GB por mês, permitindo adicionar/libertar capacidade.

## 24/11/2026 — actualização consolidada

- PREMIUM passa a custar **US$ 0,10**, substituindo o valor anterior de 5 MZN.
- OTP passa a ser solicitado apenas durante o cadastro.
- Recuperação da palavra-passe da conta e recuperação do PIN LetsPay ficam em processos separados.
- Remoção completa da faixa superior azul-escura que apresentava LETSLIVE, PAPO ORAL, reuniões, chamadas e MARCAS.
- A barra inferior passa a ter fundo azul-escuro.
- Em PAPO ORAL, o primeiro ícone é o de chamadas e o segundo é o globo dentro de si.
- Consolidação das áreas principais LETSCHAT GERAL, BÍBLIA SAGRADA — ACF e FILES SALVOS, sem alterar os cinco menus internos oficiais.
- Revisão das contradições entre os documentos fornecidos e adopção das decisões mais recentes como referência.

---

**Fim do README MASTER — LETSCHATAPP**  
**Data de referência: 24 de Novembro de 2026**
