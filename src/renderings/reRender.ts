import homePage from "pages/homePage";
import menuPage from "pages/menuPage";

export const reRender = (dataset) => {
  // remove all content except for header
  document.querySelector(".content-container")?.remove();

  // render the appropriate page based on the dataset of the li element clicked
  if (dataset === "home") document.body.appendChild(homePage());
  else if (dataset === "menu") document.body.appendChild(menuPage());

}

export default reRender;