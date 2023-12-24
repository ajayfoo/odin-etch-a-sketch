
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

function changeBackgroundColorOfEveryBoxOnHover() {
    const grid = document.getElementById('grid');
    for (const row of grid.querySelectorAll('.row')) {
        for (const box of row.querySelectorAll('.box')) {
            box.addEventListener('mouseenter', (event) => {
                event.target.style.backgroundColor = 'black';
            });
        }
    }
}

function drawGrid(length, breadth) {
    const grid = document.getElementById('grid');
    for (let i = 0; i < length; ++i) {
        grid.appendChild(getRow(breadth));
    }
    changeBackgroundColorOfEveryBoxOnHover();
}

function recreateGrid() {
    let length;
    while (true) {
        length = prompt('Enter Grid length(Max: 100)');
        if (length <= 100) break;
    }
    if (length === null) return;
    const grid = document.getElementById('grid');
    const rows = grid.querySelectorAll('.row');
    rows.forEach(row => row.remove());
    drawGrid(length, length);
}

drawGrid(16, 16);
const recreateGridBtn = document.getElementById('recreate-grid');
recreateGridBtn.addEventListener('click', () => {
    recreateGrid();
});