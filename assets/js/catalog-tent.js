const choose = new Swiper('.swiper-choose', {
    loop: true,
        navigation: {
        nextEl: '.swiper-choose-next',
        prevEl: '.swiper-choose-prev',
      },
        breakpoints: {
          0: {
            slidesPerView: 1.3,
            spaceBetween: 16,
          },
          567: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1999: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
    }
  });