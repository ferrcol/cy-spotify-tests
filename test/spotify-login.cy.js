
import { LoginPage } from "../cypress/page-objects/LoginPage"
import { ResetPage } from "../cypress/page-objects/ResetPage"
import { LandingPage } from "../cypress/page-objects/LandingPage"

const user = Cypress.env('user') 
const pass = Cypress.env('pass')  

describe('login',  {
  testIsolation: true,
},() => {
  const loginpage = new LoginPage()
  const resetpage = new ResetPage()
  const landingpage = new LandingPage()

  it('should login successfully', () => {
    landingpage.goToLoginPage();
    loginpage.dologin(user,pass);
    landingpage.shouldHaveUser('ferrcol')
  })

  it('should show an error for wrong user', () => {
    landingpage.goToLoginPage();
    loginpage.dologin('aaa@gmail.com',pass);
    loginpage.shouldHaveErrorMsg('Error')
  })

  it('should show an error for wrong pass', () => {
    landingpage.goToLoginPage();
    loginpage.dologin(user,'as!');
    loginpage.shouldHaveErrorMsg('Error')
  })

  it('should show an error for empty fields', () => {
    landingpage.goToLoginPage();
    loginpage.dologin(user,'as!');
    loginpage.shouldHaveErrorMsg('Error')    
  })

  it('should show a message for successful password reset', () => {
    resetpage.navigate();
    resetpage.doResetPass('bla');
    resetpage.shouldHaveResetMsg('Password Reset')
  })
})
