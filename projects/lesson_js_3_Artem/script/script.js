"use strict";
window.addEventListener("DOMContentLoaded", function () {
      // Variables
      const rcolorArea = document.querySelector(".rcolor--area"),
        rcolorResult = document.querySelector(".rcolor--area__result"),
        rbResult = document.querySelector(".br--area__result"),
        rbVisionResult = document.querySelector(".br__result"),
        tabsParent = document.querySelector(".tab"),
        tab = document.querySelectorAll(".tab__item"),
        tabsContent = document.querySelectorAll(".tab__content");
      
      let topLeft = document.querySelector(".topLeft"),
        topRight = document.querySelector(".topRight"),
        bottomLeft = document.querySelector(".bottomLeft"),
        bottomRight = document.querySelector(".bottomRight");

      // Tab changer
      function hideTabContent() {
        tabsContent.forEach(item => {
          item.classList.add('tab__content--invisible');
        });
        tab.forEach(item => {
          item.classList.remove('tab--active');
        });
      }

      function showTabContent(i = 0) {
        tabsContent[i].classList.remove('tab__content--invisible');
        tab[i].classList.add('tab--active');
      }

      
      tabsParent.addEventListener('click', (event) => {
          const target = event.target;          
            tab.forEach((item, i) => {
              if (target == item) {
                hideTabContent();
                showTabContent(i);
              }
            });
          });

        // Random color servise
        rcolorArea.addEventListener('keydown', (event) => {
          if (event.code == "Space" ) {
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            rcolorArea.style.backgroundColor = randomColor;
            rcolorResult.innerHTML = randomColor;
          }
        });

// Random color servise for mobile/deskop adaptation
        rcolorArea.addEventListener('touchend', (event) => {
          let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
          rcolorArea.style.backgroundColor = randomColor;
          rcolorResult.innerHTML = randomColor;
        });

        // Generator border-radius
        document.addEventListener("input", (event) => {
          let cssformat = topLeft.value + "px " + topRight.value + "px " + bottomLeft.value + "px " + bottomRight.value + "px";
          rbResult.innerHTML = "border-radius: " + cssformat;
          rbVisionResult.style.borderRadius = cssformat;

        });
      
      });