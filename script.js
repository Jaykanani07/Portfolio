<<<<<<< HEAD
/* Typing effect */
const roles = [
  "Frontend Developer",
  "UI / UX Enthusiast",
  "React & Next.js Developer"
];

let i = 0, j = 0, del = false;
const typing = document.getElementById("typing");

function type() {
  typing.textContent = roles[i].slice(0, del ? j-- : j++);
  if (!del && j === roles[i].length) {
    del = true;
    setTimeout(type, 1200);
    return;
  }
  if (del && j === 0) {
    del = false;
    i = (i + 1) % roles.length;
  }
  setTimeout(type, del ? 60 : 100);
}
type();

/* Scroll reveal */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    if (r.getBoundingClientRect().top < window.innerHeight - 100) {
      r.classList.add("active");
    }
  });
});

/* Theme toggle */
const toggle = document.getElementById("themeToggle");
function updateIcon() {
  toggle.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
}
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
  updateIcon();
};
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
updateIcon();

/* Mobile menu */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.onclick = () => navMenu.classList.toggle("active");
document.querySelectorAll("#navMenu a").forEach(link =>
  link.onclick = () => navMenu.classList.remove("active")
);
=======
/* Typing effect */
const roles = [
  "Frontend Developer",
  "UI / UX Enthusiast",
  "React & Next.js Developer"
];

let i = 0, j = 0, del = false;
const typing = document.getElementById("typing");

function type() {
  typing.textContent = roles[i].slice(0, del ? j-- : j++);
  if (!del && j === roles[i].length) {
    del = true;
    setTimeout(type, 1200);
    return;
  }
  if (del && j === 0) {
    del = false;
    i = (i + 1) % roles.length;
  }
  setTimeout(type, del ? 60 : 100);
}
type();

/* Scroll reveal */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    if (r.getBoundingClientRect().top < window.innerHeight - 100) {
      r.classList.add("active");
    }
  });
});

/* Theme toggle */
const toggle = document.getElementById("themeToggle");
function updateIcon() {
  toggle.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
}
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
  updateIcon();
};
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
updateIcon();

/* Mobile menu */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.onclick = () => navMenu.classList.toggle("active");
document.querySelectorAll("#navMenu a").forEach(link =>
  link.onclick = () => navMenu.classList.remove("active")
);
>>>>>>> a1ca7f7c61deb8971e07ded44acf075827082bf3
