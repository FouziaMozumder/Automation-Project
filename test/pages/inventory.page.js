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
    const limit = Math.min(n, total);

    for (let i = 0; i < limit; i++) {
        const item = items.nth(i);
        const name = (await item.locator('//div[contains(@class,"inventory_item_name")]').textContent()).trim();
        addedItems.push(name);

        await item.locator('//button[contains(text(),"Add to cart")]').click();
        console.log(`Added to cart: ${name}`);
    }

    return addedItems;
}


async getAllProductNames() {
    const items = this.locators.inventoryItems();
    const names = [];
    const total = await items.count();

    for (let i = 0; i < total; i++) {
      const item = items.nth(i);
      const name = (await item.locator('//div[contains(@class,"inventory_item_name")]').textContent()).trim();
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