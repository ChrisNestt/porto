let slideIndex = 0;
showSlides(slideIndex);


function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    
    slides[n].style.display = "flex";  
    dots[n].className += " active";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
