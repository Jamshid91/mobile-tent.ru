const reviews = new Swiper('.swiper-reviews', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 24,
      grid: {
          rows: 3,
          fill: 'row'
        },
        navigation: {
        nextEl: '.swiper-reviews-next',
        prevEl: '.swiper-reviews-prev',
      },
  });