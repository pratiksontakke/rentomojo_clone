// const sam_submit = document.getElementById("sam_submit");

// sam_submit.addEventListener("click", displayDate);

// let input = document.getElementById("sam_number");

// input.addEventListener("keyup", (e) => {
//   const value = e.currentTarget.value;

//   sam_submit.disabled = false;
//   sam_submit.style.backgroundColor = "#DC3226";

//   if (value === "") {
//     sam_submit.disabled = true;
//     sam_submit.style.backgroundColor = "#BABABA";
//   }
// });

// //    let otp = JSON.parse(localStorage.getItem('user'));
// let otp = JSON.parse(localStorage.getItem("users"));
// console.log(otp);

// let otpSend = `OTP sent to ${otp}`;

// document.getElementById("otp_sent").innerText = otpSend;
// console.log(`OTP sent to ${otp}`);

// function displayDate() {
//   event.preventDefault();

//   let form = document.getElementById("form");
//   let number = form.sam_number.value;

//   console.log(number);
//   window.location.href = "kycPage.html";

//   form.sam_number.value = null;
// }

// function backHomeFunc() {
//   // console.log("Back Homne");
//   window.location.href = "index.html";
// }

// function numberChangeFunc() {
//   window.location.href = "signup.html";
// }
