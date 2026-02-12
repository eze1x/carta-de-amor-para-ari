const envelope = document.getElementById("envelope");
const textElement = document.getElementById("letter-text");

// Guardamos el texto original
const originalHTML = textElement.innerHTML;

// OCULTAMOS el texto al cargar la página
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

// Función de escritura (compatible con <br>)
function typeText() {
  let i = 0;
  const speed = 30;

  function typing() {
    if (i < originalHTML.length) {
      textElement.innerHTML = originalHTML.slice(0, i + 1);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

// Corazones flotando
const heartsContainer = document.querySelector(".hearts");

for (let i = 0; i < 25; i++) {
  const heart = document.createElement("span");
  heart.innerHTML = "💜";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDelay = Math.random() * 10 + "s";
  heart.style.fontSize = 14 + Math.random() * 20 + "px";
  heartsContainer.appendChild(heart);
}
