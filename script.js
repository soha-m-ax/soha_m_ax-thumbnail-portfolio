document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".thumb-btn");
    const imageViewer = document.getElementById("image-viewer");
    const displayedImage = document.getElementById("displayed-image");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            displayedImage.src = button.getAttribute("data-img");
            imageViewer.style.display = "block";
        });
    });

    imageViewer.addEventListener("click", function() {
        imageViewer.style.display = "none";
    });
});