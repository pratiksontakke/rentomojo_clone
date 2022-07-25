// do your below
let addToCartFromLS = JSON.parse(localStorage.getItem("addToCart")) || [];
import navbar1 from "../components/scripts/navbar.js";
import footer1 from "../components/scripts/footer.js";
document.querySelector("#navbar").innerHTML = navbar1();
document.querySelector("#footer").innerHTML = footer1();
function kau_myfunc() {
    let div = document.querySelector("#kau_show-on-hover");
    div.classList.toggle("kau_show");
    console.log("kau_button");
}
document.querySelector("#kau_button").addEventListener("click", kau_myfunc);
if (addToCartFromLS.length > 0) {
    displayTable(addToCartFromLS);
    function displayTable(addToCartFromLS) {
        document.getElementById("container").innerHTML = "";
        addToCartFromLS.forEach(function (elem, index) {
            let container1 = document.createElement("div");
            container1.setAttribute("id", "container1");
            container1.setAttribute("class", "container1");
            let container2 = document.createElement("div");
            container2.setAttribute("id", "container2");
            container2.setAttribute("class", "container2");
            let container3 = document.createElement("div");
            container3.setAttribute("id", "container3");
            container3.setAttribute("class", "container3");
            let img = document.createElement("img");
            img.setAttribute("id", "par_img");
            img.src = `./db/img/${elem.cartImgLink}`;
            let name = document.createElement("h5");
            name.setAttribute("id", "par_name");
            name.innerText = elem.name;
            let dustbin = document.createElement("img");
            dustbin.src =
                "https://www.rentomojo.com/public/images/radical-cart/icons/delete__icon.svg";
            dustbin.setAttribute("id", "par_dustbin");
            dustbin.addEventListener("click", function () {
                itemDelete(index);
            });
            let box1 = document.createElement("div");
            box1.setAttribute("class", "box1");
            box1.append(img, name, dustbin);
            // yaha tak photo dikha de hey
            //  ab niche increment decrement wala code hey
            let minus = document.createElement("img");
            minus.setAttribute("id", "minus");
            minus.src = "https://static.thenounproject.com/png/4935942-200.png";
            minus.addEventListener("click", function () {
                decrement(elem);
            });
            let quantity = document.createElement("h6");
            quantity.setAttribute("id", "quantity");
            quantity.innerText = elem.quantity;
            let plus = document.createElement("img");
            plus.setAttribute("id", "plus");
            plus.src = "https://static.thenounproject.com/png/592841-200.png";
            plus.addEventListener("click", function () {
                increment(elem);
            });
            let b_left = document.createElement("div");
            b_left.setAttribute("id", "b_left");
            b_left.append(minus, quantity, plus);
            let rupee = document.createElement("img");
            rupee.setAttribute("id", "rupee");
            rupee.src = "https://static.thenounproject.com/png/60212-200.png";
            let price = document.createElement("h6");
            price.setAttribute("id", "price");
            price.innerText = elem.price;
            let b_right = document.createElement("div");
            b_right.setAttribute("id", "b_right");
            b_right.append(rupee, price);
            let box2 = document.createElement("div");
            box2.setAttribute("class", "box2");
            box2.append(b_left, b_right);
            let box4 = document.createElement("div");
            let pay = document.createElement("h6");
            pay.setAttribute("id", "pay");
            pay.innerText = +elem.price * +elem.quantity;
            let rupee1 = document.createElement("img");
            rupee1.setAttribute("id", "rupee1");
            rupee1.src = "https://static.thenounproject.com/png/60212-200.png";
            let box3 = document.createElement("div");
            box3.setAttribute("class", "box3");
            box3.append(rupee1, pay);
            container1.append(box1, box2, box3);
            let subcontainer = document.createElement("div");
            subcontainer.append(container1);
            let container = document.getElementById("container");
            container.append(subcontainer);
        });
        let refund = refundable(addToCartFromLS);
        document.getElementById("deposit").innerText = refund;
        let delivery = deliveryCharge(addToCartFromLS);
        document.getElementById("deli_charge").innerText = delivery;
        let month = monthly(addToCartFromLS);
        document.getElementById("monthly").innerText = month;
        let gst = Gst(addToCartFromLS);
        // console.log(gst)
        document.getElementById("gst").innerText = gst;
        document.getElementById("monthly_rent").innerText = month + gst;
        let Total_payable = TotalAmount(addToCartFromLS);
        let tt = refund + delivery;
        document.getElementById(
            "total_amount"
        ).innerText = `${tt} \n Payable Now`;
        // console.log(TotalAmount(addToCartFromLS));
    }
    function itemDelete(index) {
        addToCartFromLS.splice(index, 1);
        localStorage.setItem("addToCart", JSON.stringify(addToCartFromLS));
        setTimeout(() => {
            if (addToCartFromLS.length == 0) {
                window.location.href = "./empty_cart.html";
            }
        }, 500);
        displayTable(addToCartFromLS);
    }
    function decrement(elem) {
        if (elem.quantity !== 0) {
            // return;
            let quantity = elem.quantity--;
            document.getElementById("quantity").innerText = quantity;
        } else {
            return;
        }
        addToCartFromLS = addToCartFromLS.filter((elem) => elem.quantity !== 0);
        localStorage.setItem("addToCart", JSON.stringify(addToCartFromLS));
        setTimeout(() => {
            if (addToCartFromLS.length == 0) {
                window.location.href = "./empty_cart.html";
            }
        }, 500);

        displayTable(addToCartFromLS);
    }
    // decrement()
    function increment(elem) {
        let quantity = elem.quantity++;
        document.getElementById("quantity").innerText = quantity;
        localStorage.setItem("addToCart", JSON.stringify(addToCartFromLS));
        displayTable(addToCartFromLS);
    }
    function refundable(addToCartFromLS) {
        let bag2 = 0;
        for (let i = 0; i < addToCartFromLS.length; i++) {
            bag2 =
                bag2 +
                addToCartFromLS[i]["quantity"] * addToCartFromLS[i]["deposit"];
        }
        return bag2;
    }
    function deliveryCharge(addToCartFromLS) {
        let bag3 = 0;
        for (let i = 0; i < addToCartFromLS.length; i++) {
            bag3 = bag3 + addToCartFromLS[i]["quantity"] * Number(99);
        }
        return bag3;
    }
    function monthly(addToCartFromLS) {
        let bag4 = 0;
        for (let i = 0; i < addToCartFromLS.length; i++) {
            bag4 =
                bag4 +
                addToCartFromLS[i]["quantity"] * addToCartFromLS[i]["price"];
        }
        return bag4;
    }
    function Gst(addToCartFromLS) {
        let bag5 = 0;
        for (let i = 0; i < addToCartFromLS.length; i++) {
            bag5 =
                bag5 +
                addToCartFromLS[i]["quantity"] * addToCartFromLS[i]["price"];
            // bag5 = Math.ceil(bag5)
        }
        bag5 = Math.floor((bag5 * 18) / 100);
        console.log(bag5);
        return bag5;
    }
    function TotalAmount(addToCartFromLS) {
        let bag = 0;
        for (let i = 0; i < addToCartFromLS.length; i++) {
            bag =
                bag +
                addToCartFromLS[i]["quantity"] * addToCartFromLS[i]["price"];
        }
        return bag;
    }
} else {
    window.location.href = "./empty_cart.html";
}
