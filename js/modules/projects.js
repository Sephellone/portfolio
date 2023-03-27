import{PROJECTS}from"./projects-data.js";const projectsList=document.querySelector("[data-projects-list]"),cardTemplate=document.querySelector("#card").content.querySelector(".projects__card-item"),showMoreButton=document.querySelector("[data-projects-show-more]"),labelButtons=document.querySelectorAll("[data-filter]"),renderLabels=(e,t)=>{e.querySelectorAll("[data-card-label]").forEach((e=>{t.includes(e.dataset.cardLabel)||e.remove()}))};let projectsForRender=PROJECTS,maxProjectsShown=6;const renderProjects=e=>{projectsList.innerHTML="";for(let t=0;t<maxProjectsShown;t++){const r=e[t];if(r){const e=cardTemplate.cloneNode(!0);e.querySelector(".project-card__title").textContent=r.title,e.querySelector("img").src=r.image,e.querySelector("img").srcset=r.srcset,e.querySelector('[type="image/webp"]').srcset=r.webp,e.querySelector('[data-website="website"]').href=r.website,e.querySelector('[data-website="github"]').href=r.github,renderLabels(e,r.labels),projectsList.append(e)}}},showMoreClickHandler=()=>{projectsForRender.length>=6&&(showMoreButton.classList.contains("open")?(maxProjectsShown=6,showMoreButton.classList.remove("open"),showMoreButton.textContent="Показать еще",renderProjects(projectsForRender)):(maxProjectsShown=projectsForRender.length,showMoreButton.classList.add("open"),showMoreButton.textContent="Свернуть",renderProjects(projectsForRender)))},compareLabels=(e,t)=>e.labels.includes(t)||"all"===t,labelButtonsClickHandler=e=>{labelButtons.forEach((e=>{e.dataset.label=""})),e.target.dataset.label="active",e.target.blur();const t=e.target.dataset.filter;projectsForRender=[],PROJECTS.forEach((e=>{var r;r=t,(e.labels.includes(r)||"all"===r)&&projectsForRender.push(e)})),projectsForRender.length<=6?showMoreButton.disabled=!0:showMoreButton.disabled=!1,renderProjects(projectsForRender)},initProjectsSection=()=>{projectsList&&cardTemplate&&renderProjects(projectsForRender),showMoreButton&&showMoreButton.addEventListener("click",showMoreClickHandler),labelButtons&&labelButtons.length&&labelButtons.forEach((e=>{e.addEventListener("click",labelButtonsClickHandler)}))};export{initProjectsSection};