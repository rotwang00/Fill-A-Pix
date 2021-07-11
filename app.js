const size = 15;
let cellStatus = Array.from(Array(size), () => new Array(size));

// Seems like there's a mistake in this one
// const clueData = [
//     [1, , 1, 3, , 2, , , 2, , , , , , 1],
//     [, , , 4, , , 2, , , 5, , 3, , , ,],
//     [2, , , , 5, , 2, 2, 4, 6, , , 3, , ,],
//     [, 5, 4, 4, 4, 4, , , , 7, 6, 5, , , 1],
//     [2, , 5, 5, 5, , 5, 6, , , 6, 4, , 2, ,],
//     [, 3, 5, 6, 5, 4, , , 7, 7, 6, , 5, , 3],
//     [1, , 4, 5, 5, , , , 6, 7, , 5, 4, , 2],
//     [, , , , , 4, , 8, 6, , , 6, , , ,],
//     [, , 4, 4, 4, 6, 8, 9, 6, , , , 4, , ,],
//     [4, , , , 4, 6, 9, , , , , , 6, 3, ,],
//     [, , 3, , 5, , , 6, 5, 3, , , 7, , 3],
//     [5, , , 4, , 8, 7, 5, , 3, 5, 3, 5, , ,],
//     [, 4, , , 5, 7, , 4, 2, 3, , 3, 4, , 3],
//     [, , , , 3, , , , , , , , , 2, ,],
//     [1, , 1, 2, , 2, 2, , 4, , 2, , , , 1],
// ];

const clueData = [
    [2, , 3, , 3, 3, 3, , , , , , , , ,],
    [, , , 4, , , , , , 3, 3, 3, , , '0'],
    [4, , 4, 3, 3, 3, 2, , , 5, 6, , , , ,],
    [4, , 3, 3, 4, , 5, 4, 3, , 4, , 6, , ,],
    [, , 3, 3, 4, 5, 4, 4, , 4, , 6, , , 4],
    [3, , , , 3, , 5, , , 4, 5, , 6, , 5],
    [, 4, 5, , , 4, , , 5, 6, 6, 7, 6, , ,],
    [, 4, 6, 6, , , , 9, , , 7, , , , 5],
    [, , 5, , , 8, 9, , 6, , 6, 6, , , ,],
    [3, , , 5, 7, 7, 8, 7, , 7, 7, , 4, , 1],
    [, , 4, , , 6, , 7, 8, , 6, 5, 3, , 1],
    [, 4, , , 4, , 5, , 9, 8, , 5, 4, , 2],
    [, 3, 3, , 3, , 5, , 6, 5, 5, 4, 4, , 3],
    [, , , , 3, , , , , , , 4, , , 2],
    [, 3, 2, , 1, , 4, , , 3, , , , , ,],
];
function fillGridWithClues() {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            cellStatus[i][j] = {
                clue: clueData[i][j],
                status: 'empty',
            };
        }
    }
}

function processClick() {
    toggleState(this);
}

function toggleState(current) {
    // TODO toggle among three statuses
    // cellStatus[x][y] = 1 - cellStatus[x][y];
    const id = current.id;
    const x = parseInt(current.id[1]);
    const y = parseInt(current.id[0]);
    const classes = current.classList;

    if (classes.contains('empty')) {
        classes.remove('empty');
        classes.add('filled');
    } else if (classes.contains('filled')) {
        classes.remove('filled');
        classes.add('ruledOut');
    } else if (classes.contains('ruledOut')) {
        classes.remove('ruledOut');
        classes.add('empty');
    }
}

function createGrid() {
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

            // Add clue number
            if (cellStatus[i][j].clue) {
                // console.log(
                //     `Adding ${cellStatus[i][j].clue} to cell ${i}, ${j}`
                // );
                newSquare.innerText = cellStatus[i][j].clue;
            }

            // Add classes
            newSquare.classList.add('gridButton');
            newSquare.classList.add(cellStatus[i][j].status);

            // Add event listener
            newSquare.addEventListener('click', processClick, false);

            // Append square to row div
            newRow.appendChild(newSquare);
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
    fillGridWithClues();
    createGrid();
}

startGame();
