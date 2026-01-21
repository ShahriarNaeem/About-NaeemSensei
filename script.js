// =================== TO TOP BUTTON ===================
const goTopBtn = document.getElementById("goTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
};

goTopBtn.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// =================== DARK MODE TOGGLE ===================
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// =================== DROPDOWN MENUS ===================
const dropdowns = document.querySelectorAll(".dropdown-btn");
dropdowns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const container = btn.nextElementSibling;
    if(container.style.display === "block"){
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }
  });
});

// =================== SECTION REVEAL ON SCROLL ===================
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if(elementTop < windowHeight - 50){
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});
