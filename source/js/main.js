import { initBurger } from './modules/burger.js';
import { initThemeButtons } from './modules/theme-buttons.js';


window.addEventListener('load', () => {
  initThemeButtons();
  initBurger();
});
