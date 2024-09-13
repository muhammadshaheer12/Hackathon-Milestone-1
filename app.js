document.querySelectorAll(".box").forEach(function (box) {
    box.addEventListener("click", function () {
        // Toggle the active class to expand or collapse the section
        box.classList.toggle("active");
    });
});
