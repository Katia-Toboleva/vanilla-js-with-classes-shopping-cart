import ShoppingList from "../shopping-list/shopping-list.js";
import Cart from "../cart/cart.js";
import Control from '../control/control.js';
import Logo from '../logo/logo.js';

class AppElements {
  constructor(props) {
    this.props = props;
  }

  createLogo() {
    const { pageLogo } = this.props;
    return new Logo({ pageLogo })
  }

  createShoppingList() {
    const { products, onAddButtonClick } = this.props;
    return new ShoppingList({
      products,
      onAddButtonClick,
    });
  }

  createCart() {
    const { selectedProducts, onRemoveButtonClick } = this.props;
    return new Cart({
      selectedProducts,
      onRemoveButtonClick,
    });
  }

  createControl() {
    const { count, total, viewShop, onSwitchButtonClick } = this.props;
    return new Control({
      count, total, viewShop, onSwitchButtonClick,
    })
  }

  appendElements(element, logo, shoppingList, cart, control) {
    const { selectedProducts, viewShop } = this.props;
    const emptyCart = !viewShop && selectedProducts.length === 0;
    element.appendChild(logo.render());

    (viewShop || emptyCart) ? element.appendChild(shoppingList.render()) : element.appendChild(cart.render());
    element.appendChild(control.render());
  }

  createAppElements() {
    const element = document.createElement("div");
    element.classList.add("container");

    const logo = this.createLogo();
    const shoppingList = this.createShoppingList();
    const cart = this.createCart();
    const control = this.createControl();
    this.appendElements(element, logo, shoppingList, cart, control)

    return element;
  }

  render() {
    console.log(this.props);
    const appElements = this.createAppElements();
    return appElements;
  }
}

export default AppElements;
