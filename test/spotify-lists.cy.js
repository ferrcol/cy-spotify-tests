const user = Cypress.env('user') 
const pass = Cypress.env('pass')  

describe('list', {
  testIsolation: true,
},() => {

  beforeEach(() => {
    cy.visit('/')
    cy.get('#onetrust-accept-btn-handler', { timeout: 15000 }).click() //Acept cookies
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click()
    cy.get('[data-testid="login-username"]').type(user)
    cy.get('[data-testid="login-password"]').type(pass)
    cy.get('.ButtonInner-sc-14ud5tc-0 > .Type__TypeElement-sc-goli3j-0').click()
    cy.get('[data-testid="user-icon"]', { timeout: 6000 }).should('exist')
  })

  it('should create list successfully', () => {
    cy.get('[data-testid="create-playlist-button"] > .Type__TypeElement-sc-goli3j-0').click()
    cy.get('.o4KVKZmeHsoRZ2Ltl078 > .Type__TypeElement-sc-goli3j-0').click()
    cy.get('[data-testid="playlist-edit-details-name-input"]').type('list')
    cy.get('[data-testid="playlist-edit-details-save-button"] > .ButtonInner-sc-14ud5tc-0').click()
    cy.get('.UCEIwrWMxnBFH4uoPybJ > .os-host > .os-padding > .os-viewport > .os-content', { timeout: 4000 }).should('include.text','list')

  })

  it('should delete list successfully', () => {
    cy.get(':nth-child(1) > [data-testid="rootlist-item"] > .AINMAUImkAYJd4ertQxy').rightclick()
    cy.get(':nth-child(5) > .wC9sIed7pfp47wZbmU6m > .Type__TypeElement-sc-goli3j-0').click()
    cy.get('.X05XDhpQJ7THPHfgbUk1 > .Button-sc-qlcn5g-0 > .ButtonInner-sc-14ud5tc-0').click()
    cy.get(':nth-child(1) > [data-testid="rootlist-item"] > .AINMAUImkAYJd4ertQxy', { timeout: 4000 }).should('not.have.text','list.')
  })  
})