import gammonChefImage from "../assets/english-cook.png";

const homePage = () => {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");

  const content = document.createElement("div");
  content.classList.add("content");
  contentContainer.appendChild(content);

  const heading = document.createElement("h1");
  heading.classList.add("content__heading");
  heading.textContent = "Just Proper Good Grub.";
  content.appendChild(heading);
  content.appendChild(document.createElement("hr"));

  const homePageContentContainer = document.createElement("div");
  homePageContentContainer.classList.add("homepage-content-container");
  content.appendChild(homePageContentContainer);
  const homePageImageElement = document.createElement("img");
  homePageImageElement.src = gammonChefImage;
  homePageContentContainer.appendChild(homePageImageElement);

  const homePageTextContainer = document.createElement("div");
  homePageTextContainer.classList.add("homepage-text-container");
  homePageContentContainer.appendChild(homePageTextContainer);
  const homePageContentText = document.createElement("p");
  homePageContentText.textContent = `
    Nothing like some classic british cuisine to stir up a fire in your soul. Despite a global
    imperialist conquest that pillaged other nation's resources in our history: we've made sure to
    keep our food free of any seasoning or flavour. None of that foreign rubbish here!
  `;
  homePageTextContainer.appendChild(homePageContentText);
  const callToAction = document.createElement("p");
  callToAction.textContent = "Get it fookin down ya.";
  callToAction.classList.add("homepage-text-container__cta");
  homePageTextContainer.appendChild(callToAction);

  return contentContainer;
};

export default homePage;
