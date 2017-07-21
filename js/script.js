var calcButton = document.getElementById("discount-calc"),
    closeButton = document.getElementById("calculation__popup-close"),
    popupBackground = document.getElementById("calculation__popup-background");

calcButton.addEventListener("click", showPopup);
closeButton.addEventListener("click", closePopup);
popupBackground.addEventListener("click", closePopup);

function showPopup() {
  var popup = document.getElementById("calculation__popup-window"),
      popupText = document.getElementById("calculation__popup-text"),
      price = 4214,
      discount = 70,
      sum = (price * discount)/100;

  popupText.innerHTML = "Цена со скидкой 70% - " + sum.toFixed(2) + " рублей за квадратный метр";
  popup.style.display = "block";
  popupBackground.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("calculation__popup-window"),
      closeButton = document.getElementById("calculation__popup-close");

  popup.style.display = "none";
  popupBackground.style.display = "none";
}