// Creating table
function makeGrid(row, cel) {
  for (i = 0; i < row; i++) {
    const newRow = document.createElement("tr");
    const newTable = document.querySelector("#pixelCanvas");
    newTable.appendChild(newRow);
    for (j = 0; j < cel; j++) {
      const newCell = document.createElement("td");
      const tableRow = document.getElementsByTagName("tr")[i];
      tableRow.appendChild(newCell);
    }
  }
}

const colorPiker = document.getElementById("colorPicker");
let cor = "000000";
colorPiker.addEventListener("change", function (event) {
  cor = colorPiker.value;
  console.log(`cor ${cor}`);
});

//adding event delegation to <table> element
const newTable = document.querySelector("table");
newTable.addEventListener("click", function (event) {
  const targetCell = event.target;
  targetCell.style.cssText = `background-color:${cor}`;
});

const submitButton = document.getElementById("sizePicker");
submitButton.addEventListener("submit", function (event) {
  event.preventDefault();
  let row = document.getElementById("inputHeight").value;
  let cel = document.getElementById("inputWidth").value;

  makeGrid(row, cel);
});
