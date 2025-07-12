// script.js

// This function is triggered when the user clicks on the email link
function sendEmail() {
    window.location.href = "mailto:nyechiscouture@example.com";
}
// This function initiates a phone call when the user clicks on the phone number
function callUs() {
    window.location.href = "tel:+2349071577490"; 
}


// This function toggles the theme between light and dark mode
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    } else {
    document.documentElement.setAttribute("data-theme", "dark");
    }
}