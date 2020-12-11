import ShoppingListItem from '../shopping-list-item/shopping-list-item.js';

class ShoppingList {
  constructor(props) {
    this.props = props;
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
    const { onButtonClick } = this.props;
    const shoppingListItem = new ShoppingListItem({
      product,
      onButtonClick,
    });
    return shoppingListItem.render();
  }

  render() {
    const parent = this.createShoppingList();
    return parent;
  }
}

export default ShoppingList;
