import headerFlagImage from "../assets/flag-innit.png";

const createHeader = () => {
  const header = document.createElement("div");
  header.className = "header";

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
  header.appendChild(brandContainer);

  const headerLinks = ["Home", "Menu", "About"];
  const headerUL = document.createElement("ul");
  headerUL.classList.add("menu-list");
  headerLinks.forEach((link) => {
    const linkElement = document.createElement("li");
    linkElement.innerHTML = link;
    headerUL.appendChild(linkElement);
  });
  header.appendChild(headerUL);

  return header;
};

export default createHeader;
