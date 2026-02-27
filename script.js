// Hamburger
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
  header.classList.toggle("menu-open");
});

// FAQ accordion
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    item.classList.toggle("active");
  });
});

// Stagger reveal
const cards = document.querySelectorAll(".service-card");
window.addEventListener("load", () => {
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add("reveal-in");
    }, i * 120);
  });
});