// Получаем все слайды
const slides = document.querySelectorAll(".hero__slide");

// Получаем кнопки для переключения слайдов
const prevButton = document.querySelector(".arrow__btn--prev");
const nextButton = document.querySelector(".arrow__img--next");

// Инициализируем текущий индекс слайда
let currentSlide = 0;

// Функция для показа слайда с заданным индексом
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    slide.classList.remove("blur");
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.add("blur");
    }
  });
}

// Обработчики событий для кнопок
prevButton.addEventListener("click", () => {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
  showSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
  currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
  showSlide(currentSlide);
});

// Инициализация слайдера
showSlide(currentSlide);
