export class LandingPage {
    navigate() {
        cy.visit('/us/');
    }

    shouldHaveUser(username) {
        cy.get('[data-testid="user-widget-name"]').should('have.text',username);
    }

    goToLoginPage() {
        cy.visit('/');
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('button[data-testid="login-button"]').click();
    }

    createList(ListName) {
        cy.get('button[data-testid="create-playlist-button"]').click();
        cy.get('button[aria-label$="– Edit details"]').click();
        cy.get('input[data-testid="playlist-edit-details-name-input"]').type(ListName);
        cy.get('button[data-testid="playlist-edit-details-save-button"]').click();
    }

    shouldHaveNewList(ListName) {
        cy.get('[data-testid="rootlist"] li span').first().should('have.text',ListName);
    }

    deleteList() {
        cy.get('[data-testid="rootlist-item"]').first().rightclick();
        cy.get('#context-menu button').eq(4).click();
        cy.get('button[aria-label^="Delete "]').click();
    }

    shouldNotNewList(ListName) {
        cy.get('[data-testid="rootlist"] li span').should('not.include.text',ListName);
    }
}
