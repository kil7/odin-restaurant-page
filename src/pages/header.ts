import headerFlagImage from "../assets/flag-innit.png";

export const createHeader = () => {
  const header = document.createElement("div");
  header.classList.add("header");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  const brandContainer = document.createElement("div");
  brandContainer.classList.add("brand-container");
  const headerLogo = document.createElement("img");
  headerLogo.classList.add("brand-container__brand-img");
  headerLogo.src = headerFlagImage;
  brandContainer.appendChild(headerLogo);

  const brandingTitle = document.createElement("h1");
  brandingTitle.innerHTML = "Lovely Jubbly Innit";
  brandingTitle.classList.add("brand-container__brand-title");
  brandContainer.appendChild(brandingTitle);

  const headerLinks = ["home", "menu", "about"];
  const headerUL = document.createElement("ul");
  headerUL.classList.add("menu-list");
  headerLinks.forEach((link) => {
    const linkElement = document.createElement("li");
    linkElement.classList.add("menu-list__link");
    linkElement.setAttribute("id", `${link}-link`);
    linkElement.innerHTML = link.toUpperCase();
    headerUL.appendChild(linkElement);
  });

  header.appendChild(headerContainer);
  headerContainer.appendChild(brandContainer);
  headerContainer.appendChild(headerUL);

  return header;
};

export default createHeader;
