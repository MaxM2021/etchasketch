// take a number, in this case 16, and generate divs, 16 parents in column layout(invisible)
// and 16 in horizontal layout, (visible). the etchasketching will happen with a hover effect,
// no coordinates necessary.
//
//Changing the number of pixels should not grow the working area but instead shrink the pixels.
//random color option


function createDivs(rows, columns) {
    for (i = 0; i < rows; i++) {
         let rowContainers = document.createElement('div');
        rowContainers.classList.add('rowcontainers');
        rowContainers.setAttribute('draggable', 'false');
        content.appendChild(rowContainers);
        
    };
    rowContainers = document.querySelectorAll('.rowcontainers');
    rowContainers.forEach((row) => {
        for (i = 0; i < columns; i++) {
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.setAttribute('draggable', 'false');
            row.appendChild(pixel);
        };
    });
    //Assigning the variables again for deletion and recreation
    pixels = document.querySelectorAll('.pixel');
    rowDivs = document.querySelectorAll('.rowcontainers');
    //Listeners for the actual drawing
    pixels.forEach((pixel) => {
        //make drawing click and drag
         pixel.addEventListener('mouseover', (event) => {
            if (event.buttons == 1) {
                if (eraserToggle == true) {
                    pixel.style.backgroundColor = '#FFFFFF';
                    pixel.classList.remove('filled');
                } else if (rainbowToggle == true) {
                    pixel.style.backgroundColor = randomColor();
                    pixel.classList.add('filled');
                } else {
                    pixel.style.backgroundColor = 'red';
                    pixel.classList.add('filled');
                };
            }
            console.log(event);
         });
        //make one pixel drawable
        pixel.addEventListener('click', () => {
            if (eraserToggle == true) {
                pixel.style.backgroundColor = '#FFFFFF';
                pixel.classList.remove('filled');
            } else if (rainbowToggle == true) {
                pixel.style.backgroundColor = randomColor();
                pixel.classList.add('filled');
            } else {
                pixel.style.backgroundColor = 'red';
                pixel.classList.add('filled');
            };
        });
});
};

function randomColor() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0,6);
};

//elements
const content = document.querySelector('#content');
let pixels = document.querySelectorAll('.pixel');
let rowDivs = document.querySelectorAll('.rowcontainers');

//Buttons and Input
const reset = document.querySelector('#reset');
const rainbowButton = document.querySelector('#rainbow');
const eraserButton = document.querySelector('#eraser');
let   rainbowToggle = false;
let   eraserToggle = false;
const regenerate = document.querySelector('#regenerate');
const rows = document.querySelector('#rows');
const columns = document.querySelector('#columns');

reset.addEventListener('click', () => {
    pixels.forEach((pixel) => {
        pixel.classList.remove('filled');
    });
    rainbowToggle = false;
});

rainbowButton.addEventListener('click', () => {
    rainbowToggle = !rainbowToggle;
    rainbowButton.classList.toggle('pressed');
});
eraserButton.addEventListener('click', () =>  {
    eraserToggle = !eraserToggle;
    eraserButton.classList.toggle('pressed');
});

regenerate.addEventListener('click', () => {

    //remove all divs
    pixels.forEach((pixel) => {
        pixel.remove();
    });
    rowDivs.forEach((container) => {
        container.remove();
    });
    //recreate divs with input parameters
    createDivs(rows.value, columns.value);
});

createDivs(16, 16);




