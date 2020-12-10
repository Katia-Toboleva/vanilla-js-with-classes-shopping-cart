import Button from '../button/button.js';

class Control {
  constructor(props) {
    this.props = props;
  }

  handleSwitchButtonClick() {
    this.props.onSwitchButtonClick();
  }

  createControl() {
    const { count, total, viewShop } = this.props;

    const control = document.createElement("div");
    control.classList.add("control");

    const controlTitle = document.createElement("div");
    controlTitle.classList.add("control__title");
    controlTitle.innerText = `Your cart:`;

    const controlCount = document.createElement("div");
    controlCount.classList.add("control__count");
    controlCount.innerText = `Items: ${count}`;

    const controlTotal = document.createElement("div");
    const totalPrice = (total).toFixed(2);
    const totalPriceView = totalPrice < 0 ? (totalPrice * -1 ): totalPrice;
    controlTotal.classList.add("control__total");
    controlTotal.innerText = `Total: £${totalPriceView}`;

    const button = new Button();
    const switchButton = button.render();
    switchButton.classList.add("btn--switch");
    switchButton.innerText = viewShop ? "view/modify cart" : "go back to shop";

    switchButton.addEventListener("click", () => {
      this.handleSwitchButtonClick();
    });

    control.appendChild(controlTitle);
    control.appendChild(controlCount);
    control.appendChild(controlTotal);
    control.appendChild(switchButton);

    return control;
  }

  render() {
    const control = this.createControl();
    return control;
  }
}

export default Control;
