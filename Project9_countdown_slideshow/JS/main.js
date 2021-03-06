window.onload = function() {
    renderSlides();
};


// start timer
function timer(){
    
    // get time parameter
    let time = document.getElementById("user_time").value

    // check if time is up
    if (time <= 1){

        // tell user the time is us
        alert('Time is up')

        // end the program
        return;

    } else {
        
        // reduce the time
        document.getElementById("user_time").value -= 1

        // restart the function after 1 second
        setTimeout(function(){timer()}, 1000)
    }

}


// current slide
let currentSlide = 0;

// slide class array
let slides;

// render slides
function renderSlides(){

    // get slides
    slides = document.getElementsByClassName('slides')

    // hide slides
    for (i  = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }

    // show current
    slides[currentSlide].style.display = "block"

}


// next slide
function rightArrow(){

    // run if not last slide
    if (currentSlide < slides.length-1) {
        
        // increase slide index and render slides
        currentSlide += 1
        renderSlides()

    }

}

// last slide
function leftArrow(){

    // run if not first slide
    if (currentSlide > 0) {

        // decrease slide index and render slides
        currentSlide -= 1
        renderSlides()
    }

}