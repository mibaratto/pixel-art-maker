// Creating grid using user interaction

function makeGrid(row, cel) {
  const table = document.getElementById("pixelCanvas");
  table.innerHTML = "";

  for (i = 0; i < row; i++) {
    const newRow = document.createElement("tr");
    table.appendChild(newRow);
    for (j = 0; j < cel; j++) {
      const newCell = document.createElement("td");
      const tableRow = document.getElementsByTagName("tr")[i];
      tableRow.appendChild(newCell);

      newCell.addEventListener("click", function (event) {
        const colorPiker = document.getElementById("colorPicker");
        const targetCell = event.target;
        targetCell.style.cssText = `background-color:${colorPiker.value}`;
      });
    }
  }
}

//selecting color picker value change
// const colorPiker = document.getElementById("colorPicker");
// let cor = colorPiker.value;
// colorPiker.addEventListener("change", function (event) {
//   cor = colorPiker.value;
// });

//changing cell pixel grid colors
// document.querySelector("table").addEventListener("click", function (event) {
//   const colorPiker = document.getElementById("colorPicker");
//   const targetCell = event.target;
//   targetCell.style.cssText = `background-color:${colorPiker.value}`;
// });

// selecting pixel grid size values and call makeGrid function
document
  .getElementById("sizePicker")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let row = document.getElementById("inputHeight").value;
    let cel = document.getElementById("inputWidth").value;
    makeGrid(row, cel);
  });

// const table = document.getElementById("pixelCanvas");
// table.removeChild("tr");
