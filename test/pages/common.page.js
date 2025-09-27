import { CommonLocators } from '../pageObjects/common.locators.js';

export default class CommonPage {
  constructor(page) {
    this.page = page;
    this.locators = new CommonLocators(page);
  }

  async openMenu() {
    await this.locators.menuButton().click({ force: true });
    }

  async resetAppState() {
    await this.locators.resetAppStateLink().click();
    }
    async logout() {
    await this.openMenu();
    await this.locators.logoutLink().click();
    }
}