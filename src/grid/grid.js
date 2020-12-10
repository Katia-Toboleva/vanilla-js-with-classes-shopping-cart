class Grid {
  createGrid() {
    const element = document.createElement("div");
    element.classList.add("grid");

    return element;
  }

  render() {
    const grid = this.createGrid();
    return grid;
  }
}

export default Grid;
