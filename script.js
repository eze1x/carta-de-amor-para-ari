const envelope = document.getElementById("envelope");
const textElement = document.getElementById("letter-text");

const originalHTML = textElement.innerHTML;
textElement.innerHTML = "";

let isOpen = false;
let typingStarted = false;

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
  isOpen = !isOpen;

  if (isOpen && !typingStarted) {
    typeText();
    typingStarted = true;
  }
});

// Efecto escribir letra por letra
function typeText() {
  let i = 0;
  const speed = 30; // menor = más rápido

  function typing() {
    if (i < originalHTML.length) {
      textElement.innerHTML += originalHTML.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

// Corazones flotando (lo que ya tenías)
const heartsContainer = document.querySelector(".hearts");

for (let i = 0; i < 25; i++) {
  const heart = document.createElement("span");
  heart.innerHTML = "💜";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDelay = Math.random() * 10 + "s";
  heart.style.fontSize = 14 + Math.random() * 20 + "px";
  heartsContainer.appendChild(heart);
}
