// ✅ 1. Highlight active link in navbar
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// ✅ 2. Show alert when form is submitted
const contactForm = document.querySelector("form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual submission
    alert("Thank you! Your message has been submitted.");
    contactForm.reset(); // Optional: clear form fields
  });
}

// ✅ 3. Optional: Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");

if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}
