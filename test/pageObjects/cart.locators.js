export class CartLocators {
  constructor(page) {
    this.page = page;
  }

  cartItems() {
    return this.page.locator('//div[@class="inventory_item_name"]');
  }

  cartItemsPrice() {
    return this.page.locator('//div[@class="inventory_item_price"]');
  }

  checkoutButton() {
    return this.page.locator('//*[@id="checkout"]');
  }
}
