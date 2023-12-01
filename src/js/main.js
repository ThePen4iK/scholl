import calcHeight from './modules/calcHeight'
import select from "./modules/select";
import tabs from "./modules/tabs";

window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const burger = document.querySelector(".burger");
  const headerFixed = document.querySelector('.header-js');
  const headerFixedDefault = document.querySelector('.header--default');
  const menuItem = document.querySelectorAll('.menu-item')
  const rootElement = document.documentElement;

  window.onscroll = function() {
    fixed();
    fixedDefault();
  };
  function fixed() {
    if (window.scrollY > 0) {
      headerFixed?.classList.add('header--fixed');
    } else {
      headerFixed?.classList.remove('header--fixed');
    }
  }
  function fixedDefault() {
    if (window.scrollY > 0 && window.innerWidth <= 1239) {
      headerFixedDefault?.classList.add('header--fixed');
    } else {
      headerFixedDefault?.classList.remove('header--fixed');
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

  tabs('.news-tabs', '.news-list', 'active', 'show')

  select()

  calcHeight()
})
