// Slider de servicios

const slider = document.getElementById("slider");
let currentIndex = 0;

function nextSlide() {
    if (currentIndex < slider.children.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Reinicia si es el último
    }
    updateSlider();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slider.children.length - 1; // Va al último si es el primero
    }
    updateSlider();
}

function updateSlider() {
    const width = slider.children[0].getBoundingClientRect().width;
    slider.style.transform = `translateX(-${width * currentIndex}px)`;
}

// Modal Nicolas Suazo

function openModalNicolasSuazo() {
    document.getElementById("modalNS").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("modalNS").classList.add("hidden");
}

// Evitar el cierre del modal al hacer clic fuera de él
document.getElementById("modalNS").addEventListener("click", function (event) {
    if (event.target === this) {
        event.stopPropagation();
    }
});

// Modal José Manuel

function openModalJoseManuel() {
    document.getElementById("modalJM").classList.remove("hidden");
}

function closeModalJM() {
    document.getElementById("modalJM").classList.add("hidden");
}

// Evitar el cierre del modal al hacer clic fuera de él
document.getElementById("modalJM").addEventListener("click", function (event) {
    if (event.target === this) {
        event.stopPropagation();
    }
});

// Modal Milenko Yaksic

function openModalMilenkoYaksic() {
    document.getElementById("modalMY").classList.remove("hidden");
}

function closeModalMY() {
    document.getElementById("modalMY").classList.add("hidden");
}

// Evitar el cierre del modal al hacer clic fuera de él
document.getElementById("modalMY").addEventListener("click", function (event) {
    if (event.target === this) {
        event.stopPropagation();
    }
});
