// =========================
// GRACE BEAUTY PARLOUR
// script.js
// =========================

// Loader

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 800);
});

// Scroll To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Reveal Animation

const reveals = document.querySelectorAll(
".feature,.about-home,.service-card,.gallery-container img,.testimonial-card,.contact-box"
);

function revealSection() {

    reveals.forEach((item) => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// Navbar Shadow

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.08)";

    }

});

// Service Hover Effect

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// Gallery Zoom

const gallery = document.querySelectorAll(".gallery-container img");

gallery.forEach(image => {

    image.addEventListener("click", () => {

        window.open(image.src);

    });

});

// Auto Testimonial Animation

const testimonials =
document.querySelectorAll(".testimonial-card");

let current = 0;

setInterval(() => {

    testimonials.forEach(card => {

        card.style.opacity = ".5";

    });

    testimonials[current].style.opacity = "1";
    testimonials[current].style.transform = "scale(1.05)";

    setTimeout(() => {

        testimonials[current].style.transform = "scale(1)";

    },1000);

    current++;

    if(current >= testimonials.length){

        current = 0;

    }

},2500);

// Button Ripple Effect

const buttons = document.querySelectorAll(
".btn,.btn2,.book-btn"
);

buttons.forEach(btn=>{

    btn.addEventListener("click",function(e){

        let x=e.clientX-this.offsetLeft;
        let y=e.clientY-this.offsetTop;

        let ripple=document.createElement("span");

        ripple.style.left=x+"px";
        ripple.style.top=y+"px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

// Console

console.log("Grace Beauty Parlour Website Loaded Successfully ❤️");