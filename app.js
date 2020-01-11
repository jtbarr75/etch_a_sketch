//creates a grid that changes color as you move the mouse through it

const container = document.getElementById("container");
container.addEventListener('mouseover',changeColor);
const btn = document.createElement('button');
btn.innerText = "Reset";
btn.addEventListener('click', reset);
container.parentElement.insertBefore(btn, container);
let size = 16;

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
        box.style.backgroundColor = 'red';
    }
}

function reset(){
    size = prompt("How many squares per side?")
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    makeRows(size,size);
}

makeRows(size,size);