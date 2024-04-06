

  const team = new Swiper('.swiper-team', {
    loop: true,
        navigation: {
        nextEl: '.swiper-team-next',
        prevEl: '.swiper-team-prev',
      },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        
          1199: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
    }
  });