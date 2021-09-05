const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

const colors = ["#e76f51", "#f4a261", "#e9c46a", "#2a9d8f", "#264653"];

const spans = document.querySelectorAll("span");

for (let i = 0; i < colors.length; i++) {
  spans[i].style.color = colors[i];
}
