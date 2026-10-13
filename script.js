const words = [
    "AI Systems",
    "Software Applications",
    "Automation Tools",
    "Data Solutions",
    "Ideas Into Reality"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText =
document.getElementById("typing");

function typeEffect() {

    const currentWord =
    words[wordIndex];

    if (!deleting) {

        typingText.textContent =
        currentWord.slice(0, charIndex++);

        if (charIndex >
            currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
        currentWord.slice(0, charIndex--);

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
            (wordIndex + 1)
            % words.length;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();

const year =
document.getElementById("year");

if (year) {
    year.textContent =
    new Date().getFullYear();
}

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".hidden")
.forEach(el => observer.observe(el));

const canvas =
document.getElementById("particles");

if (canvas) {

    const ctx =
    canvas.getContext("2d");

    function resize() {

        canvas.width =
        window.innerWidth;

        canvas.height =
        window.innerHeight;
    }

    resize();

    const particles = [];

    for (let i = 0; i < 80; i++) {

        particles.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: (Math.random() - 0.5),
            dy: (Math.random() - 0.5),
            size: Math.random() * 3 + 1

        });
    }

    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach(p => {

            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;

            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.fillStyle =
            "rgba(96,165,250,.8)";

            ctx.beginPath();

            ctx.arc(
                p.x,
                p.y,
                p.size,
                0,
                Math.PI * 2
            );

            ctx.fill();
        });

        requestAnimationFrame(
            animate
        );
    }

    animate();

    window.addEventListener(
        "resize",
        resize
    );
}
