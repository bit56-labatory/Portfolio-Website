window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1800);
});

const typingTarget = document.getElementById("typing");

const words = [
    "Intelligent Systems",
    "AI Products",
    "Software Solutions",
    "Automation Platforms"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typingTarget.textContent =
            current.substring(0, charIndex++);

        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typingTarget.textContent =
            current.substring(0, charIndex--);

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 90);
}

typeEffect();

document.getElementById("year").textContent =
    new Date().getFullYear();

const spotlight =
document.querySelector(".spotlight");

document.addEventListener("mousemove", e => {

    spotlight.style.left = e.clientX + "px";
    spotlight.style.top = e.clientY + "px";

});

const hero =
document.querySelector(".hero");

document.addEventListener("mousemove", e => {

    const x =
    ((e.clientX / window.innerWidth) - 0.5) * 10;

    const y =
    ((e.clientY / window.innerHeight) - 0.5) * 10;

    hero.style.transform =
    `rotateY(${x}deg) rotateX(${-y}deg)`;

});

const terminalInput =
document.getElementById("terminal-input");

const terminalOutput =
document.getElementById("terminal-output");

const commands = {

help: `
Commands:

about
skills
projects
github
contact
`,

about: `
Mechanical Engineering graduate
with a Computer Science concentration.

Focused on AI systems and software engineering.
`,

skills: `
Python
JavaScript
SQL
REST APIs
Git
AI Development
`,

projects: `
Personal AI Assistant
Trading Intelligence
Portfolio Website
`,

github: `
github.com/bit56-labatory
`,

contact: `
mitchbandz172@gmail.com
`

};

terminalInput.addEventListener(
"keydown",
e => {

if(e.key === "Enter"){

const cmd =
terminalInput.value.toLowerCase();

terminalOutput.innerHTML +=

`<br><span style="color:#60a5fa;">></span> ${cmd}<br>`;

terminalOutput.innerHTML +=

`${commands[cmd] || "Unknown Command"}<br>`;

terminalInput.value = "";

terminalOutput.scrollTop =
terminalOutput.scrollHeight;

}

});

const cards =
document.querySelectorAll(".project-card");

cards.forEach(card => {

card.addEventListener(
"mousemove",
e => {

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateX =
-(y - rect.height / 2) / 20;

const rotateY =
(x - rect.width / 2) / 20;

card.style.transform =

`rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 translateY(-10px)`;

});

card.addEventListener(
"mouseleave",
() => {

card.style.transform = "";

});

});
