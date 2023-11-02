const color = document.getElementById("color-select");
const bgColor = document.getElementById("bg-color-select");
const rangeInput = document.getElementById("range-slider");
const sizeLeft = document.getElementById("range-left");
const sizeRigth = document.getElementById("range-rigth");
const gridWrap = document.getElementById("grid-wrap");
const resetButton = document.getElementById("clear-grid");
sizeLeft.textContent = rangeInput.value;
sizeRigth.textContent = rangeInput.value;


rangeInput.addEventListener("input", function () {
  let selectValue = rangeInput.value;
  sizeLeft.textContent = selectValue;
  sizeRigth.textContent = selectValue;
});


const createSketchGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    gridWrap.appendChild(div);
  }
};

const updateGrid = () => {
  gridWrap.innerHTML;
  gridWrap.style.setProperty(
    "grid-template-columns",
    `repeat(${rangeInput.value}, 2fr)`
  );
  gridWrap.style.setProperty(
    "grid-template-rows",
    `repeat(${rangeInput.value}, 2fr)`
  );
  for (let i = 0; i < rangeInput.value * rangeInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    gridWrap.appendChild(div);
  }
  console.log(rangeInput.value);
};

const square = document.querySelector('div')
square.addEventListener("mouseover", (event) => {
    event.target.classList.replace("square", "color")
})
rangeInput.addEventListener("input", updateGrid);

const reset = resetButton.addEventListener("click", () => {
  gridWrap.innerHTML = "";
  rangeInput.value = "";
  gridWrap.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  gridWrap.style.setProperty("grid-template-rows", `repeat(16,2fr)`);
  createSketchGrid();
});

let progressBar = document.getElementById("progress-bar");

// toggle button colour when clicked
const buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    buttons[i].classList.toggle("btn-on");
  });
}
//change color function


createSketchGrid();
const buttonBgColor = document.getElementById('set-background')
let squares = document.querySelectorAll('.square')

function getColor (){
    return bgColor.value
}
function changeBg(){
    let seleccion = getColor()
    //changeColorBg.style.backgroundColor = seleccion;
    squares.forEach(function(square){
        square.style.backgroundColor = seleccion
    })
    alert('si')
}
//const buttonColor = document.getElementById('set-color')

buttonBgColor.addEventListener('click', changeBg)
