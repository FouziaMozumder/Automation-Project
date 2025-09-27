export class CartLocators {
  constructor(page) {
    this.page = page;
  }

  cartItems() {
    return this.page.locator('//div[@class="inventory_item_name"]');
  }

  checkoutButton() {
    return this.page.locator('//*[@id="checkout"]');
  }
}
