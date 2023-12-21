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

function drawGrid(length, breadth) {
    const grid = document.getElementById('grid');
    for (let i = 0; i < length; ++i) {
        grid.appendChild(getRow(breadth));
    }
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

function recreateGrid() {
    const length = prompt('Enter Grid length');
    const grid = document.getElementById('grid');
    const rows = grid.querySelectorAll('.row');
    rows.forEach(row => row.remove());
    drawGrid(length, length);
}

drawGrid(16, 16);
changeBackgroundColorOfEveryBoxOnHover();