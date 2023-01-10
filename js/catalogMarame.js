const productRight = document.querySelector(".product__right")
const listProduct = [
    {
        imgurl: "./assets/img/product/1.3 2.png",
        title: "Шпагат джутовый<br> Сибшнур 500 м",
        man: "./assets/img/product/Group 57.svg",
        manTwo: "",
        description: "<s>422 ₽</s> <span>385<span> ₽",    
    },
    {
        imgurl: "./assets/img/product/1 13.png",
        title: 'Пряжа Arachna<br> "Macrame MAXI"',
        man: "./assets/img/product/Group 196.svg",
        manTwo: "+2",
        description: "1092 ₽",    
    },
    {
        imgurl: "./assets/img/product/1.1 1.png",
        title: 'Пряжа Arachna<br> "Macrame MINI"',
        man: "./assets/img/product/Group 196.svg",
        manTwo: "+2",
        description: "1053 ₽",    
    },
    {
        imgurl: "./assets/img/product/image 12.png",
        title: 'Шнур "Gamma" 0.8<br> мм, 50 м',
        man: "./assets/img/product/Group 197.svg",
        manTwo: "+4",
        description: "852 ₽",    
    },
    {
        imgurl: "./assets/img/product/image 13.png",
        title: 'Веревка “Zефирка”<br> 4 мм, 100 м',
        man: "./assets/img/product/Group 198.svg",
        manTwo: "+1",
        description: "617 ₽",    
    },
]
listProduct.map(i => {
    productRight.innerHTML += `
    <div class="product__item">
        <div class="product__top">
            <img src="./assets/img/product/like.svg" alt="./assets/img/product/like.svg" class="product__hearth">
            <img src="./assets/img/product/more.svg" alt="./assets/img/product/more.svg" class="product__more">
        </div>
        <div class="product__img"><img src="${i.imgurl}" alt="${i.imgurl}" class="product__imgg"></div>
        <h2 class="product__title">
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
