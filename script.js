// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form submission handling
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Here you would typically send the data to a server
    console.log("Form submitted:", formObject);

    // Show success message
    alert("Thank you for your message! We will get back to you soon.");
    this.reset();
  });
}

// Navbar scroll effect
const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !navbar.classList.contains("scroll-down")) {
    // Scroll Down
    navbar.classList.remove("scroll-up");
    navbar.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    navbar.classList.contains("scroll-down")
  ) {
    // Scroll Up
    navbar.classList.remove("scroll-down");
    navbar.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

// Add animation to stats when they come into view
const stats = document.querySelectorAll(".stat-item");
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

stats.forEach((stat) => observer.observe(stat));
