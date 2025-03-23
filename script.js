let currentCategory = "fps";
let thumbnails = {
    fps: ["images/thumb1.jpg", "images/thumb2.jpg", "images/thumb3.jpg"],
    rpg: ["images/thumb4.jpg", "images/thumb5.jpg", "images/thumb6.jpg"],
    horror: ["images/thumb7.jpg", "images/thumb8.jpg", "images/thumb9.jpg"],
    sports: ["images/thumb10.jpg", "images/thumb1.jpg", "images/thumb2.jpg"],
    adventure: ["images/thumb3.jpg", "images/thumb4.jpg", "images/thumb5.jpg"]
};

let currentIndex = 0;

// Show category selection
document.getElementById("category-btn").addEventListener("click", function() {
    document.getElementById("category-chart").classList.toggle("hidden");
});

// Change category
function showThumbnails(category) {
    currentCategory = category;
    currentIndex = 0;
    updateThumbnail();
    document.getElementById("category-chart").classList.add("hidden");
}

// Change thumbnail
document.getElementById("thumbnail-btn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % thumbnails[currentCategory].length;
    updateThumbnail();
});

// Update displayed thumbnail
function updateThumbnail() {
    document.getElementById("thumbnail-img").src = thumbnails[currentCategory][currentIndex];
}
