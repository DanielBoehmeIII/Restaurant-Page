import { grandParent } from "./home.js";

export function loadAbout() {
  const infoDiv = document.createElement("div");
  infoDiv.id = "info-div";

  const title = document.createElement("h6");
  title.textContent = "Home of the Huts!";
  infoDiv.appendChild(title);

  const description = document.createElement("p");
  description.textContent =
    "Mos Eisley made its first appearance in the original 1977 film, Star Wars. It is depicted as a busy, bustling port city situated in a desert plain, populated with transients of all species. The lawless spaceport attracts criminals, smugglers and fugitives. Spacecraft land at docking bays dotted across the city.";
  infoDiv.appendChild(description);
  grandParent.appendChild(infoDiv);
}
