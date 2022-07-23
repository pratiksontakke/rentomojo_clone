const sam_submit = document.getElementById("sam_submit");
sam_submit.addEventListener("click", displayDate);
let input = document.getElementById("sam_number");
input.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  sam_submit.disabled = false;
  sam_submit.style.backgroundColor = "#DC3226";
  if (value === "") {
    sam_submit.disabled = true;
    sam_submit.style.backgroundColor = "#BABABA";
  }
});
let form = document.getElementById("form");
let number = form.sam_number.value;
let Number1 = JSON.parse(localStorage.getItem("users"));
// if(number === Number1){
//     console.log("Existing User");
//     window.location.href = "Login.html";
// }
// else{
//     // localStorage.setItem('users',number);
//     // window.location.href = "otp.html";
//      function displayDate() {
//     event.preventDefault()
//     localStorage.setItem('users',number);
//     window.location.href = "otp.html";
// }
function displayDate() {
  event.preventDefault();
  let form = document.getElementById("form");
  let number = form.sam_number.value;
  let Number = JSON.parse(localStorage.getItem("users"));
  console.log("Existing User");
  window.location.href = "Login.html";
  localStorage.setItem("users", number);
  window.location.href = "otp.html";
  //  console.log(number);
  form.sam_number.value = null;
}
function backHomeFunc() {
  // console.log("Back Homne");
  window.location.href = "pro.html";
}
