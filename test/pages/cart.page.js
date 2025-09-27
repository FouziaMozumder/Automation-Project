import { CartLocators } from '../pageObjects/cart.locators.js';

export default class CartPage {
  constructor(page) {
    this.page = page;
    this.locators = new CartLocators(page);
  }

  async getCartItems() {
    return await this.locators.cartItems().allTextContents();
  }

  async getCartItemPrices() {
    return this.page.locator('.cart_item .inventory_item_price').allTextContents();
}

  async checkout() {
    await this.locators.checkoutButton().click();
  }
}
