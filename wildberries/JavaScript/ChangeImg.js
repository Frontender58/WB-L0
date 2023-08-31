const imageElement = document.getElementById("trashcan");
const initialImageSource = "./images/trashcan.png";

const hoverImageSources = ["./images/orange-trashcan.png"];

let currentHoverImageIndex = 0;
let isHovered = false;

const storedHoveredImage = localStorage.getItem("hoveredImage");
if (storedHoveredImage) {
  imageElement.src = storedHoveredImage;
  isHovered = true;
}

imageElement.addEventListener("mouseenter", () => {
  if (!isHovered) {
    imageElement.dataset.initialImage = imageElement.src;
    isHovered = true;
  }

  currentHoverImageIndex =
    (currentHoverImageIndex + 1) % hoverImageSources.length;
  imageElement.src = hoverImageSources[currentHoverImageIndex];

  localStorage.setItem("hoveredImage", imageElement.src);
});

imageElement.addEventListener("mouseleave", () => {
  if (isHovered) {
    imageElement.src = imageElement.dataset.initialImage;
    isHovered = false;

    localStorage.removeItem("hoveredImage");
  }
});
