import ShoppingList from "./shoppingList/shoppingList.js";
import Cart from "./cart/cart.js";
import Control from './control/control.js';
import Grid from "./grid/grid.js";
import GridItem from "./grid/gridItem.js";
import * as Products from './cart/products.mock';

const entry = document.querySelector("#app");

class App {
  constructor() {
    this.state = {
      selectedProducts: [],
      count: 0,
      total: 0,
      viewStop: true,
    };

    this.render();
  }

  handleButtonClick(product) {
    this.state.selectedProducts.push(product);
    this.state.count = this.state.count  + 1;
    this.state.total = this.state.total  + product.price;

    this.render();
  }

  handleRemoveButtonClick(product) {
    const index = this.state.selectedProducts.findIndex(
      (item) => item.id === product.id
    );
    this.state.selectedProducts.splice(index, 1);
    this.state.count = this.state.count  - 1;
    this.state.total = this.state.total  - product.price;

    this.render();
  }

  handleSwitchButtonClick() {
    this.state.viewShop = !this.state.viewShop;

    this.render();
  }

  createGrid() {
    const grid = new Grid();
    return grid.render();
  }

  createGridItem() {
    const gridItem = new GridItem();
    return gridItem.render();
  }

  render() {
    const { selectedProducts, count, total, viewShop } = this.state;
    entry.innerHTML = "";

    const element = document.createElement("div");
    element.classList.add("container");

    const shoppingList = new ShoppingList({
      products: Products.products,
      onButtonClick: (product) => this.handleButtonClick(product)
    });

    const cart = new Cart({
      products: selectedProducts,
      onRemoveButtonClick: (product) => this.handleRemoveButtonClick(product)
    });

    const control = new Control({
      count, total, viewShop,
      onSwitchButtonClick: () => this.handleSwitchButtonClick()
    })

    this.state.viewShop ? element.appendChild(shoppingList.render()) : element.appendChild(cart.render());
    element.appendChild(control.render());


    entry.appendChild(element);
  }
}

export default App;
