function processClick() {
    toggleState(this);
    const clickedSquareID = this.id;
    const y = clickedSquareID[1];
    const x = clickedSquareID[0];
    console.log(`Row ${y}, column ${x}`);
    // if (x > 0) {
    //     const newID = `${x - 1}${y}`;
    //     const sq = document.getElementById(newID);
    //     toggleState(sq);
    // }
    if (x < 4) {
        const newID = `${x + 1}${y}`;
        const sq = document.getElementById(newID);
        toggleState(sq);
    }
    // if (y > 0) {
    //     const newID = `${x}${y - 1}`;
    //     const sq = document.getElementById(newID);
    //     toggleState(sq);
    // }
    // if (y < 4) {
    //     const newID = `${x}${y + 1}`;
    //     const sq = document.getElementById(newID);
    //     toggleState(sq);
    // }
}

function toggleState(current) {
    const id = current.id;
    // console.log(`Toggled square ${id}`);
    current.classList.toggle("selected");
}

function createGrid() {
    let size = 5;

    // Create grid div
    const newGrid = document.createElement("div");
    newGrid.setAttribute("id", "grid");

    for (let i = 0; i < size; i++) {
        // Create row div
        const newRow = document.createElement("div");
        newRow.setAttribute("id", `row${i}`);

        for (let j = 0; j < size; j++) {
            // Create square
            const newSquare = document.createElement("button");
            newSquare.setAttribute("id", `${i}${j}`);

            // Add event listener
            newSquare.addEventListener("click", processClick, false);

            // Append square to row div
            newRow.appendChild(newSquare);
        }
        // Append row div to grid div
        newGrid.appendChild(newRow);
    }
    // Append grid div
    const puzzle = document.getElementById("puzzle");
    puzzle.appendChild(newGrid);
}

createGrid();