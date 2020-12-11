import Button from "../button/button.js";
import Image from '../image/image.js';
import Price from '../price/price.js';
import Grid from "../grid/grid.js";
import GridItem from "../grid/gridItem.js";

class ShoppingListItem {
  constructor(props) {
    this.props = props;
  }

  //==========Events==================

  handleAddItemButtonClick(product) {
    this.props.onAddButtonClick(product);
  }

  // ======== DOM elements========================

  //---------Grid elements------------------------

  createGrid() {
    const grid = new Grid();
    return grid.render();
  }

  createGridItem(value) {
    const gridItem = new GridItem(value);
    return gridItem.render();
  }

   //---------Components------------------------

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

  createShoppingListItemName(name) {
    const element = document.createElement("div");
    element.classList.add("shopping-list__item__name");
    element.innerText = name;

    return element;
  }

  createShoppingListItemDescription(description) {
    const element = document.createElement("div");
    element.classList.add("shopping-list__item__description");
    element.innerText = description;

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
    const button = new Button();
    const newButton = button.render();
    newButton.classList.add("btn--add");
    newButton.innerText = "Add to Cart";

    newButton.addEventListener("click", () => {
      this.handleAddItemButtonClick(product);
    });

    return newButton;
  }

  appendElements(
    gridItemOne,
    gridItemTwo,
    gridItemThree,
    grid,
    itemImage,
    itemName,
    itemDescription,
    itemPrice,
    addButton,
    element,
    ) {
      gridItemOne.appendChild(itemImage);

      gridItemTwo.appendChild(itemName);
      gridItemTwo.appendChild(itemDescription);

      gridItemThree.appendChild(itemPrice);
      gridItemThree.appendChild(addButton);

      grid.appendChild(gridItemOne);
      grid.appendChild(gridItemTwo);
      grid.appendChild(gridItemThree);

      element.appendChild(grid);
    }

    createShoppingListItemComponents(image, name, description, price, product, element) {
      const grid = this.createGrid();
      const gridItemOne = this.createGridItem('shrink');
      const gridItemTwo = this.createGridItem('grow');
      const gridItemThree = this.createGridItem('shrink');

      const itemImage = this.createShoppingListImage(image);
      const itemName = this.createShoppingListItemName(name);
      const itemDescription = this.createShoppingListItemDescription(description);
      const itemPrice = this.createShoppingListPrice(price);
      const addButton = this.createAddItemButton(product);

      this.appendElements(
        gridItemOne,
        gridItemTwo,
        gridItemThree,
        grid,
        itemImage,
        itemName,
        itemDescription,
        itemPrice,
        addButton,
        element,
        )
    }

   //---------Main component------------------------

  createShoppingListItem(product) {
    const { image, name, description, price } = product;
    const element = document.createElement("div");
    element.classList.add("shopping-list__item");
    this.createShoppingListItemComponents(image, name, description, price, product, element)
    return element;
  }

  render() {
    const { product } = this.props;
    const shoppingListItem = this.createShoppingListItem(product);
    return shoppingListItem;
  }
}

export default ShoppingListItem;
