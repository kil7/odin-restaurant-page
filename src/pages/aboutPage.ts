// Eslint did not enjoy this and I gave up.

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: process.env.MAPS_API_KEY || "",
  version: "weekly",
  libraries: ["places"],
});

const displayMap = () => {
  const mapOptions: google.maps.MapOptions = {
    center: {
      lat: 51.4222,
      lng: 0.0758,
    },
    zoom: 11,
  };
  const mapElement = document.querySelector("#map");

  const map = new google.maps.Map(mapElement as HTMLElement, mapOptions);

  return map;
};

const addMarkers = (map: google.maps.Map) => {
  const location = { lat: 51.4222, lng: 0.0758}
  const markerOptions: google.maps.MarkerOptions = {
    map,
    position: location
  }
  const marker = new google.maps.Marker(markerOptions);

  return marker;
}

export const aboutPage = () => {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");

  const content = document.createElement("div");
  content.classList.add("content");
  contentContainer.appendChild(content);

  const heading = document.createElement("h1");
  heading.classList.add("content__heading");
  heading.textContent = "About us!";
  content.appendChild(heading);
  content.appendChild(document.createElement("hr"));

  const aboutConentContainer = document.createElement("div");
  aboutConentContainer.classList.add("about-content-container");
  content.appendChild(aboutConentContainer);

  const aboutText = document.createElement("p");
  aboutText.textContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim eros, egestas eu commodo non,
   egestas ac libero. Maecenas viverra eros odio, eu luctus velit feugiat vel. Duis pellentesque 
   justo sed pulvinar bibendum. Nam ut cursus quam, sed cursus quam. Ut convallis pharetra lorem 
   sed sagittis. Integer id efficitur elit. Praesent sed justo velit. Morbi vestibulum sit amet nunc 
   quis convallis. Morbi nec nisi nibh. Aenean urna mauris, maximus non neque in, venenatis sagittis est.
    Etiam finibus eleifend orci, id lobortis odio pellentesque eget.
  `
  aboutConentContainer.appendChild(aboutText);

  const mapDiv = document.createElement("div");
  mapDiv.setAttribute("id", "map");
  aboutConentContainer.appendChild(mapDiv);

  loader
    .load()
    .then(() => {
      const map = displayMap();
      addMarkers(map)
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(e);
    });

  return contentContainer;
};

export default aboutPage;
