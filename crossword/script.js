//JS... very difficult JS.

//event listener to ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    //array for the cross word words and their positions in the crossword
    const crosswordData = [
        { word: "TIGER", direction: "across", row: 3, col: 0 },
        { word: "DOG", direction: "down", row: 1, col: 2 },
        { word: "CAT", direction: "down", row: 1, col: 0 }
    ];

    //gets the crossword container element by its id
    const container = document.getElementById('crossword-container');
    //create a 5 by 5 grid of input elements
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            //create an input element
            const input = document.createElement('input'); 
            //set type to text
            input.type = 'text'; 
            //limit the input to one char
            input.maxLength = 1; 
            //set the size of the input
            container.appendChild(input); 
        }
    }
    //hint letters for realism and such
    const hints = ['T', 'D', 'A'];
    crosswordData.forEach(item => {
        //calc the starting index based on row and column
        let startIndex = item.row * 5 + item.col; 
        Array.from(item.word).forEach((letter, index) => {
            //calc cell index
            let cellIndex = startIndex + (item.direction === "across" ? index : index * 5); 
            //check if the letter is in the hints array
            if (hints.includes(letter)) { 
                //set the input value to the letter
                container.children[cellIndex].value = letter; 
            }
        });
    });
});
//answer check function
function checkAnswers() {
    //array of objects for the correct answers
    const crosswordData = [
        { word: "TIGER", direction: "across", row: 3, col: 0 },
        { word: "DOG", direction: "down", row: 1, col: 2 },
        { word: "CAT", direction: "down", row: 1, col: 0 }
    ];
    //get the crossword container element by its id
    const container = document.getElementById('crossword-container');
    //flag to track if all the answers are right or wrong
    let correct = true; 

    crosswordData.forEach(item => {
        //calc the starting index based on the row and column
        let startIndex = item.row * 5 + item.col; 
        Array.from(item.word).forEach((letter, index) => {
            //calc cell index
            let cellIndex = startIndex + (item.direction === "across" ? index : index * 5); 
            //compare input value with the correct letter
            if (container.children[cellIndex].value.toUpperCase() !== letter) { 
                //if any letter is wrong then set correct to false
                correct = false; 
            }
        });
    });

    //right or wrong display
    if (correct) {
        alert('Correct! Well done.'); // Correct answers message
    } else {
        alert('Incorrect, please try again.'); // Incorrect answers message
    }
}