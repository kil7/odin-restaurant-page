import firstLoad from "renderings/firstLoad";
import reRender from "renderings/reRender";
import "./styles/main.scss";

/** Initial page load which renders heading and homepage */
firstLoad();

// rerender the page based on name picked up from menu dataset
const menuLinks = document.querySelectorAll(".menu-list__link");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link instanceof HTMLElement) {
      reRender(link.dataset.menuLink);
    }
  });
});
