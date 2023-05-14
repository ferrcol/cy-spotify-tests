import { LoginPage } from "./page-objects/LoginPage";
import { LandingPage } from "./page-objects/LandingPage";

const user = Cypress.env("user");
const pass = Cypress.env("pass");

describe("playlist", () => {
  const loginPage = new LoginPage();
  const landingPage = new LandingPage();
  const newListName = "My Favorite Songs" + Date.now();

  before(() => {
    landingPage.navigate();
    landingPage.acceptCookies();
    landingPage.goToLoginPage();
    loginPage.dologin(user, pass);
    landingPage.shouldHaveUser("ferrcol");
  });

  it("should create list successfully", () => {
    landingPage.createList(newListName);
    landingPage.shouldHaveNewList(newListName);
  });

  it("should delete list successfully", () => {
    landingPage.deleteList();
    landingPage.shouldNotHaveNewList(newListName);
  });
});
