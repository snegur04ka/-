const productRight = document.querySelector(".product__right")
const listProductTwo = [
    {
        imgurl: "./assets/img/product/1672911432173.png",
        hearth: "./assets/img/product/like.svg",
        title: 'Пряжа трикотажная Arachna «Слинг Принт»',
        man: "./assets/img/product/Group 195.svg",
        manTwo: "+15",
        descriptionTwo: "100% хлопок<br>Вес: 160 г, длина нити: 50 м ",
        description: "<s>170 ₽</s> <span>135<span> ₽",    
    },
    {
        imgurl: "./assets/img/product/1672911403109.png",
        hearth: "./assets/img/cab/Vector.svg",
        title: 'Пряжа Katia Merino Flame',
        man: "./assets/img/product/Group 196.svg",
        manTwo: "+10",
        descriptionTwo: "74% меринос, 26% хлопок<br>Вес: 50 г, длина нити: 80 м ",
        description: "510 ₽",    
    },
]
listProductTwo.map(it => {
    productRight.innerHTML += `
    <div class="product__itemTwo">
        <div class="product__top">
            <img src="${it.hearth}" alt="${it.hearth}" class="product__hearth">
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
