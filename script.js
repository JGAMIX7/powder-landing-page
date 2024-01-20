const menu = document.getElementById("menu");
const toggle = document.getElementById("toggle");
const close = document.getElementById("close");


if (toggle) {
  toggle.addEventListener("click", () => {
    menu.classList.add("active");
    toggle.style.display = "none";
  });
}

if (close) {
  close.addEventListener("click", () => {
    menu.classList.remove("active");
    toggle.style.display = "block";
  });
}