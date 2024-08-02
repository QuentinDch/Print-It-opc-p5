const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Ajout des Bullet Points au slider
const dotsContainer = document.querySelector(".dots");

function displayDots(container) {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) {
      dot.classList.add("dot_selected");
    }
    container.appendChild(dot);
  }
}
displayDots(dotsContainer);

// Ajout des Event Listeners sur les buttons
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");

prevButton.addEventListener("click", () => {});

nextButton.addEventListener("click", () => {});
