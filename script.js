// take a number, in this case 16, and generate divs, 16 parents in column layout(invisible)
// and 16 in horizontal layout, (visible). the etchasketching will happen with a hover effect,
// no coordinates necessary.
//


function createDivs(rows, columns) {
    for (i = 0; i < rows; i++) {
         let rowContainers = document.createElement('div');
        rowContainers.classList.add('rowcontainers');
        content.appendChild(rowContainers);
        
    };
    rowContainers = document.querySelectorAll('.rowcontainers');
    rowContainers.forEach((row) => {
        for (i = 0; i < columns; i++) {
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row.appendChild(pixel);
        };
    });
    //Assigning the variables again for deletion and recreation
    pixels = document.querySelectorAll('.pixel');
    rowDivs = document.querySelectorAll('.rowcontainers');
    pixels.forEach((pixel) => {
         pixel.addEventListener('mouseover', () => pixel.classList.add('filled'));
});
};

//elements
const content = document.querySelector('#content');
let pixels = document.querySelectorAll('.pixel');
let rowDivs = document.querySelectorAll('.rowcontainers');

//Buttons and Input
const reset = document.querySelector('#reset');
const regenerate = document.querySelector('#regenerate');
const rows = document.querySelector('#rows');
const columns = document.querySelector('#columns');

reset.addEventListener('click', () => {
    pixels.forEach((pixel) => {
        pixel.classList.remove('filled');
    });
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




