//creates a grid that changes color as you move the mouse through it

const container = document.getElementById('container');
const center = document.getElementById('center');

container.addEventListener('mouseover',changeColor);

const inputContainer = document.getElementById('inputContainerTop');

const textBox = document.querySelector('input');
const colorSelector = document.getElementById('colorSelector');

const btn = document.getElementById('resetButton');
btn.addEventListener('click', reset);

let defaultSize = 16;
let color = 'red';

function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows*cols); i++){
        let cell = document.createElement('div');
        cell.className = "grid-item";
        container.appendChild(cell);
    }
}

function changeColor(e){
    if(e.target.id != "container")
    {
        console.log(e.target);
        var box = e.target;
        box.style.backgroundColor = color;
    }
}

function reset(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    color = colorSelector.value;
    makeRows(textBox.value,textBox.value);
}

makeRows(defaultSize,defaultSize);