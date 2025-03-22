document.getElementById("view-thumbnails").addEventListener("click", function() {
    let gallery = document.getElementById("gallery");
    if (gallery.style.display === "none" || gallery.style.display === "") {
        gallery.style.display = "flex";
    } else {
        gallery.style.display = "none";
    }
});