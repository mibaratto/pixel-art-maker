// Creating grid using user data
function makeGrid(row, cel) {
  //Reset table
  const table = document.getElementById("pixelCanvas");
  table.innerHTML = "";

  //Creating new table
  for (i = 0; i < row; i++) {
    const newRow = document.createElement("tr");
    table.appendChild(newRow);
    for (j = 0; j < cel; j++) {
      const newCell = document.createElement("td");
      const tableRow = document.getElementsByTagName("tr")[i];
      tableRow.appendChild(newCell);

      //Setting user color's choice to the table cell
      newCell.addEventListener("click", function (event) {
        const colorPiker = document.getElementById("colorPicker");
        const targetCell = event.target;
        targetCell.style.cssText = `background-color:${colorPiker.value}`;
      });
    }
  }
}

// Collecting grid size values given by the user and call makeGrid function
document
  .getElementById("sizePicker")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let row = document.getElementById("inputHeight").value;
    let cel = document.getElementById("inputWidth").value;
    makeGrid(row, cel);
  });
