import { initBurger } from './modules/burger.js';
import { initProjectsSection } from './modules/projects.js';
import { initThemeButtons } from './modules/theme-buttons.js';


window.addEventListener('load', () => {
  initThemeButtons();
  initBurger();
  initProjectsSection();
});