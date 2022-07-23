const sam_submit = document.getElementById("sam_submit");
sam_submit.addEventListener("click", displayDate);
let input = document.getElementById("sam_number");
let num11 = JSON.parse(localStorage.getItem("num11")) || null;
let users = JSON.parse(localStorage.getItem("users")) || [];
console.log("users:", users);
input.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  sam_submit.disabled = false;
  sam_submit.style.backgroundColor = "#DC3226";
  if (value === "") {
    sam_submit.disabled = true;
    sam_submit.style.backgroundColor = "#BABABA";
  }
});



function displayDate() {
  event.preventDefault();

  let form = document.getElementById("form");
  let number = form.sam_number.value;
  localStorage.setItem("num11", JSON.stringify(number));
  console.log("users:", users);
  let flag = "not";
  for (let i = 0; i < users.length; i++) {
    if (number == users[i]) {
      flag = "yes";
    }
  }
  console.log("flag:", flag);
  if (flag == "not") {
    users.push(number);
    window.location.href = "otp.html";
  } else {
    console.log("yes");
    window.location.href = "otp.html";
  }
  //  console.log(number);
  form.sam_number.value = null;
}
function backHomeFunc() {
  // console.log("Back Homne");
  window.location.href = "index.html";
}

