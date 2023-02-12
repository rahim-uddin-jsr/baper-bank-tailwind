document.getElementById("btn-deposit").addEventListener("click", () => {
  const totalBallanceElement = document.getElementById("ballance-total");
  const totalBallance = parseFloat(totalBallanceElement.innerText);
  // deposit
  const depositInputField = document.getElementById("deposit-amount-filed");
  const depositInputValue = parseFloat(depositInputField.value);

  depositInputField.value = "";
  if (isNaN(depositInputValue)) {
    alert("please input a valid number of ballance");
    return;
  }
  const depositTotalElement = document.getElementById("deposit-total");
  const depositTotal = parseFloat(depositTotalElement.innerText);

  depositTotalElement.innerText = depositTotal + depositInputValue;

  totalBallanceElement.innerText = depositInputValue + totalBallance;
  depositInputField.value = "";
});
