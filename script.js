// =============================
// SCROLL REVEAL
// =============================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

document.querySelectorAll(".hidden").forEach((el) => {
  observer.observe(el);
});

// =============================
// TYPEWRITER EFFECT
// =============================

const words = [
  "AI Systems",
  "Software Solutions",
  "Automation Tools",
  "Web Applications",
  "Data Analytics Platforms"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typingElement = document.getElementById("typing");

function type() {

  currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }

  } else {

    typingElement.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex =
        (wordIndex + 1) % words.length;
    }

  }

  setTimeout(type, isDeleting ? 50 : 100);
}

if (typingElement) {
  type();
}

// =============================
// ACTIVE NAVBAR LINKS
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {
      link.classList.add("active");
    }

  });

});

// =============================
// COUNTER ANIMATION
// =============================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

  function updateCounter() {

    const target =
    +counter.getAttribute("data-target");

    const current =
    +counter.innerText;

    const increment = target / 80;

    if (current < target) {

      counter.innerText =
      Math.ceil(current + increment);

      setTimeout(updateCounter, 30);

    } else {

      counter.innerText = target;

    }

  }

  updateCounter();

});

// =============================
// DYNAMIC YEAR
// =============================

const yearElement =
document.getElementById("year");

if (yearElement) {
  yearElement.textContent =
  new Date().getFullYear();
}

// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(
      this.getAttribute("href")
    ).scrollIntoView({

      behavior: "smooth"

    });

  });

});

// =============================
// MOUSE SPOTLIGHT EFFECT
// =============================

const spotlight =
document.createElement("div");

spotlight.style.position = "fixed";
spotlight.style.width = "350px";
spotlight.style.height = "350px";
spotlight.style.borderRadius = "50%";
spotlight.style.pointerEvents = "none";
spotlight.style.background =
"radial-gradient(circle, rgba(37,99,235,.18), transparent 70%)";
spotlight.style.zIndex = "-1";

document.body.appendChild(spotlight);

document.addEventListener("mousemove", (e) => {

  spotlight.style.left =
  `${e.clientX - 175}px`;

  spotlight.style.top =
  `${e.clientY - 175}px`;

});

// =============================
// RANDOM GREETING
// =============================

const greetings = [
  "Welcome 👋",
  "Hello There 🚀",
  "Let's Build Something Amazing",
  "Future Software Engineer",
  "AI Developer In Progress"
];

const greeting =
document.getElementById("greeting");

if (greeting) {

  greeting.textContent =
  greetings[
    Math.floor(
      Math.random() * greetings.length
    )
  ];

}

// =============================
// PROJECT CARD HOVER TILT
// =============================

const cards =
document.querySelectorAll(".project-card");

cards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    const centerX =
    rect.width / 2;

    const centerY =
    rect.height / 2;

    const rotateX =
    -(y - centerY) / 18;

    const rotateY =
    (x - centerX) / 18;

    card.style.transform =
    `perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.05)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
    "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

  });

});
