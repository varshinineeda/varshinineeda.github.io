
// 🌙 Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// ⬆ Back to Top
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ⌨️ Typing Animation
const text = "Hello! I'm Varshini Yasodha 👋";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = function () {
    typeWriter();
};
