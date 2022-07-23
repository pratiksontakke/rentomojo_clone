const sam_submit = document.getElementById("sam_submit");
// sam_submit.addEventListener("submit", displayDate);
let input = document.getElementById("sam_name");
let input2 = document.getElementById("sam_email_id");
let input3 = document.getElementById("sam_referral");
input.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  sam_submit.disabled = false;
  sam_submit.style.backgroundColor = "#DC3226";
  if (value === "") {
    sam_submit.disabled = true;
    sam_submit.style.backgroundColor = "#BABABA";
  }
});
// parse
input2.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  sam_submit.disabled = false;
  sam_submit.style.backgroundColor = "#DC3226";
  if (value === "") {
    sam_submit.disabled = true;
    sam_submit.style.backgroundColor = "#BABABA";
  }
});
input3.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  sam_submit.disabled = false;
  sam_submit.style.backgroundColor = "#DC3226";
  if (value === "") {
    sam_submit.disabled = true;
    sam_submit.style.backgroundColor = "#BABABA";
  }
});
let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let form = document.getElementById("form");
  let obj = {
    userName: form.sam_name.value,
    email: form.sam_email_id.value,
    referral: form.sam_referral.value,
  };
  localStorage.setItem("isLogin", JSON.stringify(obj));
  console.log(obj);
  form.sam_name.value = null;
  form.sam_email_id.value = null;
  form.sam_referral.value = null;
  alert("Sign Up Successfull !!");
  window.location.href = "pro.html";
});
function backHomeFunc() {
  // console.log("Back Homne");
  window.location.href = "pro.html";
}
