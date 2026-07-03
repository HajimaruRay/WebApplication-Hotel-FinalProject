let index = 0;
let autoSlideTimer;

function showSlide() {
    const slides = document.querySelectorAll('.Content .slides img');
    const totalSlides = slides.length;

    // Move to the next image by adjusting the transform property
    const slideWidth = slides[0].clientWidth;  // Get the width of each image

    // Calculate the new transform position
    const newTransform = -index * slideWidth;

    // Apply the new transform to the slides container to move images to the left
    const slidesContainer = document.querySelector('.Content .slides');
    slidesContainer.style.transform = `translateX(${newTransform}px)`;


    // Restart the automatic sliding every 3 seconds  
    autoSlideTimer = setTimeout(showSlide, 3000);
}

function moveSlide(direction) {

    // Get total number of slides
    const slides = document.querySelectorAll('.Content .slides img');
    const totalSlides = slides.length;

    // Update the index based on the direction (+1 for next, -1 for previous)
    index += direction;

    // If the index exceeds the range, reset to the first/last image
    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }

    // Move the slide manually by calling showSlide
    showSlide();
}




function showSlideEN() {
    const slides = document.querySelectorAll('.ContentEN .slides img');
    const totalSlides = slides.length;

    // Move to the next image by adjusting the transform property
    const slideWidth = slides[0].clientWidth;  // Get the width of each image

    // Calculate the new transform position
    const newTransform = -index * slideWidth;

    // Apply the new transform to the slides container to move images to the left
    const slidesContainer = document.querySelector('.ContentEN .slides');
    slidesContainer.style.transform = `translateX(${newTransform}px)`;


    // Restart the automatic sliding every 3 seconds  
    autoSlideTimer = setTimeout(showSlide, 3000);
}

function moveSlideEN(direction) {

    // Get total number of slides
    const slides = document.querySelectorAll('.ContentEN .slides img');
    const totalSlides = slides.length;

    // Update the index based on the direction (+1 for next, -1 for previous)
    index += direction;

    // If the index exceeds the range, reset to the first/last image
    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }

    // Move the slide manually by calling showSlide
    showSlideEN();
}

// Initialize the slider when the window is loaded
window.addEventListener("load", function() {
    showSlide();
    showSlideEN();
});
