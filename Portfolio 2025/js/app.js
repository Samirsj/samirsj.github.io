
const sliderText = document.querySelector(".slider-content h1");
const text = "Samir Es safi";  
let index = 0;  


function typeWriter() {
    if (index < text.length) {
        sliderText.innerHTML += text.charAt(index);  
        index++;  
        setTimeout(typeWriter, 200);  
    }
}

window.onload = () => {
    typeWriter();
};


document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".skill-slider");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");

    let scrollAmount = 0;
    const step = 220; // Distance de défilement par clic (ajuste selon la taille des compétences)
    const maxScroll = slider.scrollWidth - slider.parentElement.clientWidth; // Assure un défilement total

    nextButton.addEventListener("click", function () {
        if (scrollAmount < maxScroll) {
            scrollAmount += step;
            if (scrollAmount > maxScroll) scrollAmount = maxScroll;
            slider.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    prevButton.addEventListener("click", function () {
        if (scrollAmount > 0) {
            scrollAmount -= step;
            if (scrollAmount < 0) scrollAmount = 0;
            slider.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });
});




