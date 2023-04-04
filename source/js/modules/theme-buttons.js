const themeButtons = document.querySelectorAll('[data-theme]');

const THEMES = ['dark', 'light', 'green'];

const updateTheme = (theme) => {
  THEMES.forEach((item) => {
    document.body.classList.remove(item);
  });
  document.body.classList.add(theme);
}

const themeButtonClickHandler = (evt) => {
  const newTheme = evt.target.dataset.theme;
  updateTheme(newTheme);
  localStorage.siteTheme = newTheme;
  evt.target.blur();
};

const initThemeButtons = () => {
  if (themeButtons && themeButtons.length) {
    themeButtons.forEach((button) => {
      button.addEventListener('click', themeButtonClickHandler);
    });

    if(localStorage.siteTheme) {
      updateTheme(localStorage.siteTheme);
    }
  };
};

export {initThemeButtons};
