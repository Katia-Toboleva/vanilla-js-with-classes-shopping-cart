class Image {
  constructor(props) {
    this.props = props;
  }

  createImage(src) {
    const image = document.createElement("img");
    image.classList.add("image");
    image.setAttribute("src", src)
    return image;
  }

  render() {
    const {src} = this.props;
    const image = this.createImage(src);
    return image;
  }
}

export default Image;
