/* =====================================
MOBILE MENU
===================================== */

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav a");

if (menuToggle && mobileNav) menuToggle.addEventListener("click", () => {

mobileNav.classList.toggle("active");

const isOpen = mobileNav.classList.contains("active");

menuToggle.setAttribute(
"aria-expanded",
isOpen
);

});

mobileLinks.forEach((link) => {

link.addEventListener("click", () => {


mobileNav.classList.remove("active");

menuToggle.setAttribute(
  "aria-expanded",
  "false"
);


});

});

/* =====================================
HEADER SCROLL EFFECT
===================================== */

const header = document.querySelector(".header");

if (header) window.addEventListener("scroll", () => {

if (window.scrollY > 50) {


header.classList.add("scrolled");


} else {


header.classList.remove("scrolled");


}

});

/* =====================================
SCROLL REVEAL ANIMATION
===================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

(entries) => {


entries.forEach((entry) => {

  if (entry.isIntersecting) {

    entry.target.classList.add("active");

    revealObserver.unobserve(entry.target);

  }

});


},

{
threshold: 0.15
}

);

revealElements.forEach((element) => {

revealObserver.observe(element);

});

/* =====================================
NEWSLETTER FORM
===================================== */

const newsletterForm =
document.querySelector(".newsletter-form");

const formMessage =
document.querySelector(".form-message");

if (newsletterForm && formMessage) newsletterForm.addEventListener("submit", (event) => {

event.preventDefault();

const email =
newsletterForm.querySelector("input").value;

if (!email) {


formMessage.textContent =
  "Please enter your email address.";

return;


}

formMessage.textContent =
"Thank you! Your subscription was successful.";

newsletterForm.reset();

});

/* =====================================
FOOTER YEAR
===================================== */

const yearElement =
document.getElementById("year");

if (yearElement) yearElement.textContent =
new Date().getFullYear();

/* =====================================
SMOOTH ACTIVE NAVIGATION
===================================== */

const sections =
document.querySelectorAll("section[id]");

const navLinks =
document.querySelectorAll(".desktop-nav a");

if (sections.length && navLinks.length) window.addEventListener("scroll", () => {

let currentSection = "";

sections.forEach((section) => {


const sectionTop =
  section.offsetTop - 200;

const sectionHeight =
  section.offsetHeight;


if (
  window.scrollY >= sectionTop &&
  window.scrollY <
  sectionTop + sectionHeight
) {

  currentSection =
    section.getAttribute("id");

}


});

navLinks.forEach((link) => {


link.style.opacity = "1";


if (
  link.getAttribute("href") ===
  `#${currentSection}`
) {

  link.style.opacity = "0.5";

}


});

});
