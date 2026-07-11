const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");
const moreBtn = document.getElementById("moreBtn");
const moreMenu = document.getElementById("moreMenu");
const pageSections = document.querySelectorAll(".page-section");
const allLinks = document.querySelectorAll("[data-page]");

function showSection(pageId) {
  pageSections.forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

allLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const pageId = this.getAttribute("data-page");
    showSection(pageId);
    navLinks.classList.remove("show");
    moreMenu.classList.remove("show");
  });
});

hamburgerBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  navLinks.classList.toggle("show");
  moreMenu.classList.remove("show");
});

moreBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  moreMenu.classList.toggle("show");
  navLinks.classList.remove("show");
});

document.addEventListener("click", function () {
  navLinks.classList.remove("show");
  moreMenu.classList.remove("show");
});

navLinks.addEventListener("click", function (e) {
  e.stopPropagation();
});

moreMenu.addEventListener("click", function (e) {
  e.stopPropagation();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    navLinks.classList.remove("show");
    moreMenu.classList.remove("show");
  }
});