// script.js
const text = "Hai, Techies! Welcome to My Verse";
const typedText = document.querySelector(".headline");
let index = 0;

function type() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

window.onload = type;
