let addToCart = JSON.parse(localStorage.getItem("addToCart")) || [];
let singleProduct = JSON.parse(localStorage.getItem("singleProduct")) || {};
let pra_searchKey = JSON.parse(localStorage.getItem("pra_searchKey")) || null;
import products from "../db/db.js";
import navbar1 from "../components/scripts/navbar.js";
// import footer1 from "../components/scripts/footer.js";
document.querySelector("#navbar").innerHTML = navbar1();
// document.querySelector("#footer").innerHTML = footer1();
function kau_myfunc() {
    let div = document.querySelector("#kau_show-on-hover");
    div.classList.toggle("kau_show");
    console.log("kau_button");
}
document.querySelector("#kau_button").addEventListener("click", kau_myfunc);
let displayData = () => {
    document.querySelector("#pra_cartAppend").innerHTML = null;
    let pra_prod = products.filter((el)=> {
        return el.Sub_sub_category == pra_searchKey 
    })
    console.log('pra_prod:', pra_prod)
    pra_prod.forEach((el, index) => {
        let divMain = document.createElement("div");
        divMain.setAttribute("class", "pra_card");
        let divM1 = document.createElement("div");
        let img = document.createElement("img");
        img.src = `./db/img/${el.cartImgLink}`;
        img.addEventListener("click", () => {
            pra_addSingle(el, index);
        });
        let divM2 = document.createElement("div");
        let divM21 = document.createElement("div");
        let pra_name = el.name;
        if (el.name.length > 20) {
            pra_name = `${el.name.substring(0, 20)}...`;
        }
        divM21.innerHTML = pra_name;
        let divM22 = document.createElement("div");
        let divM23 = document.createElement("div");
        let span1 = document.createElement("span");
        span1.setAttribute("class", "pra_rent pra_mo");
        span1.style.display = "block";
        span1.innerText = "Rent";
        let span2 = document.createElement("span");
        span2.innerText = `${el.price}/mo`;
        span2.style.display = "block";
        divM23.append(span1, span2);
        let divM24 = document.createElement("div");
        let button1 = document.createElement("button");
        button1.innerText = "See more";
        button1.addEventListener("click", () => {
            pra_addTocartFun(el, index);
        });
        divM1.append(img);
        divM24.append(button1);
        divM22.append(divM23, divM24);
        divM2.append(divM21, divM22);
        divMain.append(divM1, divM2);
        document.querySelector("#pra_cartAppend").append(divMain);
    });
};
let pra_addSingle = (el, index) => {
    console.log("singleProduct", el);
    singleProduct = el;
    localStorage.setItem("singleProduct", JSON.stringify(singleProduct));
    window.location.href = "./subProduct.html";
};
let pra_addTocartFun = (el, index) => {
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
        // alert("");
    } else {
        alert("already added");
    }
};
window.onload = displayData();
/// search bar 
let pra_search = () => {
    let pra_search_value = document.querySelector("#kau_scarch").value.trim().toLowerCase();
    pra_searchKey = pra_search_value;
    localStorage.setItem("pra_searchKey", JSON.stringify(pra_searchKey));
    window.location.href = "./searchbar.html";
};
document.querySelector("#kau_searchLogo").addEventListener("click", () => {
    pra_search();
})

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
