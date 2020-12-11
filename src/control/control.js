import Button from '../button/button.js';

class Control {
  constructor(props) {
    this.props = props;
  }

  handleSwitchButtonClick() {
    this.props.onSwitchButtonClick();
  }

  createControlTitle() {
    const controlTitle = document.createElement("div");
    controlTitle.classList.add("control__title");
    controlTitle.innerText = `Your cart:`;
    return controlTitle;
  }

  createControlCount() {
    const { count } = this.props;
    const controlCount = document.createElement("div");
    controlCount.classList.add("control__count");
    controlCount.innerText = `Items: ${count}`;
    return controlCount;
  }

  createControlTotal() {
    const { total } = this.props;
    const controlTotal = document.createElement("div");
    const totalPrice = Number((total).toFixed(2));
    controlTotal.classList.add("control__total");
    controlTotal.innerText = `Total: £${totalPrice}`;

    return controlTotal;
  }

  createSwitchButton() {
    const { viewShop } = this.props;
    const button = new Button();
    const switchButton = button.render();
    switchButton.classList.add("btn--switch");
    switchButton.innerText = viewShop ? "view/modify cart" : "go back to shop";

    switchButton.addEventListener("click", () => {
      this.handleSwitchButtonClick();
    });

    return switchButton;
  }

  createCheckoutButton() {
    const button = new Button();
    const checkoutButton = button.render();
    checkoutButton.classList.add("btn--checkout");
    checkoutButton.innerText = "Go to Checkout";

    checkoutButton.addEventListener("click", () => {
      // this.handleCheckoutButtonClick();
    });

    return checkoutButton;
  }

  appendElements(control, controlTitle, controlCount, controlTotal, switchButton) {
    control.appendChild(controlTitle);
    control.appendChild(controlCount);
    control.appendChild(controlTotal);
    control.appendChild(switchButton);
  }

  createControl() {
    const { viewShop } = this.props;
    const control = document.createElement("div");
    control.classList.add("control");

    const controlTitle = this.createControlTitle();
    const controlCount = this.createControlCount();
    const controlTotal = this.createControlTotal();
    const switchButton = this.createSwitchButton();

    if(!viewShop) {
      const proceedButton = this.createCheckoutButton();
      control.appendChild(proceedButton);
    }

    this.appendElements(
      control,
      controlTitle,
      controlCount,
      controlTotal,
      switchButton,
    );

    return control;
  }

  render() {
    const control = this.createControl();
    return control;
  }
}

export default Control;
