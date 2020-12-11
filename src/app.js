import AppElements from './app-elements/app-elements.js';
import * as Products from './cart/products.mock';

const entry = document.querySelector("#app");
const pageLogo = 'https://image.freepik.com/free-vector/online-shopping-logo-design-template_130382-9.jpg';


class App {
  constructor() {
    this.state = {
      selectedProducts: [],
      count: 0,
      total: 0,
      viewShop: true,
    };

    this.render();
  }

  //=============Events=================

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

  //===============DOM elements===========
  //---------------Components-----------

  createAppElements() {
    const {
      selectedProducts,
      count,
      total,
      viewShop,
    } = this.state;

    const appElements = new AppElements({
      selectedProducts,
      count,
      total,
      viewShop,
      products: Products.products,
      pageLogo,
      onAddButtonClick: (product) => this.handleButtonClick(product),
      onRemoveButtonClick: (product) => this.handleRemoveButtonClick(product),
      onSwitchButtonClick: () => this.handleSwitchButtonClick(),
    })

    return appElements.render();
  }

  render() {
    console.log(this.state);
    entry.innerHTML = "";
    const appElements = this.createAppElements();
    entry.appendChild(appElements);
  }
}

export default App;
