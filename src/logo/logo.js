class Logo {
  constructor(props) {
    this.props = props;
  }

  createLogo() {
    const logo = document.createElement("img");
    const {pageLogo} = this.props;
    logo.classList.add("logo");
    logo.setAttribute("src", pageLogo)
    return logo;
  }

  render() {
    const logo = this.createLogo();
    return logo;
  }
}

export default Logo;
