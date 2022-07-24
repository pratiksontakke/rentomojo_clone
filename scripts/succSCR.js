import navbar1 from "../components/scripts/navbar.js";
import footer1 from "../components/scripts/footer.js";
document.querySelector("#navbar").innerHTML = navbar1();
document.querySelector("#footer").innerHTML = footer1();
function kau_myfunc() {
let div = document.querySelector("#kau_show-on-hover");
div.classList.toggle("kau_show");
console.log("kau_button")
}
document.querySelector("#kau_button").addEventListener("click", kau_myfunc)


setTimeout(function () {
    alert("congratulations ! Your order is placed ");
}, 3000)
setTimeout(function () {
    alert("continue shopping...");
    window.location.href = "index.html";
}, 8000)