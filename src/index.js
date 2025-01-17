import "./styles.css";
import themeSongPath from "./sounds/cantina-band.mp3";
import shipSound1Path from "./sounds/ship-sound-1.mp3";
import shipSound2Path from "./sounds/ship-sound-2.mp3";
import blasterSoundsPath from "./sounds/blaster-sounds.mp3";
import starDestroyerLightPath from "./img/star-destroyer-light.png";
import starDestroyerDarkPath from "./img/star-destroyer-dark.png";
import anakinShuttlePath from "./img/anakin-shuttle.png";
import tieFighterPath from "./img/tie-fighter.png";
import xWingPath from "./img/x-wing.png";
import deathStarPath from "./img/death-star.png";

console.log("Testing...");
let userClicked = false;

const themeSong = new Audio(themeSongPath);
const blasterSounds = new Audio(blasterSoundsPath);
const click = document.getElementById("cantina-banner");
click.addEventListener("click", () => {
  themeSong.play();
  userClicked = true;
  displayShips();
  playBlasterSounds();
});

const starDestroyerLight = new Image();
const starDestroyerDark = new Image();
const tieFighter = new Image();
const anakinShuttle = new Image();
const xWing = new Image();
const shipSound1 = new Audio(shipSound1Path);
const shipSound2 = new Audio(shipSound2Path);

starDestroyerLight.src = starDestroyerLightPath;
starDestroyerDark.src = starDestroyerDarkPath;
tieFighter.src = tieFighterPath;
anakinShuttle.src = anakinShuttlePath;
xWing.src = xWingPath;

const grandParent = document.getElementById("content");
const backgroundImages = document.createElement("div");
backgroundImages.classList.add("background-images");
grandParent.appendChild(backgroundImages);
const parent = document.querySelector(".background-images");
parent.style.position = "absolute";
parent.style.top = "0";
parent.style.left = "0";
parent.style.width = "100%";
parent.style.height = "100%";
parent.style.zIndex = "-1";
const deathStarImg = document.createElement("img");
deathStarImg.id = "death-star";
deathStarImg.src = deathStarPath;
parent.appendChild(deathStarImg);
const deathStar = document.getElementById("death-star");
deathStar.style.position = "absolute";
deathStar.style.top = "1%";
deathStar.style.left = "75%";
deathStar.style.width = "15%";

async function displayShips() {
  while (userClicked) {
    parent.appendChild(starDestroyerLight);
    shipSound1.play();
    starDestroyerLight.style.width = "10%";
    starDestroyerLight.style.animation = "zoom 3s ease-in-out 1";
    await sleep(3000);
    parent.removeChild(starDestroyerLight);

    parent.appendChild(starDestroyerDark);
    shipSound2.play();
    starDestroyerDark.style.backgroundColor = "transparent";
    starDestroyerDark.style.animation = "zoom 3s ease-in-out 1";
    await sleep(3000);
    parent.removeChild(starDestroyerDark);

    parent.appendChild(tieFighter);
    shipSound1.play();
    tieFighter.style.backgroundColor = "transparent";
    tieFighter.style.animation = "zoom 3s ease-in-out 1";
    await sleep(3000);
    parent.removeChild(tieFighter);

    parent.appendChild(anakinShuttle);
    shipSound1.play();
    anakinShuttle.style.backgroundColor = "transparent";
    anakinShuttle.style.animation = "zoom 3s ease-in-out 1";
    await sleep(3000);
    parent.removeChild(anakinShuttle);

    parent.appendChild(xWing);
    shipSound2.play();
    xWing.style.backgroundColor = "transparent";
    xWing.style.animation = "zoom 3s ease-in-out 1";
    await sleep(3000);
    parent.removeChild(xWing);
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function playBlasterSounds() {
  const loopSound = () => {
    for (let i = 0; i < 4; i++) {
      blasterSounds.play();
      setTimeout(loopSound, blasterSounds.duration * 1000);
    }
  };
  loopSound();
}
