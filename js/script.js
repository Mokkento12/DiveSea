document.addEventListener("DOMContentLoaded", function () {
  // Слайдер hero
  const heroSlides = document.querySelectorAll(".hero__slide");
  const heroPrevButton = document.querySelector(".arrow__btn--prev");
  const heroNextButton = document.querySelector(".arrow__img--next");
  let currentHeroSlide = 0;

  function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
      slide.classList.remove("active");
      slide.classList.remove("blur");
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.add("blur");
      }
    });
  }

  heroPrevButton.addEventListener("click", () => {
    currentHeroSlide =
      currentHeroSlide > 0 ? currentHeroSlide - 1 : heroSlides.length - 1;
    showHeroSlide(currentHeroSlide);
  });

  heroNextButton.addEventListener("click", () => {
    currentHeroSlide =
      currentHeroSlide < heroSlides.length - 1 ? currentHeroSlide + 1 : 0;
    showHeroSlide(currentHeroSlide);
  });

  showHeroSlide(currentHeroSlide);

  // Слайдер weekly
  const weeklySlides = document.querySelectorAll(".trending__card");
  const weeklyPrevButton = document.querySelector(".weekly__btn--prev");
  const weeklyNextButton = document.querySelector(".weekly__btn--next");
  let currentWeeklySlide = 0;

  function showWeeklySlide(index) {
    // Количество слайдов, которые видно одновременно
    const visibleSlidesCount = 3;

    // Центральный индекс слайда
    const centerIndex = Math.floor(visibleSlidesCount / 2);

    // Перебираем слайды
    weeklySlides.forEach((slide, i) => {
      // Вычисляем расстояние от активного слайда до текущего
      const distanceFromActive = i - index;

      // Позиция слайда относительно активного
      const position = distanceFromActive + centerIndex;

      // Устанавливаем стили в зависимости от его позиции
      if (position === centerIndex) {
        slide.style.transform = "translateX(0)";
        slide.style.zIndex = "2";
      } else {
        // Сдвигаем слайды вправо или влево относительно центрального
        const offset = (position - centerIndex) * 100; // Примерное смещение (можно настроить)
        slide.style.transform = `translateX(${offset}px)`;
        slide.style.zIndex = "1";
      }
    });
  }

  weeklyPrevButton.addEventListener("click", (e) => {
    e.preventDefault();
    currentWeeklySlide =
      currentWeeklySlide > 0 ? currentWeeklySlide - 1 : weeklySlides.length - 1;
    showWeeklySlide(currentWeeklySlide);
  });

  weeklyNextButton.addEventListener("click", (e) => {
    e.preventDefault();
    currentWeeklySlide =
      currentWeeklySlide < weeklySlides.length - 1 ? currentWeeklySlide + 1 : 0;
    showWeeklySlide(currentWeeklySlide);
  });

  showWeeklySlide(currentWeeklySlide);
});
