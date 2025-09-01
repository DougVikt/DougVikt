document.addEventListener("DOMContentLoaded", function() {
    // Theme Toggle
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        // Default to dark mode if no preference is saved and system prefers dark
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
    } else {
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light-mode");
    }

    // Update icon based on current theme
    function updateThemeIcon() {
        if (body.classList.contains("dark-mode")) {
            themeToggleBtn.innerHTML = `<i class="bi bi-sun-fill"></i>`;
        } else {
            themeToggleBtn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
        }
    }
    updateThemeIcon(); // Initial icon set

    themeToggleBtn.addEventListener("click", function() {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            localStorage.setItem("theme", "light-mode");
        } else {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
        }
        updateThemeIcon();
    });

    // Typed Text Effect
    const typedTextSpan = document.querySelector(".typed-text");
    const textArray = ["Programador Full-Stack", "Técnico em Informática", "Desenvolvedor Web", "Especialista em TI"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            // Erase text
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay);
        }
    }

    // Start the typing effect on load
    setTimeout(type, newTextDelay + 200);

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
            // Close navbar on mobile after click
            const navbarCollapse = document.getElementById("navbarNav");
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
        });
    });

    // Smooth Scrolling for Hero Section Scroll Down Arrow
    document.querySelector(".scroll-down-arrow a").addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });

    // Basic Form Submission (for demonstration)
    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Mensagem enviada com sucesso! (Funcionalidade de envio real não implementada)");
            contactForm.reset();
        });
    }
});

