/* mohit code
////////////
let sub_products= document.getElementById("moh_packPro");
sub_products.addEventListener("click", ()=>{
  console.log("HII")
  populate();
})

function populate(){
  let result_product= products["product"];
  let html="";
  result_product.forEach(element => {
    html+=`<h1> one of the img is ${element.name} </h1>`;
  });

  let defs=document.getElementById("defs");
    defs.innerHTML=html;
} end
///////
*/
import navbar1 from "../components/scripts/navbar.js";
import footer1 from "../components/scripts/footer.js";
let addToCart = JSON.parse(localStorage.getItem("addToCart")) || [];
let singleProduct = JSON.parse(localStorage.getItem("singleProduct")) || {};
document.querySelector("#navbar").innerHTML = navbar1();
document.querySelector("#footer").innerHTML = footer1();
function kau_myfunc() {
    let div = document.querySelector("#kau_show-on-hover");
    div.classList.toggle("kau_show");
    console.log("kau_button");
}
document.querySelector("#kau_button").addEventListener("click", kau_myfunc);
console.log("singleProduct:", singleProduct);
let x = (id) => {
    return document.querySelector(`#${id}`);
};
let pra_displayProductData = (singleProduct) => {
    x("moh_mainPic").src = `./db/img/${singleProduct.imgLink}`; //moh_prodName
    x("moh_month").innerText = singleProduct.price;
    x("moh_monthD").innerText = singleProduct.price;
    x("moh_depoD").innerText = singleProduct.deposit;
    x("moh_prodName").innerText = singleProduct.name;
    pra_refundable_deposit(singleProduct.price);
};
let pra_refundable_deposit = (price) => {
    let pra_refund = price * 3;
    x("moh_depo").innerText = pra_refund;
};
let pra_addTocartFun = (el, index) => {
    console.log('el:', el)
    let flag = false;
    for (let i = 0; i < addToCart.length; i++) {
        if (addToCart[i].id == el.id) {
            flag = true;
        }
    }
    if (!flag) {
        console.log("!include");
        addToCart.push(el);
        localStorage.setItem("addToCart", JSON.stringify(addToCart));
        alert("added to card");
        alert("Checkout cart to see product");
    } else {
        alert("already added");
        alert("Checkout cart to see product");
    }
};

x("moh_cart").addEventListener("click", () => {
    pra_addTocartFun(singleProduct);
});
window.onload = pra_displayProductData(singleProduct);

/*  
{
    cartImgLink: "i05w1kj4-1024x512.jpg",
    imgLink: "i05w1kj4-1024x512.jpg",
    name: "Double Bed with Fridge & Washing Machine",
    category: "packages",
    sub_category: "bedroom",
    Sub_sub_category: "bed",
    price: 539,
    deposit: 829,
    quantity: 1,
    id: "pra_12345",
}
*/
