const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Ajout des Bullet Points au slider
const dotsContainer = document.querySelector(".dots");

function displayDots() {
  for (let i = 0; i < slides.length; i++) {
    const dotElement = document.createElement("div");
    dotElement.classList.add("dot");
    if (i === 0) {
      dotElement.classList.add("dot_selected");
    }
    dotsContainer.appendChild(dotElement);
  }
}
displayDots();

// Ajout des Event Listeners sur les buttons
const nextButton = document.getElementById("next-slide");
const prevButton = document.getElementById("prev-slide");
const imgElement = document.querySelector(".banner-img");
const tagLineElement = document.querySelector("#banner p");
let currentSlideIndex = 0;

nextButton.addEventListener("click", () => {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  imgElement.src = slides[currentSlideIndex].image;
  tagLineElement.innerHTML = slides[currentSlideIndex].tagLine;
  console.log(currentSlideIndex);
});

prevButton.addEventListener("click", () => {
  console.log(prevButton);
});
