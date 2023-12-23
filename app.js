// Creating table
function makeGrid(row, cel) {
  for (i = 0; i < row; i++) {
    const newRow = document.createElement("tr");
    // newRow.textContent = `linha ${i}`;
    const newTable = document.querySelector("#pixelCanvas");
    newTable.appendChild(newRow);
    console.log(`linha ${i}`);
    for (j = 0; j < cel; j++) {
      const newCell = document.createElement("td");
      const tableRow = document.getElementsByTagName("tr")[i];
      tableRow.appendChild(newCell);
      console.log(`linha ${i}, cel ${j}`);
    }
  }
}

//adding event delegation to <table> element
const newTable = document.querySelector("table");
newTable.addEventListener("click", function (event) {
  const targetCell = event.target;
  targetCell.style.cssText = "background-color:blue";
  console.log("uma celula foi clicada");
});

const submitButton = document.getElementById("sizePicker");

submitButton.addEventListener("submit", function (event) {
  event.preventDefault();
  let row = document.getElementById("inputHeight").value;
  let cel = document.getElementById("inputWidth").value;

  makeGrid(row, cel);
});
