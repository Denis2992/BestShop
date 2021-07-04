const prices = {
    products: 5,
    orders: 2,
    package: {
        basic: 0,
        professional: 25,
        premium: 60
    },
    accounting: 35,
    terminal: 5,
}

//input products
const products = document.querySelector("#products");
const productsCount = document.querySelector("[data-id=products]");

products.addEventListener("input", function () {

    if (products.value > 0) {
        productsCount.querySelector(".item__calc").innerHTML = products.value + " * " + prices.products;
        productsCount.querySelector(".item__price").innerText = products.value * prices.products;
        productsCount.style.display = "flex";
    } else {
        productsCount.style.display = "flex";
        productsCount.querySelector(".item__calc").innerHTML = "wrong quantity products";
        productsCount.querySelector(".item__price").innerText = 0;
    }
})

//input orders
const orders = document.querySelector("#orders");
const ordersCount = document.querySelector("[data-id=orders]");

orders.addEventListener("input", function () {

    if (orders.value > 0) {
        ordersCount.querySelector(".item__calc").innerHTML = orders.value + " * " + prices.orders;
        ordersCount.querySelector(".item__price").innerText = orders.value * prices.orders;
        ordersCount.style.display = "flex";

    } else {
        ordersCount.style.display = "flex";
        ordersCount.querySelector(".item__calc").innerHTML = "wrong quantity orders";
        ordersCount.querySelector(".item__price").innerText = 0;
    }
})

//not typical select
const inputPack = document.querySelector("#package");
const select = document.querySelector(".select__dropdown");
const packages = document.querySelector("[data-id=package]");

inputPack.addEventListener("click", function (){
    select.classList.toggle("open");
    select.previousElementSibling.classList.toggle("open");
})

function makeSelect (option, selectedPackage) {
    option.addEventListener("click", function (){
        inputPack.innerHTML = option.innerHTML;
        select.classList.remove("open");
        select.previousElementSibling.classList.remove("open");
        packages.querySelector(".item__calc").innerHTML =  inputPack.innerHTML;
        packages.querySelector(".item__price").innerHTML = selectedPackage;
        packages.style.display = "flex";
    })
}

makeSelect(select.children[0], prices.package.basic);
makeSelect(select.children[1], prices.package.professional);
makeSelect(select.children[2], prices.package.premium);


//checkboxes
function checkboxListener(checkbox, priceArea, price) {
    if (checkbox.checked) {
        priceArea.querySelector(".item__price").innerHTML = price;
        priceArea.style.display = "flex"
    } else {
        priceArea.querySelector(".item__price").innerText = 0;
        priceArea.style.display = "none";
    }
}

const chkAccounting = document.querySelector("#accounting");
const accounting = document.querySelector("[data-id=accounting]");

chkAccounting.addEventListener("input", function (){
    checkboxListener(chkAccounting, accounting, prices.accounting);
})

const chkTerminal = document.querySelector("#terminal");
const terminal = document.querySelector("[data-id=terminal]")

chkTerminal.addEventListener("input", function () {
    checkboxListener(chkTerminal, terminal, prices.terminal)
})



//total count
const totalCount = document.querySelector(".total__price");
const form = document.querySelector("form");
let sum = 0;

function totalSum() {
    sum = parseInt(productsCount.querySelector(".item__price").innerText) +
        parseInt(ordersCount.querySelector(".item__price").innerText) +
        parseInt(packages.querySelector(".item__price").innerHTML) +
        parseInt(accounting.querySelector(".item__price").innerHTML) +
        parseInt(terminal.querySelector(".item__price").innerHTML);
    totalCount.innerHTML = sum;
    totalCount.parentElement.parentElement.style.display = "flex";
}

form.addEventListener("input", function () {
    totalSum();
})

select.addEventListener("click", function () {
    totalSum();
})





