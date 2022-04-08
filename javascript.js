
// select html buttons

const drawBlack = document.getElementById('drawBlack');
const drawGradient = document.getElementById('drawGradient');
const drawRandom = document.getElementById('drawRandom');
const drawColor = document.getElementById('colorPicker');
const resetGrid = document.getElementById('resetGrid');
const gridDensity = document.getElementById('gridDensity');

// set variable default value

let color = '#000000';
let defaultGrid = 16;
let defaultMode = color;

// The Grid

function createGrid(gridSize) {
    gridSize = prompt('Enter a value between 2-64', defaultGrid);
    if (gridSize != null) {
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.style['flex-basis'] = ((100 / gridSize) + '%');
                aGrid.appendChild(cell);
            }
        }
    } else if (gridSize != Number) {
        gridSize = defaultGrid;
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.style['flex-basis'] = ((100 / gridSize) + '%');
                aGrid.appendChild(cell);
            }
        }
    }
}
createGrid()

// Change drawing color

// Black

drawBlack.addEventListener('click', function () {
    document.getElementById('aGrid').addEventListener('mouseover', function (cell) {
        cell.target.style.background = 'rgb(0, 0, 0)';
    })
})

// // +10% Gradient Black

// drawGradient.addEventListener('click', function () {
//     document.getElementById('aGrid').addEventListener('mouseover', function (cell) {
//         cell.target.style.background = 'rgb(0, 0, 0)';
//     })
// })

// https://stackoverflow.com/questions/48533565/change-css-rgba-background-colors-alpha-value-using-js

// Draw Random Colors

drawRandom.addEventListener('click', function () {
    document.getElementById('aGrid').addEventListener('mouseover', function (cell) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        cell.target.style.background = '#' + randomColor;
    })
})

// Pick Any Color
drawColor.addEventListener('input', function () {
    let anyColor = document.getElementById('colorPicker').value;
    document.getElementById('aGrid').addEventListener('mouseover', function (cell) {
        cell.target.style.background = anyColor;
    })
})


// Clear Grid

resetGrid.addEventListener('click', function () {
    let scrub = document.getElementsByClassName('cell');
    Array.from(scrub).forEach(function (cell) { cell.remove() });
    createGrid();
})

// // Change Grid Density

// gridDensity.addEventListener('click', function () {
//     createGrid();
// });

// Say Hi @ https://dev.to/sparkycode