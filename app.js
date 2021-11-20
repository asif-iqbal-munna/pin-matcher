document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = Math.round(Math.random() * 10000);
  if (pin > 999) {
    document.getElementById("pin-holder").value = pin;
  }
});

document
  .getElementById("calc-body")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const inputPinHolder = document.getElementById("input-pin");
    if (isNaN(number)) {
      if (number == "C") {
        inputPinHolder.value = "";
      }
    } else {
      const previousValue = inputPinHolder.value;
      const newValue = previousValue + number;
      inputPinHolder.value = newValue;
    }
  });

document
  .getElementById("calc-body")
  .addEventListener("click", function (event) {
    const pin = document.getElementById("pin-holder").value;
    const typedPin = document.getElementById("input-pin").value;
    if (pin == typedPin && pin.length == 4) {
      alert("Your pin is matched");
    } else {
      alert("Your pin did't matched");
    }
  });
