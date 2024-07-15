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
console.log(slides);

const nbrElements = slides.length;
console.log(nbrElements);

// Ajout des Event Listeners sur les buttons
const buttons = document.querySelectorAll(".arrow");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    console.log(event.currentTarget);
  });
});

// Ajout des Bullet Points au slider
const dots = document.querySelector(".dots");
console.log(dots);

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);
  console.log(dot);
  if (i === 0) {
    dot.classList.add("dot_selected");
    console.log(dot);
  }
}

// Modification du slide au clic d'un bouton
