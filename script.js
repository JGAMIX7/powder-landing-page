const menu = document.getElementById("menu");
const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const header = document.getElementById("header");


if (toggle) {
  toggle.addEventListener("click", () => {
    menu.classList.add("active");
    toggle.style.display = "none";
    menu.style.backgroundColor = "var(--black)";
    header.style.backgroundColor = "var(--black)";
  });
}

if (close) {
  close.addEventListener("click", () => {
    menu.classList.remove("active");
    toggle.style.display = "block";
    menu.style.backgroundColor = "var(--almost-black)";
    header.style.backgroundColor = "var(--almost-black)";
  });
}