import Button from "../button/button.js";
import Grid from "../grid/grid.js";
import GridItem from "../grid/gridItem.js";
import Image from '../image/image.js';
import Price from '../price/price.js';

class Cart {
  constructor(props) {
    this.props = props;
  }

  createCart() {
    const cart = document.createElement("div");
    cart.classList.add("cart");

    this.props.products.forEach((product) => {
      const cartItem = this.createCartItem(product);
      cart.appendChild(cartItem);
    });

    return cart;
  }

  createGrid() {
    const grid = new Grid();
    return grid.render();
  }

  createGridItem() {
    const gridItem = new GridItem();
    return gridItem.render();
  }

  createCartItem(product) {
    const element = document.createElement("div");
    element.classList.add("cart__item");

    const title = this.createCartTitle()
    const image = this.createShoppingListImage(product.image);
    const button = this.createRemoveButton(product);
    const name = this.createCartItemName(product);
    const description = this.createCartItemDescription(product);

    const grid = this.createGrid();
    const gridItemOne = this.createGridItem();
    const gridItemTwo = this.createGridItem();
    const gridItemThree = this.createGridItem();

    gridItemOne.appendChild(image);

    gridItemTwo.appendChild(title);
    gridItemTwo.appendChild(name);
    gridItemTwo.appendChild(description);

    gridItemThree.appendChild(button);

    grid.appendChild(gridItemOne);
    grid.appendChild(gridItemTwo);
    grid.appendChild(gridItemThree);

    element.appendChild(grid);

    return element;
  }

  createCartTitle() {
    const element = document.createElement("div");
    element.classList.add("cart__item__title");
    element.innerText = 'Cart item:';

    return element;
  }
  createShoppingListImage(src) {
    const element = document.createElement("div");
    element.classList.add("shopping-list__item__image");
    const image = new Image({src});
    element.appendChild(image.render())
    return element;
  }

  createCartItemName(product) {
    const element = document.createElement("div");
    element.classList.add("cart__item__name");
    element.innerText = product.name;

    return element;
  }

  createCartItemDescription(product) {
    const element = document.createElement("div");
    element.classList.add("cart__item__description");
    element.innerText = product.description;

    return element;
  }

  handleRemoveButtonClick(product) {
    this.props.onRemoveButtonClick(product);
  }

  createRemoveButton(product) {
    const button = new Button(product);
    const newButton = button.render();
    newButton.classList.add("btn--remove");
    newButton.innerText = "Remove from Cart";

    newButton.addEventListener("click", () => {
      this.handleRemoveButtonClick(product);
    });

    return newButton;
  }

  render() {
    const cart = this.createCart();
    return cart;
  }
}

export default Cart;
