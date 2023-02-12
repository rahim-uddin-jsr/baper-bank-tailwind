document.getElementById("btn-withdraw").addEventListener("click", () => {
  const totalBallanceElement = document.getElementById("ballance-total");
  const totalBallance = parseFloat(totalBallanceElement.innerText);
  const withdrawInputField = document.getElementById("withdraw-amount-filed");

  const withdrawInputValue = parseFloat(withdrawInputField.value);

  withdrawInputField.value = "";
  if (isNaN(withdrawInputValue)) {
    alert("please input a valid number of ballance");
    return;
  }
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const withdrawTotalValue = parseFloat(withdrawTotalElement.innerText);
  if (totalBallance < withdrawInputValue) {
    alert("insufficient Ballance");
    return;
  }
  withdrawTotalElement.innerText = withdrawTotalValue + withdrawInputValue;

  totalBallanceElement.innerText = totalBallance - withdrawInputValue;
  withdrawInputField.value = "";
});
