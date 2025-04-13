let slideIndex = -1;
let slides;

window.onload = () => {
  slides = document.querySelectorAll(".slide");
};

function showSlides() {
  slides.forEach(slide => (slide.style.opacity = 0));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.opacity = 1;
  setTimeout(showSlides, 4000);
}

function startSurprise() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("slideshow").style.display = "block";
  document.getElementById("music-btn").style.display = "block";
  document.getElementById("back-btn").style.display = "block";

  document.body.classList.add("aesthetic-bg");

  let music = document.getElementById("bg-music");
  music.play();

  showSlides();
  setInterval(createFallingItems, 3000); // Start floating hearts
}

function toggleMusic() {
  let music = document.getElementById("bg-music");
  let btn = document.getElementById("music-btn");
  if (music.paused) {
    music.play();
    btn.innerText = "⏸️";
  } else {
    music.pause();
    btn.innerText = "▶️";
  }
}

function goBackToIntro() {
  document.getElementById("intro").style.display = "flex";
  document.getElementById("slideshow").style.display = "none";
  document.getElementById("music-btn").style.display = "none";
  document.getElementById("back-btn").style.display = "none";

  let music = document.getElementById("bg-music");
  music.pause();
  music.currentTime = 0;

  document.body.classList.remove("aesthetic-bg");
  slideIndex = -1;
}

// Floating flower/heart generator
function createFallingItems() {
  for (let i = 0; i < 10; i++) {
    const item = document.createElement("div");
    item.classList.add("falling");
    item.style.left = Math.random() * window.innerWidth + "px";
    item.style.animationDuration = (5 + Math.random() * 5) + "s";
    item.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(item);
    setTimeout(() => item.remove(), 12000);
  }
}
