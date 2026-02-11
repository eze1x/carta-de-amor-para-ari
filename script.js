const envelope = document.getElementById("envelope");

// Abrir / cerrar carta
envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
});

// Corazones flotando
const heartsContainer = document.querySelector(".hearts");

for (let i = 0; i < 25; i++) {
  const heart = document.createElement("span");
  heart.innerHTML = "💜";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDelay = Math.random() * 8 + "s";
  heart.style.fontSize = 14 + Math.random() * 20 + "px";
  heartsContainer.appendChild(heart);
}
