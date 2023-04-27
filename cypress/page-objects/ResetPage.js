const domEl = {
  emailUsernameInput: () => cy.get("input#email_or_username"),
  sendButton: () => cy.get("button.Button-qlcn5g-0"),
  headDiv: () => cy.get('[class*="PageHeading"]'),
};

export class ResetPage {
  navigate() {
    cy.visit("/en/password-reset");
  }

  doResetPass(username) {
    domEl.emailUsernameInput().type(username);
    domEl.sendButton().click();
  }

  shouldHaveResetMsg(message) {
    domEl.headDiv().should("have.text", message);
  }
}