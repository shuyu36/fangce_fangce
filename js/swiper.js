document.addEventListener("DOMContentLoaded", function () {
  var customerSwiper = new Swiper(".customer_swiper", {
    effect: "coverflow",
    slidesPerView: 4,
    loop: true,
    centeredSlides: true,
    coverflowEffect: {
      depth: 200,
      rotate: 30,
      stretch: 0,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  const swiper = new Swiper(".case_swiper", {
    slidesPerView: "auto",
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 30000,
  });
});
