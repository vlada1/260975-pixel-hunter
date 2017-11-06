export const createDomElement = (templateContent) => {
  const container = document.createElement(`div`);
  container.innerHTML = templateContent;
  return container;
};

export const renderPage = (element) => {
  const mainElement = document.querySelector(`main`);
  mainElement.innerHTML = ``;
  return mainElement.appendChild(element);
};
