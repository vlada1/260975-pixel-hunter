export const createDomElement = (templateContent) => {
  let container = document.createElement(`div`);
  container.innerHTML = templateContent;
  return container;
};

export const renderPage = (element) => {
  let mainElement = document.getElementById(`main`);
  mainElement.innerHTML = ``;
  return mainElement.appendChild(element);
};
