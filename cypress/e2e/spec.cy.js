describe('Tela QaZando Shop', () => {
  beforeEach(() =>{
    cy.visit('https://automationpratice.com.br/')
  })
  
  it('Deve Registrar o usuário com sucesso', () => {
    cy.contains('a', 'Cadastro').click()
    cy.url().should('be.eq', 'https://automationpratice.com.br/register')

    cy.get('#user').type('Teste 1024')
    cy.get('#email').type('email@email.com')
    cy.get('#password').type('123@mudar')
    cy.get('#btnRegister').click()

    cy.contains('Cadastro realizado!').should('be.visible')
  })

  it('Deve dar erro nos campos após clicar no botão Cadastrar', () => {
    cy.contains('a', 'Cadastro').click()
    cy.url().should('be.eq', 'https://automationpratice.com.br/register')

    cy.get('#btnRegister').click()
    cy.contains('O campo nome deve ser prenchido').should('be.visible')
    cy.get('#user').type('Teste 1024')

    cy.get('#btnRegister').click()
    cy.contains('O campo e-mail deve ser prenchido corretamente').should('be.visible')
    cy.get('#email').type('email@email.com')

    cy.get('#btnRegister').click()
    cy.contains('O campo senha deve ter pelo menos 6 dígitos').should('be.visible')
  
  })

  it('Deve realizar o Login com sucesso', () =>{
    cy.contains('a', 'Login').click()

    cy.get('#user').type('emailTeste@email.com')
    cy.get('#password').type('teste123')
    cy.get('#btnLogin').click()

    cy.contains('Login realizado').should('be.visible')
  })

  it('Deve dar erro ao realizar o Login', () => {
    cy.contains('a', 'Login').click()

    cy.get('#btnLogin').click()
    cy.contains('E-mail inválido.').should('be.visible')
    cy.get('#user').type('emailTeste@email.com')

    cy.get('#btnLogin').click()
    cy.contains('Senha inválida.').should('be.visible')

  });
})