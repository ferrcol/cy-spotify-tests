export class ResetPage {
    navigate() {
        cy.visit('/en/password-reset');
    }

    doResetPass(username) {
        cy.get('input#email_or_username').type(username);
        cy.get('button.Button-qlcn5g-0').click();
    }

    shouldHaveResetMsg(message) {
        cy.get('[class*="PageHeading"]').should('have.text',message);
    }

}