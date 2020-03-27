const generateRandom: string = Math.floor(Math.random() * 15);
const cells: HTMLCollectionOf<Element> = document.querySelectorAll(".cell");
cells[generateRandom].id = "#it";
const clickedCells: Array<any> = [];
const changeColor = event => {
  if (event.target.classList.contains("cell")) {
    event.target.style.backgroundColor = "green";
    clickedCells.push(event.target);
  }
  if (event.target.id === "#it") {
    for (let cells of clickedCells) {
      cells.style.backgroundColor = "yellow";
    }
    event.target.style.backgroundColor = "red";
    event.target.parentElement.innerHTML = event.target.parentElement.innerHTML;
  }
};
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", event => changeColor(event));
}
