const header = document.querySelector(".header");
console.log(header);

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function setActiveLink(clickedLink) {
  const navLinks = document.querySelectorAll(".nav_link");

  navLinks.forEach((link) => link.classList.remove("active"));

  clickedLink.classList.add("active");
}
