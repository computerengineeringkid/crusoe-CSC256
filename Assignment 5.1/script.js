//int an empty array to store the movie list
let movies = [];

//func to add a movie to the list
function addMovie() {
    //get the input field element using its id
    const movieInput = document.getElementById('movieInput');
    //get the val of the input field and get rid of the white space
    const movieTitle = movieInput.value.trim();

    //see if the input field is not empty
    if (movieTitle) {
        //add the movie title to the movie array
        movies.push(movieTitle);
        //clear the input field
        movieInput.value = '';
        //let the user know that the movie was added
        alert('Movie has been added!');
    } else {
        //tell the user to enter the title of a movie
        alert('Please enter a movie title.');
    }
}

//func to display the list of movies
function displayMovies() {
    //get the div element where the movie list will be displayed
    const movieListDiv = document.getElementById('movieList');
    //clear any existing content in the div
    movieListDiv.innerHTML = '';

    //check if the movie array is empty
    if (movies.length === 0) {
        //disp a message if there are no movies to display
        movieListDiv.innerHTML = '<p>No movies to display currently :( </p>';
        return;
    }

    //sort the movie array in alphabetical order
    movies.sort();
    //iterate through the sorted movie array
    movies.forEach(movie => {
        //create a paragraph element for each movie title
        const movieElement = document.createElement('p');
        //set the text of the paragraph to the movie title
        movieElement.textContent = movie;
        //set the paragraph element to the movielist div
        movieListDiv.appendChild(movieElement);
    });
}

//function to reset the movie list
function resetMovies() {
    //clear the movie array
    movies = [];
    //clear existing content in the div
    document.getElementById('movieList').innerHTML = '';
    //tell the user that the movie list has been reset
    alert('Movie list has been reset.');
}