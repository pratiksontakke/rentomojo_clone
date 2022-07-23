// console.log("Hello");
// let products = [
//     {
//       cartImgLink: "i05w1kj4-1024x512.jpg",
//       imgLink: "i05w1kj4-1024x512.jpg",
//       name: "Double Bed with Fridge & Washing Machine",
//       category: "packages",
//       sub_category: "bedroom",
//       Sub_sub_category: "bed",
//       price: 539,
//       deposit: 829,
//       quantity: 1,
//       id: "pra_12345",
//     },
//     {
//       cartImgLink: "i05w1kj4-1024x512.jpg",
//       imgLink: "i05w1kj4-1024x512.jpg",
//       name: "Double Bed with Fridge & Washing Machine",
//       category: "packages",
//       sub_category: "bedroom",
//       Sub_sub_category: "bed",
//       price: 539,
//       deposit: 829,
//       quantity: 1,
//       id: "pra_12346",
//     },
//     {
//       cartImgLink: "ybjef3us-1024x512.jpg",
//       imgLink: "ybjef3us-1024x512.jpg",
//       name: "Double Bed with Study Table & Chair",
//       category: "packages",
//       sub_category: "bedroom",
//       Sub_sub_category: "bed",
//       price: 539,
//       deposit: 829,
//       quantity: 1,
//       id: "pra_12347",
//     },
//     {
//       cartImgLink: "y0r9yuzq-1024x512.jpg",
//       imgLink: "y0r9yuzq-1024x512.jpg",
//       name: "Napster Single Bed & Single Door Fridge Combo",
//       category: "packages",
//       sub_category: "bedroom",
//       Sub_sub_category: "bed",
//       price: 249,
//       deposit: 379,
//       quantity: 1,
//       id: "pra_12348",
//     },
//     {
//       cartImgLink: "83x0ypkd-1024x512.jpg",
//       imgLink: "83x0ypkd-1024x512.jpg",
//       name: "Bedroom Basics",
//       category: "packages",
//       sub_category: "bedroom",
//       Sub_sub_category: "other",
//       price: 189,
//       deposit: 299,
//       quantity: 1,
//       id: "pra_12349",
//     },
//     {
//       cartImgLink: "4u86w254-1024x512.jpg",
//       imgLink: "4u86w254-1024x512.jpg",
//       name: "Hutch Twin Wardrobe Set",
//       category: "packages",
//       sub_category: "bedroom",
//       Sub_sub_category: "other",
//       price: 838,
//       deposit: 1278,
//       quantity: 1,
//       id: "pra_12350",
//     },
//     {
//       cartImgLink: "pngfhl2b-1024x512.jpg",
//       imgLink: "pngfhl2b-1024x512.jpg",
//       name: "Magnum Queen Master Bedroom",
//       category: "packages",
//       sub_category: "bedroom",
//       Sub_sub_category: "bed",
//       price: 549,
//       deposit: 849,
//       quantity: 1,
//       id: "pra_12351",
//     },
//     {
//       cartImgLink: "13ckfjbq-1024x512.jpg",
//       imgLink: "13ckfjbq-1024x512.jpg",
//       name: "Magnum Queen Basic Bedroom",
//       category: "packages",
//       sub_category: "bedroom",
//       Sub_sub_category: "bed",
//       price: 549,
//       deposit: 849,
//       quantity: 1,
//       id: "pra_12352",
//     },
//     {
//       cartImgLink: "n1r44ynx-1024x512.jpg",
//       imgLink: "n1r44ynx-1024x512.jpg",
//       name: "Aurora Queen Utility Bedroom",
//       category: "packages",
//       sub_category: "bedroom",
//       Sub_sub_category: "bed",
//       price: 199,
//       deposit: 309,
//       quantity: 1,
//       id: "pra_12353",
//     },
// ];


// let sub_products= document.getElementById("moh_packPro");
// sub_products.addEventListener("click", ()=>{
//   console.log("HII")
//   populate();
// })

// function populate(){
//   let result_product= products["product"];
//   let html="";
//   result_product.forEach(element => {
//     html+=`<h1> one of the img is ${element.name} </h1>`;
//   });

//   let defs=document.getElementById("defs");
//     defs.innerHTML=html;
// }



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