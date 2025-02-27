# CHANGELOG - VERSIONAMENTO

Todas as mudanças relevantes neste projeto são documentadas aqui.

### [0.1.0](https://github.com/gustaRC/SaferDevAnalytics/compare/v0.1.0...v0.0.3) (2025-02-27)


### ⚙️ Atualização de Dependências:

* **Adicionado biblioteca Ngx-cookie-service e Criado service para sua manipulação:** Ngx-cookie-service manipulará os cookies da aplicação com o service criado ([d5c19db](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/d5c19db3e5c945e555dcfd98995ad66ad4865f6e)))
* **Criado AuthGuard e AuthService:** Criado arquivos para manipulação de autenticação do usuário. Adicionado dependencias para utilziação do HttpClient ([555af61](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/555af61662e57291b930c74fc4d289180ff7e3ce)))


### ➕ Funcionalidades/ Melhorias:

* **Adicionado no interceptor a api key do usuario para as requisições:** Isso vai impedir de toda vez que necessário ter que atribuir a api key ([8038b7a](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/8038b7a75bb9135294a49311abe707c6607bb399)))
* **Criado componente de login:** Criado componente login para implementação futura ([dba0aad](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/dba0aadc66f1dbc4e42a4842c7a6227ece79fe6f)))
* **Criado CoreModule:** Criado modulo de dependencias/funcionalidades obrigatorias para o funcionamento do sistema ([bc59cb2](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/bc59cb26ad00fe0be7ac5b8ea3c5c65357d13c5d)))
* **Criado função de deslogar da aplicação:** Criado função para redirecionar ao login e deletar o cookie auth ([c3c6386](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/c3c63865c90b0b0568ce7da5b9d133406384bc9b)))
* **Criado função de login no AuthService:** Função de login criada ([ad8e622](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/ad8e622f2b742e1ccb57a7cd221bd96275cb708d)))
* **Criado model para Usuarios:** Model no padrão json recebido na requisição de login ([1688b50](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/1688b50472797410991d2bd6ea7cb24ead202a89)))
* **Criado service para interceptar as requisições:** Será utilizado para adicionar headers padrões para todas as requisições ([d1cf75d](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/d1cf75d444fd4e792c26644519589ba56dc6b533)))
* **Implementado lógica do AuthGuard:** Caso não exista o cookie de autenticação não permitira acessar as rotas ([36bc9fe](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/36bc9fe02ca36cb2972fb7cd283a27308eb2d880)))


### 🔄️ Refatoração:

* **Adicionado tipo correto ao response do usuário:** Aplicado tipagem {user: User} para o retorno do get login ([0a460a9](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/0a460a9de9d0415c8d415a901fd841807e42e051)))
* **Melhorado código da função login:** Retirado importações desnecessárias e ajustado ';' nas linhas ([8714b53](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/8714b531af82ab4cb2430f06491159062e40b3fb)))
* **Removido importação HttpClientModule do CoreModule:** Este modulo foi depreciado! Hoje é utilizado a importação de um recurso no app.config ([96b64b4](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/96b64b4697997f1d6e9b7ba505a52df1c4a88f1f)))


### 🪲 Correções:

* **Adicionado readonly nas variaveis da classe User:** O readonly tornará as variaveis imutaveis após a inicialização, que é o desejado! ([229fce3](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/229fce39a9fffc79e7299f951d03de5f1d520eae)))
* **Corrigido importação do AuthInterceptorService:** Não estava sendo executado o interceptador de requisições ([ec28e38](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/ec28e38e89112763ed164837ba4b7e97b07db01d)))
* **Criado arquivo para configuração do proxy:** Sem esse arquivo de configuração proxy ocorre erro durante as requisições da Redmine API. Adaptado a função de login para essa configuração. ([f4937a0](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/f4937a0acafcaedf8cd8632ef87f582f0e87f443)))

### [0.0.2](https://github.com/gustaRC/SaferDevAnalytics/compare/v0.0.1...v0.0.2) (2025-02-23)


### 🪲 Correções:

* **Configuração na estilização do CHANGELOG:** O link Hash ficava em formato de ponto, atrapalhando a visualização dos commits ([11d1b3d](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/11d1b3d3e3f808578299501b6458c4bae29daa82)))

### 0.0.1 (2025-02-23)


### 📘 Documentação:

* **#0 - Adicionado informações no README.md:** Adicionado formato adotado no fluxo de trabalho Git, entre outras informações do objetivo do projeto ([3c3e193](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/3c3e1935d78a44a7a6c7498f63a8a3fa8e706776))), closes [#0]( )


### ⚙️ Atualização de Dependências:

* **#3 - Instalado bibliotecas standard-version e husky:** Bibliotecas necessárias para o versionamento automatico e alimentação do arquivo CHANGELOG ([00b9e0d](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/00b9e0da2eefef6f94288b3bb5411dbe6a10c6fa))), closes [#3]( )


### ➕ Funcionalidades/ Melhorias:

* **#3 - Configurado biblioteca husky:** Criado arquivos de automação no post-commit, pre-commit e post-merge ([82569da](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/82569da27f1c4799859a2ad3cbc67af8e298190a))), closes [#3]( )
* **#3 - Configurado biblioteca standard-version:** Configuração da estilização do CHANGELOG e adição de comando no scripts ([880cfa3](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/880cfa3dec97becdaf00e93aef6d3b73c127abf8))), closes [#3]( )


### 🪲 Correções:

* **#3 - Atualizado mensagem do CHANGELOG:** Mensagem estava com muita informação sobre hash e issue, foram limitadas ([4b237eb](
-> Link Hash Commit: (https://github.com/gustaRC/SaferDevAnalytics/commit/4b237eb965fc7ae9db0157028fb6692b6aa96a61))), closes [#3]( )
