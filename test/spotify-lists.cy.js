import { LoginPage } from "./page-objects/LoginPage";
import { LandingPage } from "./page-objects/LandingPage";

const user = Cypress.env("user");
const pass = Cypress.env("pass");

describe("playlist", () => {
  const loginPage = new LoginPage();
  const landingPage = new LandingPage();
  const listRexExp = /^My Playlist #\d{1,3}$/;

  before(() => {
    landingPage.navigate();
    landingPage.goToLoginPage();
    loginPage.dologin(user, pass);
    landingPage.shouldHaveUser("ferrcol");
  });

  it("should create list successfully", () => {
    landingPage.createList();
    landingPage.shouldHaveNewList(listRexExp);
  });

  it("should delete list successfully", () => {
    landingPage.deleteList();
    landingPage.shouldNotHaveNewList(listRexExp);
  });
});
