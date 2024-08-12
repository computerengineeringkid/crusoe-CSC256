// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    //references to the html elelments
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const playlist = document.getElementById('playlist');
    const currentTimeElement = document.getElementById('currentTime');
    const totalTimeElement = document.getElementById('totalTime');
    //create a new audio element
    const audio = new Audio(); 
    //tracks the playing state of the audio
    let isPlaying = false; 
    //adds event listener to the play pause btn
    playPauseBtn.addEventListener('click', () => {
      if (isPlaying) {
        //pause
        audio.pause(); 
        //change the button text to play (for realism)
        playPauseBtn.textContent = 'Play'; 
      } else {
        //play
        audio.play(); 
        //changes the btn text to pause
        playPauseBtn.textContent = 'Pause'; 
      }
      //toggles the playing state
      isPlaying = !isPlaying;
    });
  
    // Add event listener to the volume slider
    //adds an event listener 
    volumeSlider.addEventListener('input', () => {
      audio.volume = volumeSlider.value; // Adjust the audio volume
    });
  
    // Add event listener to the playlist buttons
    playlist.addEventListener('click', (e) => {
      if (e.target && e.target.nodeName === 'BUTTON') {
        //sets the audio source to the selected track
        audio.src = e.target.getAttribute('data-src'); 
        //play the selected track
        audio.play(); 
        //change the button text to pause
        playPauseBtn.textContent = 'Pause'; 
        //set the playing state to true
        isPlaying = true; 
  
        // Update the total duration once metadata is loaded
        audio.addEventListener('loadedmetadata', () => {
          totalTimeElement.textContent = formatTime(audio.duration); // Display total duration
        });
      }
    });
  
    // Add event listener to update the current time
    audio.addEventListener('timeupdate', () => {
      currentTimeElement.textContent = formatTime(audio.currentTime); // Display current time
    });
  
    // Function to format time in minutes and seconds
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60); // Calculate minutes
      const secs = Math.floor(seconds % 60); // Calculate seconds
      return `${minutes}:${secs < 10 ? '0' : ''}${secs}`; // Format time as MM:SS
    }
  });