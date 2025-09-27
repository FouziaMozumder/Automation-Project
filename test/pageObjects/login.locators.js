export class LoginLocators {
  constructor(page) {
    this.page = page;
  }

  usernameField() {
    return this.page.locator('//*[@id="user-name"]');
  }

  passwordField() {
    return this.page.locator('//*[@id="password"]');
  }

  loginButton() {
    return this.page.locator('//*[@id="login-button"]');
  }

  errorMessage() {
    return this.page.locator('//h3[@data-test="error"]');
  }
}
