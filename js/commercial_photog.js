
// document.addEventListener("DOMContentLoaded", function () {
//   // 初始化，顯示所有圖像區塊
//   var allTabs = document.querySelectorAll(".cmp_img");
//   allTabs.forEach(function (tab) {
//     tab.classList.remove("show");
//   });

//   // 顯示初始的圖像區塊（space_img_block）
//   var initialTab = document.getElementById("product_tab");
//   initialTab.classList.add("show");
// });

// function showTab(tabName) {
//   // 隱藏所有圖像區塊
//   var allTabs = document.querySelectorAll(".cmp_img");
//   allTabs.forEach(function (tab) {
//     tab.classList.remove("show");
//   });

//   // 顯示選定的圖像區塊
//   var selectedTab = document.getElementById(tabName + "_tab");
//   selectedTab.classList.add("show");
// }


document.addEventListener('DOMContentLoaded', function() {
    // 初始化，顯示所有圖像區塊
    var allTabs = document.querySelectorAll('.cmp_img');
    allTabs.forEach(function(tab) {
      tab.classList.remove('show');
    });
  
    // 顯示初始的圖像區塊（space_img_block）
    var initialTab = document.getElementById('space_tab');
    initialTab.classList.add('show');
  
    // 初始選中的 tab
    var initialTabName = 'space';
    var initialLi = document.querySelector('.cmp_img_title li.' + initialTabName);
    initialLi.classList.add('selected');
  });
  
  function showTab(tabName) {
    // 隱藏所有圖像區塊
    var allTabs = document.querySelectorAll('.cmp_img');
    allTabs.forEach(function(tab) {
      tab.classList.remove('show');
    });
  
    // 顯示選定的圖像區塊
    var selectedTab = document.getElementById(tabName + '_tab');
    selectedTab.classList.add('show');
  
    // 移除先前選中的 tab
    var previousSelectedLi = document.querySelector('.cmp_img_title li.selected');
    if (previousSelectedLi) {
      previousSelectedLi.classList.remove('selected');
    }
  
    // 現在選中的 tab 加上 selected 類別
    var selectedLi = document.querySelector('.cmp_img_title li.' + tabName);
    selectedLi.classList.add('selected');
  }
  