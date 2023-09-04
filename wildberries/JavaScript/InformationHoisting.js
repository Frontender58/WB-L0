const showSale = document.getElementById("CaseSale");
const hiddenDiv = document.getElementById("sale");
const showAdress = document.getElementById("megaprofstyle");
const hiddenAdress = document.getElementById("adress");
const showFree = document.getElementById("free");
const hiddenBack = document.getElementById("comeback");
const showGreen = document.getElementById("freegreen");
const hiddenReturn = document.getElementById("return");
const showCard = document.getElementById("ChangeCard");
const hiddenPay = document.getElementById("Mobilepay");
const showPay = document.getElementById("ChangePay");
const hiddenBlock = document.getElementById("Mobilepay");
const showChangePay = document.getElementById("ChangePay");
const hiddenMobilepay = document.getElementById("Mobilepay");
const showDeliveryClick = document.getElementById("DeliveryClick");
const hiddenDeliveryBlock = document.getElementById("DeliveryBlock");
const showPoint = document.getElementById("ChangePoint");
const hiddenDelivery = document.getElementById("DeliveryBlock");
const showPayClick = document.getElementById("PayClick");
const hiddenPayBlock = document.getElementById("PayBlock");
const blockCardNumber = document.getElementById("CardNumber");
const blockMobileEdge = document.getElementById("MobileEdge");
const showMobileDeliveryClick = document.getElementById("MobileDeliveryClick");
const hiddenMobileDelivery = document.getElementById("MobileDelivery");

showDeliveryClick.addEventListener("click", () => {
  if (hiddenDeliveryBlock.style.display === "none") {
    hiddenDeliveryBlock.style.display = "flex";
  } else {
    hiddenDeliveryBlock.style.display = "none";
  }
});

showMobileDeliveryClick.addEventListener("click", () => {
  if (hiddenMobileDelivery.style.display === "none") {
    hiddenMobileDelivery.style.display = "flex";
  } else {
    hiddenMobileDelivery.style.display = "none";
  }
});

showPayClick.addEventListener("click", () => {
  if (hiddenPayBlock.style.display === "none") {
    hiddenPayBlock.style.display = "flex";
    CardNumber.style.display = "none";
    MobileEdge.style.display = "none";
  } else {
    hiddenPayBlock.style.display = "none";
  }
});

showPoint.addEventListener("click", () => {
  if (hiddenDelivery.style.display === "none") {
    hiddenDelivery.style.display = "flex";
  } else {
    hiddenDelivery.style.display = "none";
  }
});

showChangePay.addEventListener("click", () => {
  if (hiddenMobilepay.style.display === "none") {
    hiddenMobilepay.style.display = "flex";
  } else {
    hiddenMobilepay.style.display = "none";
  }
});

showPay.addEventListener("click", () => {
  if (hiddenBlock.style.display === "none") {
    hiddenBlock.style.display = "flex";
  } else {
    hiddenBlock.style.display = "none";
  }
});

showCard.addEventListener("click", () => {
  if (hiddenPay.style.display === "none") {
    hiddenPay.style.display = "flex";
  } else {
    hiddenPay.style.display = "none";
  }
});

showGreen.addEventListener("click", () => {
  if (hiddenReturn.style.display === "none") {
    hiddenReturn.style.display = "flex";
  } else {
    hiddenReturn.style.display = "none";
  }
});

showFree.addEventListener("click", () => {
  if (hiddenBack.style.display === "none") {
    hiddenBack.style.display = "flex";
  } else {
    hiddenBack.style.display = "none";
  }
});

showSale.addEventListener("click", () => {
  if (hiddenDiv.style.display === "none") {
    hiddenDiv.style.display = "flex";
  } else {
    hiddenDiv.style.display = "none";
  }
});

showAdress.addEventListener("click", () => {
  if (hiddenAdress.style.display === "none") {
    hiddenAdress.style.display = "flex";
  } else {
    hiddenAdress.style.display = "none";
  }
});
