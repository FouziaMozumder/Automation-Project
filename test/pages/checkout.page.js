import { CheckoutLocators } from '../pageObjects/checkout.locators.js';

export default class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.locators = new CheckoutLocators(page);
  }

  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.locators.firstNameInput().fill(firstName);
    await this.locators.lastNameInput().fill(lastName);
    await this.locators.postalCodeInput().fill(postalCode);
  }

  async clickContinue() {
    await this.locators.continueButton().click();
  }

  async clickFinish() {
    await this.locators.finishButton().click();
  }

  async getOverviewItems() {
    return await this.locators.overviewItems().allTextContents();
  }

  async getOverviewItemPrices() {
    return await this.locators.overviewItemPrices().allTextContents();
}

  async getItemTotal() {
    return await this.locators.itemTotalLabel().textContent();
  }

  async getCompleteHeader() {
    return await this.locators.completeHeader().textContent();
  }
}
