import { LoginPage } from "./page-objects/LoginPage";
import { ResetPage } from "./page-objects/ResetPage";
import { LandingPage } from "./page-objects/LandingPage";

const user = Cypress.env("user");
const pass = Cypress.env("pass");

describe("login",
  {
    testIsolation: true,
  },
  () => {
    const loginPage = new LoginPage();
    const resetPage = new ResetPage();
    const landingPage = new LandingPage();
    beforeEach(() => {
      landingPage.navigate();
      landingPage.acceptCookies();
      landingPage.goToLoginPage();
    });

    it("should login successfully", () => {
      loginPage.dologin(user, pass);
      landingPage.shouldHaveUser();
      //landingPage.shouldHaveUser("ferrcol");
    });

    it("should show an error for wrong user", () => {
      loginPage.dologin("aaa@gmail.com", pass);
      loginPage.shouldHaveErrorMsg("Error");
    });

    it("should show an error for wrong pass", () => {
      loginPage.dologin(user, "as!");
      loginPage.shouldHaveErrorMsg("Error");
    });

    it("should show an error for empty fields", () => {
      loginPage.dologin(user, "as!");
      loginPage.shouldHaveErrorMsg("Error");
    });

    it("should show a message for successful password reset", () => {
      landingPage.goToResetPassPage();
      resetPage.doResetPass("bla");
      resetPage.shouldHaveResetMsg("Password Reset");
    });
  }
);
