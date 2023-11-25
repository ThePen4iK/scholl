import calcHeight from './modules/calcHeight'

window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const burger = document.querySelector(".burger");
  const headerFixed = document.querySelector('.header-js');
  const menuItem = document.querySelectorAll('.menu-item')
  const rootElement = document.documentElement;

  window.onscroll = function() {
    fixed();
  };
  function fixed() {
    if (window.scrollY > 0) {
      headerFixed.classList.add('header--fixed');
    } else {
      headerFixed.classList.remove('header--fixed');
    }
  }

  if (burger) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("open")
      header.classList.toggle('header--open');
      rootElement.classList.toggle('block');
    })
  }

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      const content = item.querySelector(".sub-menu");
      item.classList.toggle("open")
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  calcHeight()
})
