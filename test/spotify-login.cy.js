const user = Cypress.env('user')  
const pass = Cypress.env('pass')  

describe('login',  {
  testIsolation: true,
},() => {

  it('should login successfully', () => {
    cy.visit('/')
    cy.get('#onetrust-accept-btn-handler', { timeout: 15000 }).click() //Acept cookies
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click()

    cy.get('[data-testid="login-username"]').type(user)
    cy.get('[data-testid="login-password"]').type(pass)

    cy.get('.ButtonInner-sc-14ud5tc-0 > .Type__TypeElement-sc-goli3j-0').click()
    
    cy.get('[data-testid="user-icon"]', { timeout: 6000 }).should('exist')
  })

  it('should show an error for wrong user', () => {
    cy.visit('/')
    cy.get('#onetrust-accept-btn-handler', { timeout: 15000 }).click() //Acept cookies
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click()

    cy.get('[data-testid="login-username"]').type('aaa@gmail.com')
    cy.get('[data-testid="login-password"]').type(pass)

    cy.get('.ButtonInner-sc-14ud5tc-0 > .Type__TypeElement-sc-goli3j-0').click()
    
    cy.get('.Message-sc-15vkh7g-0').should('have.text','Incorrect username or password.')
  })

  it('should show an error for wrong pass', () => {
    cy.visit('/')
    cy.get('#onetrust-accept-btn-handler', { timeout: 15000 }).click() //Acept cookies
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click()

    cy.get('[data-testid="login-username"]').type(user)
    cy.get('[data-testid="login-password"]').type('as!')

    cy.get('.ButtonInner-sc-14ud5tc-0 > .Type__TypeElement-sc-goli3j-0').click()
    
    cy.get('.Message-sc-15vkh7g-0').should('have.text','Incorrect username or password.')
  })

  it('should show an error for empty fields', () => {
    cy.visit('/')
    cy.get('#onetrust-accept-btn-handler', { timeout: 15000 }).click() //Acept cookies
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click()

    cy.get('.ButtonInner-sc-14ud5tc-0 > .Type__TypeElement-sc-goli3j-0').click()
    
    cy.get('.Message-sc-15vkh7g-0').should('have.text','Incorrect username or password.')
  })

  it('should show a message for successful password reset', () => {
    cy.visit('/')
    cy.get('#onetrust-accept-btn-handler', { timeout: 15000 }).click() //Acept cookies
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click()

    cy.get('[data-testid="reset-password-link"]').click()

    cy.get('#email_or_username').type('bla')

    cy.get('.ButtonInner-sc-14ud5tc-0').click()
    
    cy.get('.iUssHT').should('have.text','Password Reset')
    
  })
})
