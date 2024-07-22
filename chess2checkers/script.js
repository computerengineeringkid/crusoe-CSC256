document.addEventListener("DOMContentLoaded", function() {
    //grab the checkers element id
    const checkers = document.getElementById("checkers");
    //the actual board representation of where the pieces are starting out
    const board = [
        [null, 'b', null, 'b', null, 'b', null, 'b'],
        ['b', null, 'b', null, 'b', null, 'b', null],
        [null, 'b', null, 'b', null, 'b', null, 'b'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ['w', null, 'w', null, 'w', null, 'w', null],
        [null, 'w', null, 'w', null, 'w', null, 'w'],
        ['w', null, 'w', null, 'w', null, 'w', null]
    ];

    //func to create the board
    function createCheckersBoard() {
        //loop through each row
        for (let i = 0; i < 8; i++) {
            //loop through each column
            for (let j = 0; j < 8; j++) {
                //create a div element for each cell
                const cell = document.createElement("div");
                //add the cell class to ythe div
                cell.classList.add("cell");
                //store the row and column as data attributes
                cell.dataset.row = i;
                cell.dataset.col = j;
                //check if the sum of row and column is even
                if ((i + j) % 2 === 0) {
                    // if even then green
                    cell.classList.add("green");
                } else {
                    //if odd then blue
                    cell.classList.add("blue");
                    //if there is a piece at this position in the board array then create the piece element
                    if (board[i][j]) {
                        createPiece(`piece-${i}-${j}`, `checker-piece checker-piece-${board[i][j]}`, cell);
                    }
                }
                //add an event listener to handle cell clicks
                //event listener for the cell clicks
                cell.addEventListener("click", handleCellClick);
                //append the cell to the checkers board
                checkers.appendChild(cell);
            }
        }
    }

    //funciton to create a piece
    function createPiece(id, pieceClass, square) {
        //create a div element for the piece
        const piece = document.createElement("div");
        //set the id
        piece.id = id;
        //set the class  
        piece.className = pieceClass;
        //store the row and column as data attributes
        piece.dataset.row = square.dataset.row;
        piece.dataset.col = square.dataset.col;
        //event listener for the piece clicks
        piece.addEventListener("click", handlePieceClick);
        //append the piece to the square
        square.appendChild(piece);
    }

    //var to keep track of the selected piece
    let selectedPiece = null;

    //func to handle the piece clicks
    function handlePieceClick(event) {
        //stop the event from propagating to the parent elements
        event.stopPropagation();
        //set the selected piece to the clicked piece
        selectedPiece = event.target;
    }

    //func to handle the cell clicks
    function handleCellClick(event) {
        //if a piece is selected then grab the target cell 
        if (selectedPiece) {
            const cell = event.target;
            //get the row and the collumn of the target cell
            const row = parseInt(cell.dataset.row);
            const col = parseInt(cell.dataset.col);
            //get the row and column of the selected piece
            const pieceRow = parseInt(selectedPiece.dataset.row);
            const pieceCol = parseInt(selectedPiece.dataset.col);

            //check if the move is valid
            //im getting tired of doing comments now  
            if (Math.abs(row - pieceRow) === 1 && Math.abs(col - pieceCol) === 1) {
                selectedPiece.dataset.row = row;
                selectedPiece.dataset.col = col;
              cell.appendChild(selectedPiece);
                selectedPiece = null;
            }
        }
    }

//create the board if everything is loaded correctly
    createCheckersBoard();
});
//END