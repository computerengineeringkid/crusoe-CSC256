
document.addEventListener("DOMContentLoaded", function() {
    //chessboard element grabber by id
    const chessboard = document.getElementById("chessboard");
    //loop that creates 8 rows
    for (let i = 0; i < 8; i++) {
        //nested loop that creates 8 collumns
        for (let j = 0; j < 8; j++) {
            //create a div elementc to represent a cell
            const cell = document.createElement("div");
            //add the class cell to the div
            cell.classList.add("cell");
            //if the sum of i and j is even add the class green to the cell
            if ((i + j) % 2 === 0) {
            // If even add the green class to the cell
                cell.classList.add("green");
            } else {
            // If odd add the blue class to the cell
                cell.classList.add("blue");
            }
            //append to the board
            chessboard.appendChild(cell);
        }
    }
});
//END
