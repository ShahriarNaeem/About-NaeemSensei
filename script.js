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
const btn = document.getElementById("goTopBtn");

window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 400 ? "block" : "none";
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const topQuote = document.querySelector(".top-quote");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    topQuote.classList.add("show");
  } else {
    topQuote.classList.remove("show");
  }
});

