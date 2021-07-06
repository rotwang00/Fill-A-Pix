let cellStatus = Array.from(Array(size), () => new Array(size));

function processClick() {
    toggleState(this);
}

function toggleState(current) {
    const id = current.id;
    const x = parseInt(current.id[1]);
    const y = parseInt(current.id[0]);
    const classes = current.classList;
    if (classes.contains('lit')) {
        numberLit++;
    } else {
        numberLit--;
    }
    current.classList.toggle('lit');
    cellStatus[x][y] = 1 - cellStatus[x][y];
}

function createGrid() {
    numberLit = 25;

    // This grid will have all cells lit

    // Create grid div
    const newGrid = document.createElement('div');
    newGrid.setAttribute('id', 'grid');

    for (let i = 0; i < size; i++) {
        // Create row div
        const newRow = document.createElement('div');
        newRow.setAttribute('id', `row${i}`);

        for (let j = 0; j < size; j++) {
            // Create square
            const newSquare = document.createElement('button');
            newSquare.setAttribute('id', `${i}${j}`);

            // Add class
            newSquare.classList.add('gridButton');

            // Add event listener
            newSquare.addEventListener('click', processClick, false);

            // Append square to row div
            newRow.appendChild(newSquare);

            // Set status of cell. 0 = dark, 1 = lit
            cellStatus[i][j] = 1;
        }
        // Append row div to grid div
        newGrid.appendChild(newRow);
    }
    // Append grid div
    const puzzle = document.getElementById('puzzle');
    puzzle.appendChild(newGrid);
}

function resetGame() {}

function startGame() {
    createGrid();
}

startGame();
