class Button {
  createButton() {
    const button = document.createElement("button");
    button.classList.add("btn");
    return button;
  }

  render() {
    const button = this.createButton();
    return button;
  }
}

export default Button;
