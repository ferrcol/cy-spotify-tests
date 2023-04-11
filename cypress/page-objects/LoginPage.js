export class LoginPage {
  navigate() {
    cy.visit("/en/login");
  }

  dologin(user, pass) {
    if (user) {
      cy.get("input#login-username").clear().type(user);
    }
    if (pass) {
      cy.get("input#login-password").clear().type(pass);
    }
    cy.get("button#login-button").click();
  }

  shouldHaveErrorMsg(errorMsg) {
    cy.get('[data-encore-id="banner"]').should("include.text", errorMsg);
  }

  doResetPass(email) {
    cy.get('[data-encore-id="banner"]').should("have.text", errorMsg);
  }
}
