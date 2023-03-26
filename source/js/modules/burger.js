import {ScrollLock} from './../vendor/scroll-lock.js';
import {FocusLock} from './../vendor/focus-lock.js';

const header = document.querySelector('[data-header]');
const burgerButton = document.querySelector('[data-burger]');
const menuClosers = document.querySelectorAll('[data-close-menu]');

const scrollLock = new ScrollLock();
const focusLock = new FocusLock();

const openMenu = () => {
  scrollLock.disableScrolling();
  header.classList.add('open');
  focusLock.lock('[data-header]');
  burgerButton.blur();
};
const closeMenu = () => {
  header.classList.remove('open');
  scrollLock.enableScrolling();
  focusLock.unlock('[data-header]');
  burgerButton.blur();
};

const burgerClickHandler = () => {
  if (!header.classList.contains('open')) {
    openMenu();
  } else {
    closeMenu();
  };
};

const menuClosersClickHandler = () => {
  if (header.classList.contains('open')) {
    closeMenu();
  };
};

const closestClickHandler = (evt) => {
  if (evt.target === burgerButton.closest('[data-header]') && header.classList.contains('open')) {
    closeMenu();
  }
}

const initBurger = () => {
  if (header && burgerButton) {
    burgerButton.addEventListener('click', burgerClickHandler);

    burgerButton.closest('[data-header]').addEventListener('click', closestClickHandler);

    if (menuClosers && menuClosers.length) {
      menuClosers.forEach((item) => {
        item.addEventListener('click', menuClosersClickHandler)
      });
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    });
  };
};

export {initBurger};
