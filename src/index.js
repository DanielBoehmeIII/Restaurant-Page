import "./styles.css";
import { loadHome } from "./tabs/home.js";
import { grandParent } from "./tabs/home.js";
import { loadAbout } from "./tabs/about.js";
import { loadMenu } from "./tabs/menu.js";
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

loadHome();
let homeClicked = true;
let menuClicked = false;
let aboutClicked = false;
let soundClicked = false;

let infoDivElement = null;
let bannerElement = null;
let menuElement = null;

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => {
  infoDivElement = document.getElementById("info-div");
  bannerElement = document.getElementById("banner");
  menuElement = document.getElementById("menu");

  if (menuClicked === true) {
    clearContent(menuElement);
    loadHome();
  } else if (aboutClicked === true) {
    clearContent(infoDivElement);
    loadHome();
  } else if (homeClicked === false) {
    loadHome();
  }
  aboutClicked = false;
  menuClicked = false;
  homeClicked = true;
});

const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", () => {
  infoDivElement = document.getElementById("info-div");
  bannerElement = document.getElementById("banner");
  menuElement = document.getElementById("menu");

  if (homeClicked === true) {
    clearContent(bannerElement);
    loadMenu();
  } else if (aboutClicked === true) {
    clearContent(infoDivElement);
    loadMenu();
  } else if (menuClicked === false) {
    loadMenu();
  }
  homeClicked = false;
  aboutClicked = false;
  menuClicked = true;
});

const aboutButton = document.getElementById("about-button");
aboutButton.addEventListener("click", () => {
  infoDivElement = document.getElementById("info-div");
  bannerElement = document.getElementById("banner");
  menuElement = document.getElementById("menu");

  if (homeClicked === true) {
    clearContent(bannerElement);
    loadAbout();
  } else if (menuClicked === true) {
    clearContent(menuElement);
    loadAbout();
  } else if (aboutClicked === false) {
    loadAbout();
  }
  homeClicked = false;
  menuClicked = false;
  aboutClicked = true;
});

const themeSong = new Audio(themeSongPath);
const blasterSounds = new Audio(blasterSoundsPath);
const soundButton = document.getElementById("sound-button");
soundButton.addEventListener("click", () => {
  soundClicked = !soundClicked;
  if (soundClicked) {
    themeSong.play();
    displayShips();
    playBlasterSounds();
    soundButton.textContent = "Stop the band?";
  } else {
    themeSong.pause();
    themeSong.currentTime = 0;
    blasterSounds.pause();
    blasterSounds.currentTime = 0;
    soundButton.textContent = "Start the band?";
  }
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
  while (soundClicked) {
    parent.appendChild(starDestroyerLight);
    shipSound1.play();
    starDestroyerLight.style.width = "20%";
    starDestroyerLight.style.animation = "zoom-in-right 3s ease-in-out 1";
    await sleep(3000);
    parent.removeChild(starDestroyerLight);
    if (!soundClicked) break;

    parent.appendChild(starDestroyerDark);
    shipSound2.play();
    starDestroyerDark.style.backgroundColor = "transparent";
    starDestroyerDark.style.animation = "zoom-in-left 3s ease-in-out 1";
    await sleep(3000);
    parent.removeChild(starDestroyerDark);
    if (!soundClicked) break;

    parent.appendChild(tieFighter);
    shipSound1.play();
    tieFighter.style.backgroundColor = "transparent";
    tieFighter.style.animation = "zoom-across 3s ease-in-out 1";
    await sleep(3000);
    parent.removeChild(tieFighter);
    if (!soundClicked) break;

    parent.appendChild(anakinShuttle);
    shipSound1.play();
    anakinShuttle.style.backgroundColor = "transparent";
    anakinShuttle.style.animation = "zoom-through 3s ease-in-out 1";
    await sleep(3000);
    parent.removeChild(anakinShuttle);
    if (!soundClicked) break;

    parent.appendChild(xWing);
    shipSound2.play();
    xWing.style.backgroundColor = "transparent";
    xWing.style.animation = "zoom-in-right 3s ease-in-out 1";
    await sleep(3000);
    parent.removeChild(xWing);
    if (!soundClicked || themeSong.currentTime === themeSong.duration) break;
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function playBlasterSounds() {
  const loopSound = () => {
    for (let i = 0; i < 4; i++) {
      if (!soundClicked || themeSong.currentTime === themeSong.duration) break;
      blasterSounds.play();
      setTimeout(loopSound, blasterSounds.duration * 1000);
    }
  };
  loopSound();
}

function clearContent(parentDiv) {
  parentDiv.innerHTML = "";
  grandParent.removeChild(parentDiv);
}
