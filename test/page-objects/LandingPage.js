const domEl = {
  usernameLabel: () => cy.get('[data-testid="user-widget-avatar"],[title="]'),
  acceptCookiesButton: () => cy.get("#onetrust-accept-btn-handler"),
  loginButton: () => cy.get('button[data-testid="login-button"]'),
  createPlayListFolderButton: () => cy.get('button[aria-label="Create playlist or folder"]'),
  editDetailsButton: () => cy.get('button[aria-label$="– Edit details"]'),
  saveButton: () => cy.get('button[data-testid="playlist-edit-details-save-button"]'),
  contextMenuButton: () => cy.get("#context-menu button"),
  deleteButton: () => cy.get('button[aria-label^="Delete "]'),
  nameInput: () => cy.get('input[data-testid="playlist-edit-details-name-input"]'),
  rootListLi: () => cy.get('[aria-label="Your Library"] li span'),
  resetPassButton: () => cy.get('[data-testid="reset-password-link"]'),
};

export class LandingPage {
  navigate() {
    cy.visit("/us/");
  }

  acceptCookies() {
    domEl.acceptCookiesButton().click();
  }

  goToLoginPage() {
    domEl.loginButton().click();
  }

  goToResetPassPage() {
    domEl.resetPassButton().click();
  }

  createList(listName) {
    domEl.createPlayListFolderButton().click();
    domEl.contextMenuButton().eq(0).click();
  }

  deleteList() {
    domEl.rootListLi().first().rightclick({force: true});
    domEl.contextMenuButton().eq(4).click();
    domEl.deleteButton().click();
  }

  shouldHaveUser() {
    domEl.usernameLabel().should('exist');

  }

  shouldHaveNewList(listName) {
    domEl.rootListLi().first().should("contains", /^My Playlist #\d{1,3}$/);

  }

  shouldNotHaveNewList(ListName) {
    domEl.rootListLi().should("not.include.text", ListName);
  }
}
