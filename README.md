# Sobre o Projeto

Este projeto foi criado com o objetivo de demonstrar os testes automatizados desenvolvidos durante o workshop de Cypress. Utilizamos o Cypress para criar e executar testes automatizados, garantindo a funcionalidade e a estabilidade do site.

## Site de Testes

O site utilizado para a automação dos testes é:

- [Automation Practice](https://automationpratice.com.br/)

## Cenários Automatizados

Durante o workshop, os seguintes cenários foram automatizados:

1. **Cadastro de Usuário com Sucesso**
   - Testa o fluxo completo de cadastro de um novo usuário, verificando se o processo é concluído com sucesso.

2. **Erro ao Tentar Cadastrar Usuário com Dados Inválidos**
   - Simula o cadastro de um usuário com informações incorretas ou incompletas e verifica se o sistema retorna o erro esperado.

3. **Login de Usuário com Sucesso**
   - Este cenário foi incluído para garantir a consistência dos testes. Verifica  se o Login de um usuário é realizado corretamente.

4. **Erro ao Tentar Logar Usuário (Repetido)**
   - Testa uma segunda abordagem para garantir que o sistema lida corretamente com erros durante o Login de um usuário.

## Como Executar os Testes

Para executar os testes, siga as instruções abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio

3. Instale as dependências:
    ```bash
    npm install

4. Execute os testes:
    ```bash
    npx cypress open


5. Ou para rodar os testes em modo headless:
    ```bash
    npx cypress run


## Contribuições
Se você deseja contribuir com melhorias para este projeto, sinta-se à vontade para abrir um pull request ou enviar um issue com sugestões.
