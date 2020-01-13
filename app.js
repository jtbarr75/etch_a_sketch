//creates a grid that changes color as you move the mouse through it
let defaultSize = 16;
let color = 'red';
let random = false;

const RED = 0xff0000;
const BLUE = 0x0000ff;
const GREEN = 0x00ff00;

const container = document.getElementById('container');
const center = document.getElementById('center');

container.addEventListener('mouseover',changeColor);

const inputContainer = document.getElementById('inputContainerTop');

const textBox = document.querySelector('input');

const colorSelector = document.getElementById('colorSelector');
colorSelector.value = '#ff0000'

const btn = document.getElementById('resetButton');
btn.addEventListener('click', reset);


//creates a grid of dimensions row,col
function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows*cols); i++){
        let cell = document.createElement('div');
        cell.className = "grid-item";
        cell.style.backgroundColor = 'rgb(255,255,255)'
        container.appendChild(cell);
    }
}

//changes background color of grid items
function changeColor(e){
    if(e.target.id != "container")
    {
        var box = e.target;
        if (colorSelector.value == 'random'){
            box.style.backgroundColor = getRandomColor();
        }
        else if (colorSelector.value == 'gradient'){
            box.style.backgroundColor = shadeColor(RGBToHex(box.style.backgroundColor), -20);
            //console.log(RGBToHex(box.style.backgroundColor));
        }
        else{
            box.style.backgroundColor = colorSelector.value;
        }
    }
}

//resizes the grid
function reset(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    color = colorSelector.value;
    makeRows(textBox.value,textBox.value);
}


//gets random color -- from https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//converts rgb(r,g,b) to hex -- from https://css-tricks.com/converting-color-spaces-in-javascript/
function RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);
  
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

//shades color by given value -- from https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function shadeColor(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}

//draws first box
makeRows(defaultSize,defaultSize);