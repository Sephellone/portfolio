const themeButtons = document.querySelectorAll('[data-theme]');

const THEMES = ['dark', 'light', 'green'];

const themeButtonClickHandler = (evt) => {
  const newTheme = evt.target.dataset.theme;
  THEMES.forEach((item) => {
    document.body.classList.remove(item);
  });
  document.body.classList.add(newTheme);
};

const initThemeButtons = () => {
  if (themeButtons && themeButtons.length) {
    themeButtons.forEach((button) => {
      button.addEventListener('click', themeButtonClickHandler);
    });
  };
};

export {initThemeButtons};
