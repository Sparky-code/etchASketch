// Sparky-code on Github //

// create a series of cells as divs with JS
// define cells as a square grid of subcells (16x16)
// allow modularity of cell count
// use hover events to change cell background color


// Create Grid


const rows = 16;
const columns = 16;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style['flex-basis'] = ((100 / rows) + '%');
        aGrid.appendChild(cell);
    }
}


const divs = document.querySelectorAll('div.cell');



function draw() {
    divs.forEach(cell => cell.style.backgroundColor = 'red');
    console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener('mouseover', draw));



// Hover Event

// Random Color

// Shades of Grey

// Shimmer

// Paint by numbers?
