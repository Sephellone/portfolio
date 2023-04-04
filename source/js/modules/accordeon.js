const accordeons = document.querySelectorAll('[data-accordeon-element]');

const initAccordeons = () => {
  if (accordeons && accordeons.length) {
    accordeons.forEach((accordeon) => {
      const accordeonButton = accordeon.querySelector('[data-accordeon-button]');
      const accordeonContent = accordeon.querySelector('[data-accordeon-content]');
      accordeonContent.classList.remove('nojs');
      const initialButtonText = accordeonButton.textContent;

      accordeonButton.addEventListener('click', () => {
        if (accordeonContent.classList.contains('open')) {
          accordeonContent.classList.remove('open');
          accordeonButton.textContent = initialButtonText;
        } else {
          accordeonContent.classList.add('open');
          accordeonButton.textContent = 'Свернуть';
        };
        accordeonButton.blur();
      });
    });
  }
};

export {initAccordeons};
