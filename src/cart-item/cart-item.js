import Button from "../button/button.js";
import Image from '../image/image.js';
import Price from '../price/price.js';
import Grid from "../grid/grid.js";
import GridItem from "../grid/gridItem.js";

class CartItem {
  constructor(props) {
    this.props = props;
  }

  //===========Events===============

  handleRemoveButtonClick(product) {
    this.props.onRemoveButtonClick(product);
  }

  //==========DOM elements==========
  //----------Grid elements---------

  createGrid() {
    const grid = new Grid();
    return grid.render();
  }

  createGridItem() {
    const gridItem = new GridItem();
    return gridItem.render();
  }

  //------------Components----------

  createCartTitle() {
    const element = document.createElement("div");
    element.classList.add("cart__item__title");
    element.innerText = 'Cart item:';

    return element;
  }
  createCartItemImage(src) {
    const element = document.createElement("div");
    element.classList.add("shopping-list__item__image");
    const image = new Image({src});
    element.appendChild(image.render())
    return element;
  }

  createCartItemName(name) {
    const element = document.createElement("div");
    element.classList.add("cart__item__name");
    element.innerText = name;

    return element;
  }

  createCartItemDescription(description) {
    const element = document.createElement("div");
    element.classList.add("cart__item__description");
    element.innerText = description;

    return element;
  }

  createCartItemPrice(itemPrice) {
    const element = document.createElement("div");
    element.classList.add("cart__item__price");
    const price = new Price(itemPrice);
    element.appendChild(price.render())
    return element;
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

  appendElements(
    gridItemOne,
    gridItemTwo,
    gridItemThree,
    grid,
    cartImage,
    cartTitle,
    cartName,
    cartDescription,
    cartPrice,
    removeButton,
    element,
    ) {
      gridItemOne.appendChild(cartImage);

      gridItemTwo.appendChild(cartTitle);
      gridItemTwo.appendChild(cartName);
      gridItemTwo.appendChild(cartDescription);

      gridItemThree.appendChild(cartPrice);
      gridItemThree.appendChild(removeButton);

      grid.appendChild(gridItemOne);
      grid.appendChild(gridItemTwo);
      grid.appendChild(gridItemThree);

      element.appendChild(grid);
    }

    createCartComponents(image, name, description, price, product, element) {
      const cartImage = this.createCartItemImage(image);
      const cartTitle = this.createCartTitle()
      const cartName = this.createCartItemName(name);
      const cartDescription = this.createCartItemDescription(description);
      const cartPrice = this.createCartItemPrice(price);
      const removeButton = this.createRemoveButton(product);
      const grid = this.createGrid();
      const gridItemOne = this.createGridItem();
      const gridItemTwo = this.createGridItem();
      const gridItemThree = this.createGridItem();

      this.appendElements(
        gridItemOne,
        gridItemTwo,
        gridItemThree,
        grid,
        cartImage,
        cartTitle,
        cartName,
        cartDescription,
        cartPrice,
        removeButton,
        element,
        )
    }
  //-----------Main component--------

  createCartItem(product) {
    const { image, name, description, price } = product;
    const element = document.createElement("div");
    element.classList.add("cart__item");

    this.createCartComponents(image, name, description, price, product, element)
    return element;
  }

  render() {
    const { product } = this.props;
    const cartItem = this.createCartItem(product);
    return cartItem;
  }
}

export default CartItem;
