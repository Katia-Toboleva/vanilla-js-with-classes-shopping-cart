class GridItem {
  constructor(props) {
    this.props = props;
  }

  createGridItem(value) {
    const element = document.createElement("div");
    element.classList.add("grid__item");

    if (value === 'shrink') {
      element.classList.add("grid__item--shrink");
    }

    if (value === 'grow') {
      element.classList.add("grid__item--grow");
    }

    return element;
  }
  render() {
    const gridItem = this.createGridItem(this.props);
    return gridItem;
  }
}

export default GridItem;
