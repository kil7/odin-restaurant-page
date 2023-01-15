import firstLoad from "renderings/firstLoad";
import reRender from "renderings/reRender";
import "./styles/main.scss";

firstLoad();

const homeLink = document.getElementById("home-link");
homeLink?.addEventListener("click", () => {
  reRender();
})

document.getElementById("menu-link");
document.getElementById("about-link");