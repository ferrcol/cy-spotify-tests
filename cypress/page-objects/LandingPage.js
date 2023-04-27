const domEl = {
  usernameLabel: () => cy.get('[data-testid="user-widget-name"]'),
  acceptCookiesButton: () => cy.get("#onetrust-accept-btn-handler"),
  loginButton: () => cy.get('button[data-testid="login-button"]'),
  createPlayListButton: () => cy.get('button[data-testid="create-playlist-button"]'),
  editDetailsButton: () => cy.get('button[aria-label$="– Edit details"]'),
  saveButton: () => cy.get('button[data-testid="playlist-edit-details-save-button"]'),
  contextMenuButton: () => cy.get("#context-menu button"),
  deleteButton: () => cy.get('button[aria-label^="Delete "]'),
  nameInput: () => cy.get('input[data-testid="playlist-edit-details-name-input"]'),
  rootListLi: () => cy.get('[data-testid="rootlist"] li span'),
};

export class LandingPage {
  navigate() {
    cy.visit("/us/");
  }

  goToLoginPage() {
    cy.visit("/");
    domEl.acceptCookiesButton().click();
    domEl.loginButton().click();
  }

  createList(listName) {
    domEl.createPlayListButton().click();
    domEl.editDetailsButton().click();
    domEl.nameInput().type(listName);
    domEl.saveButton().click();
  }

  deleteList() {
    domEl.rootListLi().first().rightclick({force: true});
    domEl.contextMenuButton().eq(4).click();
    domEl.deleteButton().click();
  }

  shouldHaveUser(username) {
    domEl.usernameLabel().should("have.text", username);
  }

  shouldHaveNewList(listName) {
    domEl.rootListLi().first().should("have.text", listName);
  }

  shouldNotHaveNewList(ListName) {
    domEl.rootListLi().should("not.include.text", ListName);
  }
}
