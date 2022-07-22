const sam_submit = document.getElementById("sam_submit");

sam_submit.addEventListener("click", displayDate);
let users = JSON.parse(localStorage.getItem("users")) || [];
let num11 = JSON.parse(localStorage.getItem("num11")) || null;
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

let otp = JSON.parse(localStorage.getItem("users"));
// let otp  = JSON.parse(localStorage.getItem('users'));
console.log(otp);

let otpSend = `OTP sent to ${num11}`;

document.getElementById("otp_sent").innerText = otpSend;
console.log(`OTP sent to ${num11}`);

let p = `OTP sent to ${otp}`;

function displayDate() {
  event.preventDefault();

  let form = document.getElementById("form");
  let number = num11;
  let flag = "not";
  for (let i = 0; i < users.length; i++) {
    if (number == users[i]) {
      flag = "yes";
      window.location.href = "index.html";
    }
  }
  console.log("flag:", flag);
  if (flag == "not") {
    users.push(number);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "kycPage.html";
  }
  form.sam_number.value = null;
}

function backHomeFunc() {
  // console.log("Back Homne");
  window.location.href = "pro.html";
}

function numberChangeFunc() {
  window.location.href = "signup.html";
}
