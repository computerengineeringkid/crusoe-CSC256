//my jss
//selects all elements with the slides class
const slides = document.querySelectorAll('.slides');
//int the current slide index
let currentSlide = 0;

//func to show a specific slide 
function showSlide(index) {
    //loops through each slide
    slides.forEach((slide, i) => {
    //removes the active class from each slide
        slide.classList.remove('active'); 
        if (i === index) {
            //adds the active class to the slide with the matching index
            slide.classList.add('active'); 
        }
    });
}

//func to show thr next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; 
}

//change the slide every three seconds
setInterval(nextSlide, 3000);

showSlide(currentSlide);