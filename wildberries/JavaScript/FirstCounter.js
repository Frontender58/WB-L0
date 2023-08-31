const decrementImage = document.getElementById("decrement");
const incrementImage = document.getElementById("increment");
const countElement = document.getElementById("count");

let count = 0;

decrementImage.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCount();
  }
});

incrementImage.addEventListener("click", () => {
  count++;
  updateCount();
});

function updateCount() {
  countElement.textContent = count;
}
