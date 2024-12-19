const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeToggle.innerHTML = body.classList.contains("dark-mode")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});
document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const heroImage = document.querySelector(".hero-image");

  // Adjust the multiplier to control the speed of the parallax effect
  heroImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});
document.addEventListener("scroll", () => {
  const parallaxSections = document.querySelectorAll(".parallax-portfolio");

  parallaxSections.forEach((section) => {
    const speed = section.getAttribute("data-speed");
    const yOffset = window.scrollY * speed;
    section.style.backgroundPositionY = `calc(50% + ${yOffset}px)`;
  });
});
