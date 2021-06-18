document.addEventListener("DOMContentLoaded", function(event) {
    alert("Hello JavaScript");
    let targetImage = document.querySelector("#smart-image");
    targetImage.addEventListener("click", function() {
    targetImage.classList.remove("small");
    });
    targetImage.addEventListener("click", function() {
    if (targetImage.classList.contains("small")) {
} else {
    targetImage.classList.add("small");
}
    });
});
