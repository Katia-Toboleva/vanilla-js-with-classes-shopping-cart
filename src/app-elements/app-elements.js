import ShoppingList from "../shopping-list/shopping-list.js";
import Cart from "../cart/cart.js";
import Control from '../control/control.js';
import Logo from '../logo/logo.js';
import Banner from '../banner/banner.js';

class AppElements {
  constructor(props) {
    this.props = props;
  }

  createAppElements() {
    const {
      selectedProducts,
      count,
      total,
      viewShop,
      products,
      pageLogo,
      onAddButtonClick,
      onRemoveButtonClick,
      onSwitchButtonClick,
     } = this.props;

    const element = document.createElement("div");
    element.classList.add("container");

    const logo = new Logo({ pageLogo })

    const shoppingList = new ShoppingList({
      products,
      onAddButtonClick,
    });

    const cart = new Cart({
      selectedProducts,
      onRemoveButtonClick,
    });

    const banner = new Banner()

    const control = new Control({
      count, total, viewShop, onSwitchButtonClick,
    })

    element.appendChild(logo.render());
    viewShop ? element.appendChild(shoppingList.render()) : element.appendChild(cart.render());
    element.appendChild(control.render());

    return element;
  }

  render() {
    console.log(this.props);
    const appElements = this.createAppElements();
    return appElements;
  }
}

export default AppElements;
