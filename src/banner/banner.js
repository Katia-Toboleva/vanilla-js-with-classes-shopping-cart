class Banner {
  constructor(props) {
    this.props = props;
  }

  createBanner() {
    const banner = document.createElement("div");
    banner.classList.add("banner");
    banner.innerText = "No items in the cart. Keep shopping!"
    return banner;
  }

  render() {
    const banner = this.createBanner();
    return banner;
  }
}

export default Banner;
