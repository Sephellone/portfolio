import { initBurger } from './modules/burger.js';
import { setFormSubmit } from './modules/form.js';
import { initProjectsSection } from './modules/projects.js';
import { initThemeButtons } from './modules/theme-buttons.js';
import { initAccordeons } from './modules/accordeon.js';


window.addEventListener('load', () => {
  initThemeButtons();
  initBurger();
  initProjectsSection();
  setFormSubmit();
  initAccordeons();
});
