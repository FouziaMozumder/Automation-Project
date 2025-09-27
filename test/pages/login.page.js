import { LoginLocators } from '../pageObjects/login.locators.js';

export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.locators = new LoginLocators(page);
  }

  async open() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.locators.usernameField().fill(username);
    await this.locators.passwordField().fill(password);
    await this.locators.loginButton().click();
  }

  async getErrorMessage() {
    return await this.locators.errorMessage().textContent();
  }
}