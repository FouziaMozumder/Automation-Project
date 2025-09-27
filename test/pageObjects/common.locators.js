export class CommonLocators {
  constructor(page) {
    this.page = page;
  }

  menuButton() {
    return this.page.locator('//*[@id="react-burger-menu-btn"]');
  }
  logoutLink() {
    return this.page.locator('//*[@id="logout_sidebar_link"]');
  }
  resetAppStateLink() {
    return this.page.locator('//*[@id="reset_sidebar_link"]');
  }
}