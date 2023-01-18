import homePage from "pages/homePage";
import menuPage from "pages/menuPage";
import aboutPage from "pages/aboutPage";

export const reRender = (dataset: string | undefined) => {
  // remove all content except for header
  document.querySelector(".content-container")?.remove();

  // render the appropriate page based on the dataset of the li element clicked
  if (dataset === "home") document.body.appendChild(homePage());
  else if (dataset === "menu") document.body.appendChild(menuPage());
  else if (dataset === "about") document.body.appendChild(aboutPage());

}

export default reRender;