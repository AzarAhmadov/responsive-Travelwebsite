const header = document.querySelector("#header");
const openBtn = document.querySelector(".open-btn");
const navBar = document.querySelector("#navbar");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("scroll", backscrool);

function backscrool(e) {
  const windowValue = window.scrollY;
  if (windowValue < 100) {
    header.classList.remove("header-back");
  } else {
    header.classList.add("header-back");
    navBar.classList.add("z-index");
  }
}

openBtn.addEventListener("click", function (e) {
  navBar.classList.add("active");
});

closeBtn.addEventListener("click", function (e) {
  navBar.classList.remove("active");
});

const videoBtn = document.querySelector("#video-button");
const video = document.querySelector("video");
const videoIcon = document.querySelector("#video-icon");

videoBtn.addEventListener("click", playPause);

function playPause() {
  if (video.paused) {
    video.play();
    videoIcon.classList.add("fa-pause");
    videoIcon.classList.remove("fa-play");
  } else {
    video.pause();
    videoIcon.classList.remove("fa-pause");
    videoIcon.classList.add("fa-play");
  }
}

video.addEventListener("ended", stopVideo);

function stopVideo() {
  videoIcon.classList.add("fa-play");
  videoIcon.classList.remover("fa-pause   ");
}

const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  navBar.classList.remove("active");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

const moon = document.querySelector(".bx-moon");
const bodye = document.querySelector("body");

function bodyBlack() {
  bodye.classList.toggle("body-black");
}
moon.addEventListener("click", bodyBlack);
