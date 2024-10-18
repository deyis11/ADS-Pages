// Total number of images
let totalSlides = 319;
let slideshowContainer = document.getElementById("slideshow-container");

// Generate slides for all images
for (let i = 1; i <= totalSlides; i++) {
    // Create a slide div
    let slideDiv = document.createElement("div");
    slideDiv.classList.add("mySlides", "fade");

    // Create an img element
    let img = document.createElement("img");
    img.src = `images/image1 (${i}).jpg`;  // Update to match your image names
    img.alt = `Photo ${i}`;
    img.style.width = "100%";

    // Append image to slide div
    slideDiv.appendChild(img);

    // Append slide to slideshow container
    slideshowContainer.appendChild(slideDiv);
}

let slideIndex = 1;
let slideInterval;
let isPaused = false; // Control pause and resume

// Show the first slide
showSlides(slideIndex);

// Start automatic slideshow
startSlideshow();

// Function to show next/previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show slides function
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex - 1].style.display = "block";  
}

// Automatic slideshow function
function startSlideshow() {
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 3000); // Change image every 3 seconds
}

// Pause the slideshow
function pauseSlideshow() {
    clearInterval(slideInterval);
}

// Toggle pause/resume functionality
function toggleSlideshow() {
    if (isPaused) {
        startSlideshow(); // Resume the slideshow
    } else {
        pauseSlideshow(); // Pause the slideshow
    }
    isPaused = !isPaused; // Toggle the state
}

// Event listeners for buttons
document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1);     // Go to the previous slide
    pauseSlideshow();   // Pause the slideshow on manual slide change
});

document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1);      // Go to the next slide
    pauseSlideshow();   // Pause the slideshow on manual slide change
});

// Attach event listener to the slideshow container to toggle pause/resume on click
slideshowContainer.addEventListener('click', toggleSlideshow);
