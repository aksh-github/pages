function toggleMenu() {
  const body = document.body;
  body.classList.toggle("menu-open");
}

function handler() {
  document
    .getElementById("btn-menu-toggle")
    ?.addEventListener("click", toggleMenu);
  document
    .getElementById("body-overlay")
    ?.addEventListener("click", toggleMenu);
}

document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    handler();
  }
});
