const ThirddecrementImage = document.getElementById("thirddecrement");
const ThirdincrementImage = document.getElementById("thirdincrement");
const ThirdcountElement = document.getElementById("thirdcount");

let thirdcount = 0;

ThirddecrementImage.addEventListener("click", () => {
  if (thirdcount > 0) {
    thirdcount--;
    updateThirdCount();
  }
});

ThirdincrementImage.addEventListener("click", () => {
  thirdcount++;
  updateThirdCount();
});

function updateThirdCount() {
  ThirdcountElement.textContent = thirdcount;
}
