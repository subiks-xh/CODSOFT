document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle
  document.querySelector(".theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Typing Animation
  const text = "Aspiring Developer & Innovator";
  let index = 0;
  function typeEffect() {
    if (index < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();
});
document.addEventListener("DOMContentLoaded", function () {
  let progressBars = document.querySelectorAll(".progress");

  function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight - 100; // Trigger when 100px inside the viewport
  }

  function animateProgress() {
    progressBars.forEach((bar) => {
      if (isInViewport(bar) && !bar.classList.contains("animated")) {
        let width = bar.getAttribute("data-width"); // Get the target width
        bar.style.width = width; // Apply animation
        bar.classList.add("animated"); // Ensure it only runs once
      }
    });
  }

  window.addEventListener("scroll", animateProgress);
  animateProgress(); // Run once in case the section is already visible
});
