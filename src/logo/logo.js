class Logo {
  constructor(props) {
    this.props = props;
  }

  createLogo(pageLogo) {
    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.setAttribute("src", pageLogo)
    return logo;
  }

  render() {
    const {pageLogo} = this.props;
    const logo = this.createLogo(pageLogo);
    return logo;
  }
}

export default Logo;
