import shepHerdsPieImage from "../assets/food-shepherds-pie.jpg";
import steakPieImage from "../assets/food-steak-pie.jpg";
import bubbleSqueakImage from "../assets/food-bubble-squeek.jpg";
import minceTattiesImage from "../assets/food-mince-tatties.jpg";
import bangersMashImage from "../assets/food-bangers-mash.jpg";
import fishAndChipsImage from "../assets/food-fish-chips.jpg";

type Meal = {
  name: string;
  image: string;
};

const getMealObjects = () : Meal[] => [
    { name: "Mince and Tatties", image: minceTattiesImage },
    { name: "Bubble and Squeek", image: bubbleSqueakImage },
    { name: "Steak and Kidney Pie", image: steakPieImage },
    { name: "Fish and Chips", image: fishAndChipsImage },
    { name: "Bangers and Mash", image: bangersMashImage },
    { name: "Shepherd's Pie", image: shepHerdsPieImage },
  ];

export const menuPage = () => {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");

  const content = document.createElement("div");
  content.classList.add("content");
  contentContainer.appendChild(content);

  const introText = document.createElement("p");
  introText.innerHTML = `
    We have a veritable bounty of delectable english cuisine awaiting your tastebuds,
    with each dish being constructed by the finest minds in pub-grub and bigotry.
    Take a look and see if anything tickles your fancy!
  `;
  content.appendChild(introText);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  content.appendChild(menuContainer);

  getMealObjects().forEach((meal) => {
    const foodItemContainer = document.createElement("div");
    foodItemContainer.classList.add("food-item-container");
    const foodHeading = document.createElement("h2");
    foodHeading.classList.add("food-item-container__heading");
    foodHeading.innerHTML = meal.name;
    const foodImg = document.createElement("img");
    foodImg.src = meal.image;

    foodItemContainer.appendChild(foodHeading);
    foodItemContainer.appendChild(foodImg);

    menuContainer.appendChild(foodItemContainer);
  });

  return contentContainer;
};

export default menuPage;
