document.addEventListener("DOMContentLoaded", () => {
    const sliderArticles = document.querySelectorAll(".slider__article");
    let currentSlide = 0;

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

    // Mostrar la primera diapositiva al inicio
    showSlide(currentSlide);

    // Cambiar automáticamente entre diapositivas
    const slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % sliderArticles.length;
        showSlide(currentSlide);
    }, 8000); // Cambia la diapositiva cada 3 segundos
});
