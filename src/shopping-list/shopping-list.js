import ShoppingListItem from '../shopping-list-item/shopping-list-item.js';

class ShoppingList {
  constructor(props) {
    this.props = props;
  }

  // Events
  // ======================================
  handleAddItemButtonClick(product) {
    this.props.onButtonClick(product);
  }

  // Elements
  // ======================================

  createShoppingList() {
    const element = document.createElement("div");
    element.classList.add("shopping-list");

    this.props.products.forEach((product) => {
      const shoppingListItem = this.createShoppingListItem(product);

      element.appendChild(shoppingListItem);
    });

    return element;
  }

  createShoppingListItem(product) {
    const shoppingListItem = new ShoppingListItem({
      product,
      onButtonClick: (product) => {
        this.handleAddItemButtonClick(product)
     }
    });
    return shoppingListItem.render();
  }

  render() {
    const parent = this.createShoppingList();
    return parent;
  }
}

export default ShoppingList;
