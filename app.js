let row = 5;
let cel = 5;

// Creating table
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

//adding event delegation to <table> element
const newTable = document.querySelector("table");
newTable.addEventListener("click", function (event) {
  const targetCell = event.target;
  targetCell.style.cssText = "background-color:blue";
  console.log("uma celula foi clicada");
});
