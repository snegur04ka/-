const listOffer = [
    {
        imgUrl: "./assets/img/offer/one.png",
        podtitle: "Пряжа Macrametr",
    },
    {
        imgUrl: "./assets/img/offer/two.png",
        podtitle: "Кольца бамбук",
    },
    {
        imgUrl: "./assets/img/offer/three.png",
        podtitle: "Трикотажная<br> пряжа Zefirka",
    },
    {
        imgUrl: "./assets/img/offer/vour.png",
        podtitle: "Шпагат крученый",
    },
    {
        imgUrl: "./assets/img/offer/five.png",
        podtitle: "Джут «Арахна»",
    },
]
const offerBottom = document.querySelector(".offer__bottom")
listOffer.map(item => {
    offerBottom.innerHTML += `
        <div class="offer__item">
            <img src="${item.imgUrl}" alt="${item.imgUrl}">
            <h3 class="offer__podtitle">${item.podtitle}</h3>
        </div>
    `
})

const catalogBottom = document.querySelector(".catalog__bottom")
const listCatalog = [
    // {
    //     title: "Макраме",
    //     description: "от 250 ₽",
    //     img: "./assets/img/catalog/one.png",
    //     more: "Подробнее"
    // },
    // {
    //     title: "Вязание",
    //     description: "от 250 ₽",
    //     img: "./assets/img/catalog/two.png",
    //     more: "Подробнее"
    // },
    {
        title: "вышивка",
        description: "от 250 ₽",
        img: "./assets/img/catalog/one.png",
        more: "Подробнее"
    },
    {
        title: "лепка",
        description: "от 250 ₽",
        img: "./assets/img/catalog/one.png",
        more: "Подробнее"
    },
    {
        title: "инструменты",
        description: "от 250 ₽",
        img: "./assets/img/catalog/one.png",
        more: "Подробнее"
    },
    {
        title: "Упаковка",
        description: "от 250 ₽",
        img: "./assets/img/catalog/two.png",
        more: "Подробнее"
    },
    {
        title: "товары<br> для творчества",
        description: "от 250 ₽",
        img: "./assets/img/catalog/one.png",
        more: "Подробнее"
    },
    {
        title: "книги",
        description: "от 250 ₽",
        img: "./assets/img/catalog/one.png",
        more: "Подробнее"
    },
]
listCatalog.map(element => {
    catalogBottom.innerHTML += `
    <div class="catalog__item">
        <h2 class="catalog__title--item">${element.title}</h2>
        <p class="catalog__description">${element.description}</p>
        <p class="catalog__more">${element.more}</p>
        <img class="catalog__img" src="${element.img}">
    </div>
    `
})

const offerInp = document.querySelector(".offer__scroll")    
const offerInpp = document.querySelector(".offer__scrol")    
const offerTitle = document.querySelector(".offer__title")    
const offerTitleTwo = document.querySelector(".offer__titleTwo") 

offerInp.addEventListener("click", () => {
    offerInp.className = "offer__scroll"

    offerInpp.className = "offer__scroll activa"

    offerTitleTwo.className = "offer__titleTwo activaa"

    offerTitle.className = "offer__title"
})

offerInpp.addEventListener("click", () => {
    offerInpp.className = "offer__scrol"

    offerInp.className = "offer__scroll activa"

    offerTitleTwo.className = "offer__titleTwo"

    offerTitle.className = "offer__title activaa"
})

console.log([offerInp]);
console.log([offerInpp]);

    if(offerInp.className == "activa"){    
        offerTitle.className += "offer__title activaa"    
        offerTitleTwo.className += "offer__titleTwo"    
    }    
    else if(offerInpp.className == "activa") {    
        offerTitle.className = "offer__title"    
        offerTitleTwo.className = "offer__titleTwo activaa"    
    }