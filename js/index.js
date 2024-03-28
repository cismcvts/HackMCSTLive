// Code written by Matthew Weir

// Various elements from the HTML
const headingText = document.querySelector("#heading-text");
const navbar = document.querySelector("#navbar");
const signUpNavbar = document.querySelector("#sign-up-navbar");

// The Bootstrap offcanvas object
const offcanvas = new bootstrap.Offcanvas(document.querySelector("#menu"));

// Pull out the original heading text before we overwrite it.
const headingTextContent = headingText.innerText;
// The time to start rendering the text from, with a 1-second delay.
const startTime = Date.now() + 1000;

// This runs every frame the website is visible:
function frame() {
    // Renders the heading text (responsible for its animation)
    headingText.innerText = headingTextContent.slice(0, Math.max(0, Math.floor((Date.now() - startTime) / 50))) + (Math.floor(Date.now() / 750) % 2 === 0 ? "_" : "\xa0");
    // Decreases the transparency of the navbar background as the page scrolls down
    navbar.style.backgroundColor = `rgba(239, 0, 27, ${scrollY / innerHeight})`;
    // Fades in the ".scroll-fade" elements as the page scrolls down
    for (const e of document.querySelectorAll(".scroll-fade")) e.style.opacity = `${scrollY / innerHeight}`;
    requestAnimationFrame(frame);
}

function registrationClosed(){
    alert("Registration Closed, attendees at capacity");
}

// Loop through each ".menu-link" and add a listener that closes the menu when it is clicked
for (const e of document.querySelectorAll(".menu-link")) e.addEventListener("click", offcanvas.hide.bind(offcanvas));
requestAnimationFrame(frame);

