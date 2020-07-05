class FoodItem {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    describe() {
      return `${this.name} costs ${this.price}`;
    }
}

class ShoppingCart {
  constructor(name){
    this.name = name;
    this.foodItems = [];
  }
  describe() {
    return `${this.name} has ${this.foodItems.length} food items`;
  }
}

class Menu {
  constructor() {
    this.foodItems = [];
    this.selectedFoodItem = null;
  }
  start() {
    let selectedMenuOption = this.showMainMenuOptions();
    while (selectedMenuOption != 0) {
      switch (selectedMenuOption) {
        case '1':
          this.createItem();
          break;
        case '2':
          this.deleteItemByIndex();
          break;
        case '3':
          this.displayCart();
          break;
        case '4':
          this.totalOfItems();
          break;
        default:
            selectedMenuOption = 0;
      }
      selectedMenuOption = this.showMainMenuOptions();
    }
    alert(`Please come again!`);
  }
  showMainMenuOptions() {
    return prompt(`
      0) Exit
      1) Enter item
      2) Remove item
      3) View shopping cart
    `);
  }
  createItem() {
    let name = prompt(`Enter name for new item:`);
    let price = prompt(`Enter price for ${name}`);
    this.foodItems.push(new FoodItem(name, price));
  }
  displayCart() {
    let cartString = '';
    for (let i = 0; i < this.foodItems.length; i++) {
      cartString += i + ') ' + this.foodItems[i].name + ' ' + this.foodItems[i].price + '\n';
    }
    alert(cartString);
  }
  deleteItem(index) {
    if (index > -1 && index < this.foodItems.length) {
      this.foodItems.splice(index, 1);
    }
  }
  deleteItemByIndex() {
    let index = prompt(`Enter the index of the item you wish to delete:`);
    if (index > -1 && index < this.foodItems.length) {
      this.foodItems.splice(index, 1);
    }
  }
}

let menu = new Menu();
menu.start();