const domEl = {
  usernameInput: () => cy.get("input#login-username"),
  passwordInput: () => cy.get("input#login-password"),
  loginButton: () => cy.get("button#login-button"),
  bannerDiv: () => cy.get('[data-encore-id="banner"]'),
};

export class LoginPage {
  navigate() {
    cy.visit("/en/login");
  }

  dologin(user, pass) {
    if (user) {
      domEl.usernameInput().clear().type(user);
    }
    if (pass) {
      domEl.passwordInput().clear().type(pass);
    }
    domEl.loginButton().click();
  }

  shouldHaveErrorMsg(errorMsg) {
    domEl.bannerDiv().should("include.text", errorMsg);
  }
}
