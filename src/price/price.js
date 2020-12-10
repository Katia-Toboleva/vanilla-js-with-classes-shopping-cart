class Price {
  constructor(props) {
    this.props = props;
  }

  createPrice() {
    const price = document.createElement("div");
    price.classList.add("price");
    price.innerText = `£${this.props}`;
    return price;
  }

  render() {
    const price = this.createPrice();
    return price;
  }
}

export default Price;
