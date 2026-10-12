const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});
// Contact Form + WhatsApp Enquiry

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("formStatus");

// Demo mode: number is not connected yet
const gymWhatsAppNumber = "";

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
        formStatus.textContent = "Please fill all fields.";
        formStatus.style.color = "#ff5555";
        return;
    }

    const whatsappMessage =
        `Hello IRONCORE FITNESS!\n\n` +
        `I want to enquire about your gym.\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Message: ${message}`;

    if (!gymWhatsAppNumber) {

        console.log("Demo WhatsApp Message:\n", whatsappMessage);

        formStatus.textContent =
            "Demo mode: Message preview is available in the browser console.";

        formStatus.style.color = "#b6ff00";

        return;
    }

    const whatsappURL =
        `https://wa.me/${gymWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    formStatus.textContent =
        "WhatsApp opened. Please press Send to submit your enquiry.";

    formStatus.style.color = "#b6ff00";
});