document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", () => {
    // Toggle the active class to expand or collapse the section
    box.classList.toggle("active");
  });
});
