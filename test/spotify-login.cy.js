const user = 'ENTER USER'
const pass = 'ENTER PASSWORD'

describe('login', () => {

  it('should login successfully', () => {
    cy.visit('/')
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click()

    cy.get('[data-testid="login-username"]').type(user)
    cy.get('[data-testid="login-password"]').type(pass)

    cy.get('.ButtonInner-sc-14ud5tc-0 > .Type__TypeElement-goli3j-0').click()
    
    cy.get('[data-testid="user-icon"]', { timeout: 4000 }).should('exist')
  })

  it('should show an error for wrong user', () => {
    cy.visit('/')
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click()

    cy.get('[data-testid="login-username"]').type('aaa@gmail.com')
    cy.get('[data-testid="login-password"]').type(pass)

    cy.get('.ButtonInner-sc-14ud5tc-0 > .Type__TypeElement-goli3j-0').click()
    
    cy.get('.Message-sc-15vkh7g-0').should('exist')
  })

  it('should show an error for wrong pass', () => {
    cy.visit('/')
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click()

    cy.get('[data-testid="login-username"]').type(user)
    cy.get('[data-testid="login-password"]').type('as!')

    cy.get('.ButtonInner-sc-14ud5tc-0 > .Type__TypeElement-goli3j-0').click()
    
    cy.get('.Message-sc-15vkh7g-0').should('exist')
  })

  it('should show an error for empty fields', () => {
    cy.visit('/')
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click()

    cy.get('.ButtonInner-sc-14ud5tc-0 > .Type__TypeElement-goli3j-0').click()
    
    cy.get('.Message-sc-15vkh7g-0').should('exist')
  })

  it('should show a message for successful password reset', () => {
    cy.visit('/')
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click()

    cy.get('[data-testid="reset-password-link"]').click()

    cy.get('#email_or_username').type('bla')

    cy.get('.ButtonInner-sc-14ud5tc-0').click()
    
    cy.get('.hSoAUv').should('exist')
  })
})
