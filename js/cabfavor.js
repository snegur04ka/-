const productRightt = document.querySelector(".cab__items")
const listProductTwoo = [
    {
        imgurl: "./assets/img/product/1672911432173.png",
        title: 'Пряжа трикотажная Arachna «Слинг Принт»',
        man: "./assets/img/product/Group 195.svg",
        manTwo: "+15",
        descriptionTwo: "100% хлопок<br>Вес: 160 г, длина нити: 50 м ",
        description: "<s>170 ₽</s> <span>135<span> ₽",    
    },
    {
        imgurl: "./assets/img/product/1672911403109.png",
        title: 'Пряжа Katia Merino Flame',
        man: "./assets/img/product/Group 196.svg",
        manTwo: "+10",
        descriptionTwo: "74% меринос, 26% хлопок<br>Вес: 50 г, длина нити: 80 м ",
        description: "510 ₽",    
    },
]
listProductTwoo.map(it => {
    productRightt.innerHTML += `
    <div class="product__itemTwo" style="margin-right: 24px; margin-left: 0px;">
        <div class="product__top">
            <img src="./assets/img/cab/Vector.svg" alt="./assets/img/cab/Vector.svg" class="product__hearth">
            <img src="./assets/img/product/more.svg" alt="./assets/img/product/more.svg" class="product__more">
        </div>
        <div class="product__imgTwo"><img src="${it.imgurl}" alt="${it.imgUrl}" class="product__imgg"></div>
        <h2 class="product__title">
        ${it.title}
        </h2>
        <p class="product__descriptionTwo">${it.descriptionTwo}</p>
        <div class="product__manTwo">
            <img src="${it.man}" alt="${it.man}">
            <p class="product__man--text">${it.manTwo}</p>
        </div>
        <p class="product__description">${it.description}</p>
        <button class="product__btn">
            <img src="./assets/img/product/kor.svg" alt="./assets/img/product/kor.svg" class="product__btn--item">
            В корзину
        </button>
    </div>
    `
})


const productRight = document.querySelector(".cab__items")
const listProduct = [
    {
        imgurl: "./assets/img/product/1 13.png",
        title: 'Пряжа Arachna<br> "Macrame MAXI"',
        man: "./assets/img/product/Group 196.svg",
        manTwo: "+2",
        description: "1092 ₽",    
    },
    {
        imgurl: "./assets/img/product/1 13.png",
        title: 'Пряжа Arachna<br> "Macrame MAXI"',
        man: "./assets/img/product/Group 196.svg",
        manTwo: "+2",
        description: "1092 ₽",    
    },
]
listProduct.map(i => {
    productRight.innerHTML += `
    <div class="product__item" style="margin-left: 0px;">
        <div class="product__top">
            <img src="./assets/img/cab/Vector.svg" alt="./assets/img/cab/Vector.svg" class="product__hearth">
            <img src="./assets/img/product/more.svg" alt="./assets/img/product/more.svg" class="product__more">
        </div>
        <div class="product__img"><img src="${i.imgurl}" alt="${i.imgurl}" class="product__imgg" ></div>
        <h2 class="product__title" style="margin-bottom: 57px">
            ${i.title}
        </h2>
        <div class="product__manTwo">
            <img src="${i.man}" alt="${i.man}">
            <p class="product__man--text">${i.manTwo}</p>
        </div>
        <p class="product__description">${i.description}</p>
        <button class="product__btn">
            <img src="./assets/img/product/kor.svg" alt="./assets/img/product/kor.svg" class="product__btn--item">
            В корзину
        </button>
    </div>
    `
})
