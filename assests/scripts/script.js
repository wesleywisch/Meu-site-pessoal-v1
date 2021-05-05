let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show);
    show = !show  // show serve para ter a segurança que nao haverá um bug.
});