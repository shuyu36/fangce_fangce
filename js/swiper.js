document.addEventListener("DOMContentLoaded", function () {
  var customerSwiper = new Swiper(".customer_swiper", {
    effect: "coverflow",
    slidesPerView: 2,
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
    breakpoints: {
      // 在視窗寬度小於等於 575px 時，slidesPerView 設置為 2
      575: {
        slidesPerView: 2,
      },
      // 在視窗寬度大於 575px 時，slidesPerView 設置為 4
      576: {
        slidesPerView: 4,
      },
    }
  });
  // const swiper = new Swiper(".case_swiper", {
  //   slidesPerView: "auto",
  //   allowTouchMove: false,
  //   autoplay: {
  //     delay: 0,
  //     disableOnInteraction: false,
  //   },
  //   loop: true,
  //   speed: 30000,
  // });
});
