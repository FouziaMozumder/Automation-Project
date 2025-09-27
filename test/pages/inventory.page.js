import { InventoryLocators } from '../pageObjects/inventory.locators.js';

export default class InventoryPage {
  constructor(page) {
    this.page = page;
    this.locators = new InventoryLocators(page);
  }

async addFirstNProducts(n) {
    const addedItems = [];

    const items = this.locators.inventoryItems();
    const total = await items.count();

    for (let i = 0; i < n; i++) {
      const item = items.nth(i);
      const name = (await item.locator('.inventory_item_name').textContent()).trim();
      addedItems.push(name);
      //check the item name, console.log("Found inventory items:",name);
      await item.locator('button').click();
    }

    
    return addedItems;
  }

async getAllProductNames() {
    const items = this.locators.inventoryItems();
    const names = [];
    const total = await items.count();

    for (let i = 0; i < total; i++) {
      const item = items.nth(i);
      const name = (await item.locator('.inventory_item_name').textContent()).trim();
      names.push(name);
    }

    return names;
  }
  async gotoCart() {
    await this.locators.cartIcon().click();
  }
  async filterByZA() {
    await this.locators.filterDropdown().selectOption({ label: 'Name (Z to A)' });
  }

  async openMenu() {
    await this.locators.menuButton().click();
  }
  async resetAppState() {
    await this.locators.menuButton().click();
    await this.locators.logoutLink().click();
  }

  async addFirstProduct() {
    const name = await this.locators.itemNames().first().textContent();
    const price = await this.locators.itemPrices().first().textContent();
    await this.locators.addToCartButtons().first().click();
    return { name: name.trim(), price };
  }
}
