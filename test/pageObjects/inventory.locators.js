export class InventoryLocators {
  constructor(page) {
    this.page = page;
  }

  // Total product cards
  inventoryItems() {
    return this.page.locator('.inventory_item');
  }

  // Cart icon
  cartIcon() {
    return this.page.locator('.shopping_cart_link');
  }

  // Sort dropdown
  filterDropdown() {
    return this.page.locator('.product_sort_container');
  }

  // Add to cart buttons
  addToCartButtons() {
    return this.page.locator('button:has-text("Add to cart")');
  }

  // Product names
  itemNames() {
    return this.page.locator('.inventory_item_name');
  }

  // Product prices
  itemPrices() {
    return this.page.locator('.inventory_item_price');
  }

  // Menu button
  menuButton() {
    return this.page.locator('#react-burger-menu-btn');
  }

  // Logout link
  logoutLink() {
    return this.page.locator('#logout_sidebar_link'); 
  }
}


  /* inventoryItems() {
    return this.page.locator('//div[contains(@class,"inventory_item")]');
  }
 cartIcon() {
    return this.page.locator('//a[contains(@class,"shopping_cart_link")]');
  } 

  //sort option like A-Z, Z-A
  filterDropdown() {
    return this.page.locator('//select[contains(@class,"product_sort_container")]');
  }

  addToCartButtons() {
    return this.page.locator('//button[contains(text(),"Add to cart")]');
  }

  itemNames() {
    return this.page.locator('//div[contains(@class,"inventory_item_name")]');
  }

  itemPrices() {
    return this.page.locator('//div[@class="inventory_item_price"]');
  }

  menuButton() {
    return this.page.locator('//*[@id="react-burger-menu-btn"]');
  }

  logoutLink() {
    return this.page.locator('//*[@id="logout_sidebar_link"]');
  }
    */