import Button from "../button/button.js";
import Image from '../image/image.js';
import Price from '../price/price.js';
import Grid from "../grid/grid.js";
import GridItem from "../grid/gridItem.js";


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

  createGrid() {
    const grid = new Grid();
    return grid.render();
  }

  createGridItem(value) {
    const gridItem = new GridItem(value);
    return gridItem.render();
  }

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
    const element = document.createElement("div");
    element.classList.add("shopping-list__item");

    const grid = this.createGrid();
    const gridItemOne = this.createGridItem('shrink');
    const gridItemTwo = this.createGridItem('grow');
    const gridItemThree = this.createGridItem('shrink');

    const image = this.createShoppingListImage(product.image);
    const name = this.createShoppingListItemName(product);
    const description = this.createShoppingListItemDescription(product);
    const price = this.createShoppingListPrice(product.price);
    const button = this.createAddItemButton(product);

    gridItemOne.appendChild(image);

    gridItemTwo.appendChild(name);
    gridItemTwo.appendChild(description);

    gridItemThree.appendChild(price);
    gridItemThree.appendChild(button);


    grid.appendChild(gridItemOne);
    grid.appendChild(gridItemTwo);
    grid.appendChild(gridItemThree);

    element.appendChild(grid);

    return element;
  }

  createShoppingListItemDetails() {
    const element = document.createElement("div");
    element.classList.add("shopping-list__item__details");

    return element;
  }

  createShoppingListImage(src) {
    const element = document.createElement("div");
    element.classList.add("shopping-list__item__image");
    const image = new Image({src});
    element.appendChild(image.render())
    return element;
  }

  createShoppingListItemName(product) {
    const element = document.createElement("div");
    element.classList.add("shopping-list__item__name");
    element.innerText = product.name;

    return element;
  }

  createShoppingListItemDescription(product) {
    const element = document.createElement("div");
    element.classList.add("shopping-list__item__description");
    element.innerText = product.description;

    return element;
  }

  createShoppingListPrice(itemPrice) {
    const element = document.createElement("div");
    element.classList.add("shopping-list__item__price");
    const price = new Price(itemPrice);
    element.appendChild(price.render())
    return element;
  }

  createAddItemButton(product) {
    const button = new Button(product);
    const newButton = button.render();
    newButton.classList.add("btn--add");
    newButton.innerText = "Add to Cart";

    newButton.addEventListener("click", () => {
      this.handleAddItemButtonClick(product);
    });

    return newButton;
  }

  render() {
    const parent = this.createShoppingList();
    return parent;
  }
}

export default ShoppingList;
