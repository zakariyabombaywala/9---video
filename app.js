const video = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");
const loader = document.querySelector(".preloader");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

window.addEventListener("load", function () {
  loader.classList.add("hide-preloader");
});
