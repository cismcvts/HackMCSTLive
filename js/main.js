// Code written by Matthew Weir
// This runs on every page on the website

const tooltips = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(e => new bootstrap.Tooltip(e, {trigger: "click hover focus"}));
document.body.addEventListener("click", () => {
    for (const tooltip of tooltips) tooltip.hide();
});