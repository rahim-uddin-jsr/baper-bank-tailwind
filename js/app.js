const btnSubmit = document.getElementById("btn-submit");
const btnGuestLogin = document.getElementById("btn-guest");
btnSubmit.addEventListener("click", () => {
  const userEmailFiled = document.getElementById("user-email");
  const userPassFiled = document.getElementById("user-pass");
  if (
    userEmailFiled.value === "rahimuddin5915@gmail.com" &&
    userPassFiled.value === "123456"
  ) {
    window.location.href = "bank.html";
  } else {
    window.alert("Invalid user credential");
  }
});
btnGuestLogin.addEventListener("click", () => {
  window.location.href = "bank.html";
});
