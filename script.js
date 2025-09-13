// Welcome message
window.onload = function() {
  console.log("Welcome to Project Portfolio Website!");
};

// Smooth scroll effect for nav links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

