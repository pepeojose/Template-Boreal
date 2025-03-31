// -------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const sliderArticles = document.querySelectorAll(".slider__article");
    const indicatorsContainer = document.querySelector(".slider__indicators");
    let currentSlide = 0;

    // Crear indicadores (círculos)
    sliderArticles.forEach((_, index) => {
        const indicator = document.createElement("div");
        indicator.classList.add("slider__indicator");
        if (index === 0) indicator.classList.add("active"); // Marcar el primero como activo
        indicatorsContainer.appendChild(indicator);

        // Añadir evento de clic para navegar a la imagen correspondiente
        indicator.addEventListener("click", () => {
            currentSlide = index;
            showSlide(currentSlide);
            updateIndicators();
        });
    });

    const indicators = document.querySelectorAll(".slider__indicator");

    // Función para mostrar la diapositiva activa
    const showSlide = (index) => {
        sliderArticles.forEach((article, i) => {
            if (i === index) {
                article.style.opacity = 1;
                article.style.zIndex = 1;
            } else {
                article.style.opacity = 0;
                article.style.zIndex = 0;
            }
        });
    };

    // Actualizar indicadores activos
    const updateIndicators = () => {
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === currentSlide);
        });
    };

    // Cambiar automáticamente entre diapositivas
    const slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % sliderArticles.length;
        showSlide(currentSlide);
        updateIndicators();
    }, 8000); // Cambia la diapositiva cada 8 segundos
});

window.addEventListener("scroll", () => {
    const sliderArticles = document.querySelectorAll(".slider__article__image");
    sliderArticles.forEach((background) => {
        const scrollOffset = window.scrollY * 0.7; // Velocidad personalizada
        background.style.transform = `translateY(${scrollOffset}px)`;
    });
});

// Menu de navegación
const menu = document.getElementById("menu");
const menuClosed = document.getElementById("menuClosed");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
    nav.classList.add("active");
});

menuClosed.addEventListener("click", () => {
    nav.classList.remove("active");
});
