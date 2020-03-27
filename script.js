var generateRandom = Math.floor(Math.random() * 15);
var cells = document.querySelectorAll(".cell");
cells[generateRandom].id = "#it";
var clickedCells = [];
var changeColor = function (event) {
    if (event.target.classList.contains("cell")) {
        event.target.style.backgroundColor = "green";
        clickedCells.push(event.target);
    }
    if (event.target.id === "#it") {
        for (var _i = 0, clickedCells_1 = clickedCells; _i < clickedCells_1.length; _i++) {
            var cells_1 = clickedCells_1[_i];
            cells_1.style.backgroundColor = "yellow";
        }
        event.target.style.backgroundColor = "red";
        event.target.parentElement.innerHTML = event.target.parentElement.innerHTML;
    }
};
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function (event) { return changeColor(event); });
}
