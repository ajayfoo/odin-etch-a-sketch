function getBox() {
    const box = document.createElement('div');
    box.classList.add('box');
    return box;
}

function getRow(length) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < length; ++i) {
        row.appendChild(getBox());
    }
    return row;
}

function drawSquareGrid(length, breadth) {
    const grid = document.getElementById('grid');
    for (let i = 0; i < length; ++i) {
        grid.appendChild(getRow(breadth));
    }
}

drawSquareGrid(16, 16);