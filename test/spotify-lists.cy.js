import { LoginPage } from "../cypress/page-objects/LoginPage";
import { LandingPage } from "../cypress/page-objects/LandingPage";

const user = Cypress.env("user");
const pass = Cypress.env("pass");

describe("list", () => {
  const loginpage = new LoginPage();
  const landingpage = new LandingPage();
  const newListName = "My Favorite Songs" + Date.now();

  before(() => {
    landingpage.goToLoginPage();
    loginpage.dologin(user, pass);
    landingpage.shouldHaveUser("ferrcol");
  });

  it("should create list successfully", () => {
    landingpage.createList(newListName);
    landingpage.shouldHaveNewList(newListName);
  });

  it("should delete list successfully", () => {
    landingpage.deleteList();
    landingpage.shouldNotNewList(newListName);
  });
});
