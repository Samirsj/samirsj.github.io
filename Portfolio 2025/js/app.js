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


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-box");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Supprime la classe "active" de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            projects.forEach(project => {
                if (filterValue === "all" || project.getAttribute("data-category") === filterValue) {
                    project.style.display = "flex"; // Affiche les projets correspondants
                } else {
                    project.style.display = "none"; // Cache les autres
                }
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectBoxes = document.querySelectorAll(".project-box");
    const noProjectMessage = document.getElementById("no-project-message");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            let visibleProjects = 0;

            projectBoxes.forEach(box => {
                if (filter === "all" || box.getAttribute("data-category") === filter) {
                    box.style.display = "block";
                    visibleProjects++;
                } else {
                    box.style.display = "none";
                }
            });

            // Affiche le message si aucun projet n'est visible
            noProjectMessage.style.display = (visibleProjects === 0) ? "block" : "none";

            // Supprime la classe "active" des boutons et l'ajoute au bouton cliqué
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

// Animation du header au scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

