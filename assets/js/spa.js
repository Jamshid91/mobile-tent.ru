const spa = new Swiper('.swiper-spa', {
    loop: true,
        navigation: {
        nextEl: '.swiper-spa-next',
        prevEl: '.swiper-spa-prev',
      },
        breakpoints: {
          0: {
            slidesPerView: 1.075,
            spaceBetween: 16,
          },
          767: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
        
          1199: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
    }
  });

  const photos_progress = new Swiper('.swiper-photos-progress', {
    loop: true,
        navigation: {
        nextEl: '.swiper-photos-progress-next',
        prevEl: '.swiper-photos-progress-prev',
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

  const photos_final = new Swiper('.swiper-photos-final', {
    loop: true,
        navigation: {
        nextEl: '.swiper-photos-final-next',
        prevEl: '.swiper-photos-final-prev',
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