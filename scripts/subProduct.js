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
let singleProduct = JSON.parse(localStorage.getItem("singleProduct")) || {};
console.log('singleProduct:', singleProduct)
let x = (id) => {
    return document.querySelector(`#${id}`);
};
let pra_displayProductData = (singleProduct) => {
  document.querySelector("#moh_mainPic").src = `./db/img/${singleProduct.imgLink}`;
};
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
