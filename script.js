/* ===============================
   MOBILE NAVBAR TOGGLE
================================ */

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const navbarMenu = navbar.querySelector("ul");

hamburger.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});


/* ===============================
   CLOSE MENU ON LINK CLICK (MOBILE UX)
================================ */

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbarMenu.classList.remove("active");
    });
});




/* ===============================
   NAVBAR SCROLL EFFECT
================================ */

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* ===============================
   SCROLL REVEAL ANIMATION
================================ */

const elements = document.querySelectorAll("[data-animate]");

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
        if (el.getBoundingClientRect().top < trigger) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
function openWhatsAppFreeTrial(name = "", phone = "", goal = "") {
    const gymNumber = "919326065474"; // Replace with gym owner's WhatsApp number

    let message = `Hi, I’m interested in a FREE TRIAL at Gym Pro Fitness Club, Govandi.`;

    if (name) message += `\nName: ${name}`;
    if (phone) message += `\nPhone: ${phone}`;
    if (goal) message += `\nGoal: ${goal}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${gymNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
}
function submitFreeTrial(event) {
    event.preventDefault();

    const name = document.getElementById("trialName").value;
    const phone = document.getElementById("trialPhone").value;
    const goal = document.getElementById("trialGoal").value;

    openWhatsAppFreeTrial(name, phone, goal);
}
// Smooth horizontal scroll support for mobile
const slider = document.querySelector(".cards-wrapper");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
});

slider.addEventListener("mouseup", () => {
    isDown = false;
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
});
