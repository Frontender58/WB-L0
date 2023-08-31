const SeconddecrementImage = document.getElementById("Seconddecrement");
const SecondincrementImage = document.getElementById("Secondincrement");
const SecondcountElement = document.getElementById("Secondcount");

let Secondcount = 0;

SeconddecrementImage.addEventListener("click", () => {
  if (Secondcount > 0) {
    Secondcount--;
    updateSecondcount();
  }
});

SecondincrementImage.addEventListener("click", () => {
  Secondcount++;
  updateSecondcount();
});

function updateSecondcount() {
  SecondcountElement.textContent = Secondcount;
}
