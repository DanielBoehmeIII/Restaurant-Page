import cantinaImgPath from "../img/cantina.jpg";
export const grandParent = document.getElementById("content");

export function loadHome() {
  const banner = document.createElement("div");
  banner.id = "banner";

  const title = document.createElement("h6");
  title.textContent = "Mos Eisley Cantina";
  banner.appendChild(title);

  const cantinaImg = document.createElement("img");
  cantinaImg.id = "cantina-banner";
  cantinaImg.src = cantinaImgPath;
  cantinaImg.alt = "Cantina";
  banner.appendChild(cantinaImg);

  grandParent.appendChild(banner);
}
