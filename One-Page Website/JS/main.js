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

    // if it's the last slide
    } else if (currentSlide = slides.length-1) {
    
        // return to slide one
        currentSlide = 0
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

    // if it's the first slide
    } else if (currentSlide == 0) {
    
        // go to last slide
        currentSlide = slides.length-1
        renderSlides()

    }

}


window.onload 

// Modal ----------------------------------------------------

function modalOn(){
    
    let images = document.getElementsByClassName('cover')

    // show modal background
    document.getElementById('modal-bg').style.display = 'block'

    // create empty DOM element
    var newDOMObj = document.createDocumentFragment();

    // move gallery to new DOM object
    newDOMObj.appendChild(document.getElementById('gallery-modal'));

    // append the new DOM object to the modal element
    // with new fixed positioning
    document.getElementById('modal-bg').prepend(newDOMObj);


}

function modalOff(element){

    // add new event handler
    element.addEventListener("click", function( event ){

        // only run if the background is clicked
        if(this === event.target) {

            // hide the modal background
            element.style.display = "none"

            
            // Move the element back
            var newDOMObj = document.createDocumentFragment();

            newDOMObj.appendChild(document.getElementById('gallery-modal'));

            document.getElementById('modal-return').
            prepend(newDOMObj);
            
        }
    });

}

function imageSelector(n){
    currentSlide = n
    renderSlides()
}