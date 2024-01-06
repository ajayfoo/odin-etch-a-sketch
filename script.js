
const enableRandColorLineCheckbox = document.getElementById('enable-rand-color');
let hoverCounts = [];
enableRandColorLineCheckbox.addEventListener('click', () => {
    changeBackgroundColorOfEveryBoxOnHover(
        enableRandColorLineCheckbox.checked === true
    );
});

function getIdealBoxSize(numOfBoxes) {
    return Math.round((16 / numOfBoxes) * 30) + 'px';
}

function getBox(length) {
    const box = document.createElement('div');
    const idealSize = getIdealBoxSize(length);
    box.style.width = idealSize;
    box.style.height = idealSize;
    box.classList.add('box');
    return box;
}

function getRow(length) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < length; ++i) {
        row.appendChild(getBox(length));
    }
    return row;
}

function randInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function randColor() {
    return `rgb( ${randInt(255)} ${randInt(255)} ${randInt(255)})`;
}

function changeBackgroundColorOfEveryBoxOnHover(randomize) {
    const grid = document.getElementById('grid');
    let allBoxes = [];
    const rows = grid.querySelectorAll('.row');
    rows.forEach((row) => {
        const boxes = row.querySelectorAll('.box');
        boxes.forEach(box => {
            allBoxes.push(box);
        });
    });
    for (let i = 0; i < allBoxes.length; ++i) {
        allBoxes[i].addEventListener('mouseenter', () => {
            if (randomize) {
                allBoxes[i].style.backgroundColor = randColor();
                console.log('randomize');
            }
            else {
                const hoverCount = ++hoverCounts[i];
                allBoxes[i].style.backgroundColor = getColorValue(hoverCount);
                console.log('black&white');
            }
        });
    }
}

function drawGrid(length, breadth) {
    hoverCounts.length = length * breadth;
    hoverCounts = hoverCounts.fill(0);
    const grid = document.getElementById('grid');
    for (let i = 0; i < length; ++i) {
        grid.appendChild(getRow(breadth));
    }
    changeBackgroundColorOfEveryBoxOnHover(
        enableRandColorLineCheckbox.checked === true
    );
}

function recreateGrid() {
    let length;
    while (true) {
        length = prompt('Enter Grid length(Max: 100)');
        if (length > 0 && length <= 100) break;
        if (length === null) return;
    }
    const grid = document.getElementById('grid');
    const rows = grid.querySelectorAll('.row');
    rows.forEach(row => row.remove());
    drawGrid(length, length);
}

function getColorValue(hoverCount) {
    const normalizedHoverCount = (hoverCount >= 10 ? 10 : hoverCount) * 10;
    const brightnessValue = (100 - normalizedHoverCount) + '%';
    return `rgb(${brightnessValue} ${brightnessValue} ${brightnessValue})`;
}

drawGrid(16, 16);
const recreateGridBtn = document.getElementById('recreate-grid');
recreateGridBtn.addEventListener('click', () => {
    recreateGrid();
});
