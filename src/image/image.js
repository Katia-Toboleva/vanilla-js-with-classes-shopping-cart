class Image {
  constructor(props) {
    this.props = props;
  }

  createImage() {
    const image = document.createElement("img");
    const {src} = this.props;
    image.classList.add("image");
    image.setAttribute("src", src)
    return image;
  }

  render() {
    const image = this.createImage();
    return image;
  }
}

export default Image;
