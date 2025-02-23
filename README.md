# Safer Dev Analytics - Acompanhamento de Tarefas para Desenvolvedores
**Objetivo**: Criar uma aplicação front-end que se alimentará do Redmine API para exibição de dados dos desenvolvedores da empresa Belt Sistemas. Facilitando a visualização de métricas!

**Arquitetura do Código**: Manter/criar um código ORGANIZADO, REUTILIZAVEL, REFATORAVEL e com boa MANUTENÇÃO.

---

### Estrutura Git

O repositório segue um modelo de ramificação para garantir a qualidade do código e facilitar a colaboração. Os principais ramos são:

- `main`: Este ramo contém o código pronto para produção. Só faça merge neste ramo quando o código estiver totalmente testado e aprovado;
- `develop`: Este ramo é usado para desenvolvimento e integração de novas funcionalidades. Faça merge regularmente dos ramos de funcionalidades neste ramo;
- `feature/*`: Estes ramos são usados para desenvolver novas funcionalidades. Nomeie os ramos de acordo com a funcionalidade que está sendo desenvolvida (por exemplo, `feature/pagina-de-login`);
- `fix/*`: Estes ramos são usados para corrigir bugs. Nomeie os ramos de acordo com o bug que está sendo corrigido (por exemplo, `fix/corrige-login`);
- **Nome Branch**: Utiliza o formato de começar com o _NÚMERO_DO_CARD_TRELLO_Descrição de no máximo 4 PALAVRAS separadas por travessão (-). **Exemplo:** `1_configuracao-inicial`, `3_adicao-versionamento-automatico`, `7_configurando-service-autenticacao`

### Fluxo de Trabalho

1. Crie um novo ramo a partir de `develop` para cada funcionalidade ou correção de bug.
2. Faça commit das suas alterações no ramo de funcionalidade (UTILIZANDO AS MENSAGENS DE COMMITS CERTAS).
3. Envie o ramo de funcionalidade para o repositório remoto.
4. Crie um pull request para fazer merge do ramo de funcionalidade em `develop`.
5. Após a revisão e aprovação do código, faça o merge do pull request.
6. Periodicamente, faça merge de `develop` em `main` para um novo lançamento.

### Mensagem Commit

Mensagens utilizam o padrão _Coventional Commits_.
Siga essa intrução

``` bash
- git commit -m "{_TAG_}(#_NUMERO-DO-CARD_ - _MENSAGEM-PRINCIPAL_): _DESCRIÇÃO-DO-QUE-FOI-FEITO_"
```
- Use o tempo presente ("Adiciona funcionalidade" e não "Adicionou funcionalidade").
- Comece a mensagem de commit com letra maiúscula.
- Mantenha a mensagem curta e descritiva.
- Referencie problemas e tarefas (CARD TRELLO) quando aplicável (por exemplo, `#123 - ...`).

### Tags

Versionamento no padrão _Semantic Version (SemVer)_ utilizando o _Coventional Commits_.
- ***feat***: para Funcionalidades/ Melhorias;
- ***fix***: para Correções;
- ***style***: para Estilo/Estilização;
- ***chore***: para Atualização de Dependências;
- ***refactor***: para Refatoração;
- ***docs***: para Documentação;
- ***test***: para Testes;
- ***BREAKING CHANGE***: para Alterações Críticas (mudança de compatibilidade);

----

### This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
