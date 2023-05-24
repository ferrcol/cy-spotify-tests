const domEl = {
  userName: () => cy.get('figure[data-testid="user-widget-avatar"]'),
  loginButton: () => cy.get('button[data-testid="login-button"]'),
  createPlayListFolderButton: () => cy.get('button[aria-label="Create playlist or folder"]'),
  contextMenuButton: () => cy.get("#context-menu button"),
  deleteButton: () => cy.get('button[aria-label^="Delete "]'),
  rootListLi: () => cy.get('[aria-label="Your Library"] li span'),
};

export class LandingPage {
  navigate() {
    cy.visit("/");
  }

  goToLoginPage() {
    domEl.loginButton().click();
  }

  createList() {
    domEl.createPlayListFolderButton().click();
    domEl.contextMenuButton().eq(0).click();
  }

  deleteList() {
    domEl.rootListLi().first().rightclick({force: true});
    domEl.contextMenuButton().eq(4).click();
    domEl.deleteButton().click();
  }

  shouldHaveUser(user) {
    domEl.userName().should('have.attr','title',user);
  }

  shouldHaveNewList(listName) {
    domEl.rootListLi().first().contains(listName).should('be.visible');
  }

  shouldNotHaveNewList(listName) {
    domEl.rootListLi().first().contains(listName).should('not.exist');
  }
}
