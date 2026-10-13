// TYPEWRITER

const words = [
    "AI Systems",
    "Software Solutions",
    "Automation Tools",
    "Web Applications"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing =
document.getElementById("typing");

function type() {

    const current =
    words[wordIndex];

    if (!deleting) {

        typing.textContent =
        current.substring(
            0,
            charIndex++
        );

        if (
            charIndex >
            current.length
        ) {

            deleting = true;

            setTimeout(
                type,
                1200
            );

            return;
        }

    } else {

        typing.textContent =
        current.substring(
            0,
            charIndex--
        );

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
            (wordIndex + 1)
            %
            words.length;

        }

    }

    setTimeout(
        type,
        deleting ? 50 : 100
    );
}

type();

// FOOTER YEAR

document.getElementById("year")
.textContent =
new Date().getFullYear();

// SCROLL REVEAL

const observer =
new IntersectionObserver(
entries => {

entries.forEach(
entry => {

if (
entry.isIntersecting
) {

entry.target.classList.add(
"show"
);

}

});

});

document
.querySelectorAll(".hidden")
.forEach(
el => observer.observe(el)
);

// PARTICLES

const canvas =
document.getElementById(
"particles"
);

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const particles = [];

for(let i=0;i<100;i++){

particles.push({

x:
Math.random()
*
canvas.width,

y:
Math.random()
*
canvas.height,

dx:
(Math.random()-.5),

dy:
(Math.random()-.5),

size:
Math.random()*3+1

});

}

function animate(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

particles.forEach(p=>{

p.x += p.dx;
p.y += p.dy;

if(p.x<0)p.x=canvas.width;
if(p.x>canvas.width)p.x=0;

if(p.y<0)p.y=canvas.height;
if(p.y>canvas.height)p.y=0;

ctx.fillStyle =
"#60a5fa";

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.size,
0,
Math.PI*2
);

ctx.fill();

});

requestAnimationFrame(
animate
);

}

animate();
