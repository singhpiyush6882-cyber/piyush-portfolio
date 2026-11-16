
// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
}

// Close menu after clicking a link
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        nav.classList.remove('active');
    });
});

// Current Year in Footer
const footer = document.querySelector('footer');

if (footer) {
    footer.innerHTML = `
        <p>
            © ${new Date().getFullYear()}
            Piyush Singh Choudhary.
            All Rights Reserved.
        </p>
    `;
}

// Welcome Message
console.log("Welcome to Piyush's Portfolio!");
