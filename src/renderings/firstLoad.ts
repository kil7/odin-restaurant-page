import createHeader from "pages/header";
import homePage from "pages/homePage";

export const firstLoad = () => {
  document.body.appendChild(createHeader());
  document.body.appendChild(homePage());
}

export default firstLoad;