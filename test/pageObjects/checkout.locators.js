export class CheckoutLocators {
  constructor(page) {
    this.page = page;
  }

  firstNameInput() {
    return this.page.locator('//*[@id="first-name"]');
  }

  lastNameInput() {
    return this.page.locator('//*[@id="last-name"]');
  }

  postalCodeInput() {
    return this.page.locator('//*[@id="postal-code"]');
  }

  continueButton() {
    return this.page.locator('//*[@id="continue"]');
  }

  finishButton() {
    return this.page.locator('//*[@id="finish"]');
  }

  overviewItems() {
    return this.page.locator('//div[@class="cart_item"]//div[@class="inventory_item_name"]');
  }

  overviewItemPrices() {
  return this.page.locator('//div[@class="cart_item"]//div[@class="inventory_item_price"]');
}


  itemTotalLabel() {
    return this.page.locator('//div[@class="summary_subtotal_label"]');
  }

  completeHeader() {
    return this.page.locator('//h2[@class="complete-header"]');
  }
}
