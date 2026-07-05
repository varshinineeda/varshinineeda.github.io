window.onload = function () {
    document.body.style.opacity = "0";

    setTimeout(function () {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = "1";
    }, 100);
};
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
