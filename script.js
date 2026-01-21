// ------------------------------
// Smooth Scroll & Back to Top
// ------------------------------
const goTopBtn = document.getElementById("goTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
};

goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ------------------------------
// Accordion for Research Statement
// ------------------------------
const accordions = document.querySelectorAll(".accordion");
accordions.forEach(acc => {
  acc.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if(panel.style.display === "block"){
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

// ------------------------------
// Dark Mode Toggle
// ------------------------------
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
