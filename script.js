// Accordion
document.querySelectorAll(".accordion").forEach(btn => {
  btn.onclick = () => {
    btn.nextElementSibling.style.display =
      btn.nextElementSibling.style.display === "block" ? "none" : "block";
  };
});

// Dark Mode
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

reveals.forEach(r => observer.observe(r));
