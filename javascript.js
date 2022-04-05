// Sparky-code on Github //

// create a series of cells as divs with JS
// define cells as a square grid of subcells (16x16)
// allow modularity of cell count
// use hover events to change cell background color

// Inputs 

const DEFAULT_SIZE = 16;
const RESET_GRID = 0;



// Create Grid


for (let i = 0; i < DEFAULT_SIZE; i++) {
    for (let j = 0; j < DEFAULT_SIZE; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        console.log(cell.outerHTML);
        cell.style['flex-basis'] = ((100 / DEFAULT_SIZE) + '%');
        aGrid.appendChild(cell);
    }
}

// Select a Single Square - 'Draw'
// Hover Event

aGrid.addEventListener('mouseover', function (cell) {
    cell.target.classList.add('draw-black');
    cell.stopPropagation();
});

// Random Color

// Shades of Grey

// Shimmer

// Paint by numbers?
