const swiper = new Swiper('.hero__swiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

// let swiper = new Swiper('.offer__swiper', {
//   // spaceBetween: 30,
//   // centeredSlides: true,
//   // autoplay: {
//   //   delay: 4500,
//   //   disableOnInteraction: false,
//   // },
//   slidesPerView: 5,
//   spaceBetween: 30,
//     pagination: {
//       el: '.swiper-pagination',
//       type: "fraction",
//       // clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });
