const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", toggleNavbar);

// Function to close mobile menu when a navigation link is clicked
const closeMobileMenu = () => {
  if (nav_header.classList.contains("active")) {
    nav_header.classList.remove("active");
  }
};

// Add event listeners to each navigation link inside the mobile menu
document.querySelectorAll(".navbar-list").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const headerHeight = document.querySelector("header").offsetHeight;
    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop - headerHeight,
      behavior: "smooth",
    });
  });
});

// Navigation btn

// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     const headerHeight = document.querySelector("header").offsetHeight;
//     const target = document.querySelector(this.getAttribute("href"));

//     window.scrollTo({
//       top: target.offsetTop - headerHeight,
//       behavior: "smooth",
//     });
//   });
// });

// resume  download btn

function downloadCV() {
  // Define the URL of your resume PDF
  var resumeURL = "./Ajay_Sharma_Resume.pdf";

  // Create a link element
  var link = document.createElement("a");

  // Set the href attribute of the link element to the URL of your resume PDF
  link.href = resumeURL;

  // Set the download attribute to specify the filename users will see when they download the file
  link.download = "Ajay_Sharma_Resume.pdf";

  // Simulate a click on the link element to trigger the download
  document.body.appendChild(link);
  link.click();

  // Clean up: remove the link element
  document.body.removeChild(link);
}
