let wrapper = document.querySelector(".slider-Wrapper");
let menuItem = document.querySelectorAll(".menuItem");
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ]
    },
    {
        id: 2,
        title: "Jordan",
        price: 149,
        colors: [
            {
                code: "gray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ]
    },
    {
        id: 3,
        title: "Blazer",
        price: 169,
        colors: [
            {
                code: "White",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ]
    },
    {
        id: 4,
        title: "Crater",
        price: 179,
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ]
    },
    {
        id: 5,
        title: "Hippie",
        price: 180,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ]
    },
];
let choosenProduct = products[0];
const currentImg = document.querySelector(".product .product-img");
const currentTitle = document.querySelector(".product-title");
const currentPrice = document.querySelector(".product-price");
const currentColors = document.querySelectorAll(".colors .color");
const currentSizes = document.querySelectorAll(".size");
menuItem.forEach((item, index) => {
    item.addEventListener("click" , ()=> {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        choosenProduct = products[index];
        currentTitle.textContent = choosenProduct.title;
        currentPrice.textContent = "$" + choosenProduct.price;
        currentImg.src = choosenProduct.colors[0].img;
        currentColors.forEach((color, index) => {
            color.style.background = choosenProduct.colors[index].code;
        });
    });
});
currentColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentImg.src = choosenProduct.colors[index].img;
    });
});
currentSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentSizes.forEach(size => {
            size.style.backgroundColor = "#FFF";
            size.style.color = "#000";
        })
        size.style.backgroundColor = "#000";
        size.style.color = "#FFF";
    });
});
let productBtn = document.querySelector(".product-btn");
let paymentBox = document.querySelector(".payment");
let closeBtn = document.querySelector(".close");
clickBtnPay ();
function clickBtnPay () {
    productBtn.addEventListener("click", () => {
        paymentBox.style.display = 'flex';
    });
    closeBtn.addEventListener("click", () => {
        paymentBox.style.display = 'none';
    });
}




