// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const pages = document.querySelectorAll(".pages .page");
    let currentPageIndex = 0;
  
    // Show the current page
    function showPage(index) {
      pages.forEach((page, pageIndex) => {
        if (pageIndex === index) {
          page.style.display = "block";
        } else {
          page.style.display = "none";
        }
      });
    }
  
    // Show the next page
    nextBtn.addEventListener("click", function () {
      if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        showPage(currentPageIndex);
      }
    });
  
    // Show the previous page
    prevBtn.addEventListener("click", function () {
      if (currentPageIndex > 0) {
        currentPageIndex--;
        showPage(currentPageIndex);
      }
    });
  });
  