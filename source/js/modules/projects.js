import { PROJECTS } from './projects-data.js';

const projectsList = document.querySelector('[data-projects-list]');
const card = document.querySelector('#card');
const showMoreButton = document.querySelector('[data-projects-show-more]');
const labelButtons = document.querySelectorAll('[data-filter]');

const renderLabels = (card, labels) => {
  const cardLabels = card.querySelectorAll('[data-card-label]');
  cardLabels.forEach((item) => {
    if (!labels.includes(item.dataset.cardLabel)) {
      item.remove();
    }
  });
};

let projectsForRender = PROJECTS;

let maxProjectsShown = 6;

const renderProjects = (projectsArray) => {
  projectsList.innerHTML = "";

  for (let i = 0; i < maxProjectsShown; i++) {
    const project = projectsArray[i];
    if (project) {
      const cardTemplate = card.content.querySelector('.projects__card-item');
      const newProjectCard = cardTemplate.cloneNode(true);
      newProjectCard.querySelector('.project-card__title').textContent = project.title;
      newProjectCard.querySelector('img').src = project.image;
      newProjectCard.querySelector('img').srcset = project.srcset;
      newProjectCard.querySelector('[type="image/webp"]').srcset = project.webp;
      newProjectCard.querySelector('[data-website="website"]').href = project.website;
      newProjectCard.querySelector('[data-website="github"]').href = project.github;
      renderLabels(newProjectCard, project.labels);
      projectsList.append(newProjectCard);
    };
  };
};

const showMoreClickHandler = (evt) => {
  evt.preventDefault();

  if (projectsForRender.length >= 6) {
    if (!showMoreButton.classList.contains('open')) {
      maxProjectsShown = projectsForRender.length;
      showMoreButton.classList.add('open');
      showMoreButton.textContent = 'Свернуть'
      renderProjects(projectsForRender);
    } else {
      maxProjectsShown = 6;
      showMoreButton.classList.remove('open');
      showMoreButton.textContent = 'Показать еще';
      renderProjects(projectsForRender);
    }
  }
};

const compareLabels = (projectObject, label) => {
  return projectObject.labels.includes(label) || label === 'all'
};

const labelButtonsClickHandler = (evt) => {
  labelButtons.forEach((button) => {
    button.dataset.label = '';
  });
  evt.target.dataset.label = 'active';
  evt.target.blur();

  const labelData = evt.target.dataset.filter;
  projectsForRender = [];

  PROJECTS.forEach((item) => {
    if(compareLabels(item, labelData)) {
      projectsForRender.push(item);
    };
  });

  if (projectsForRender.length <= 6) {
    showMoreButton.disabled = true;
  } else {
    showMoreButton.disabled = false;
  }

  renderProjects(projectsForRender);
};

const initProjectsSection = () => {
  if (projectsList && card) {
    renderProjects(projectsForRender);
  }

  if (showMoreButton) {
    showMoreButton.addEventListener('click', showMoreClickHandler);
  }

  if (labelButtons && labelButtons.length) {
    labelButtons.forEach((button) => {
      button.addEventListener('click', labelButtonsClickHandler);
    });
  }
};

export {initProjectsSection};
