const MobileThirddecrementImage = document.getElementById(
  "MobileThirdDecrement"
);
const MobileThirdincrementImage = document.getElementById(
  "MobileThirdIncrement"
);
const MobileThirdcountElement = document.getElementById("MobileThirdCount");

let Mobilethirdcount = 0;

MobileThirddecrementImage.addEventListener("click", () => {
  if (Mobilethirdcount > 0) {
    Mobilethirdcount--;
    updateMobileThirdCount();
  }
});

MobileThirdincrementImage.addEventListener("click", () => {
  Mobilethirdcount++;
  updateMobileThirdCount();
});

function updateMobileThirdCount() {
  MobileThirdcountElement.textContent = Mobilethirdcount;
}
