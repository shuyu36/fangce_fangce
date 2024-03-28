// 保存為 demo.js
// // import { CountUp } from "../node_modules/countup.js/dist/countUp.min.js";
// import { CountUp } from "./countUp.min.js";
// document.addEventListener("DOMContentLoaded", function () {
//   const options = {
//     startVal: 10000,
//     decimalPlaces: 0, // 不要小數點
//     duration: 4,
//     useGrouping: true, // 啟用千分位分隔符
//     enableScrollSpy: true,
//   };

//   const options2 = {
//     startVal: 11.1,
//     decimalPlaces: 1, // 不要小數點
//     duration: 3,
//     useGrouping: false, // 啟用千分位分隔符
//     enableScrollSpy: true,
//   };

//   let demo1 = new CountUp("num1", 40013, options);
//   let demo2 = new CountUp("num2", 89.7, options2);
//   let demo3 = new CountUp("num3", 96.3, options2);
//   let demo4 = new CountUp("num4", 78.6, options2);

// });
// import { CountUp } from "./countUp.min.js";
document.addEventListener("DOMContentLoaded", function () {
  const counterUp = window.counterUp.default;

  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el, {
          duration: 2000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };

  const els = document.querySelectorAll(".counter");
  els.forEach((el) => {
    const IO = new IntersectionObserver(callback, { threshold: 1 });
    IO.observe(el);
  });
});
