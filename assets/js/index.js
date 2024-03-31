const youCanGet = new Swiper('.swiper-youCanGet', {
  loop: true,
      navigation: {
      nextEl: '.swiper-youCanGet-next',
      prevEl: '.swiper-youCanGet-prev',
    },
      breakpoints: {
        0: {
          slidesPerView: 1.05,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        991: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
  }
});

const clients = new Swiper('.swiper-clients', {
  loop: true,
      navigation: {
      nextEl: '.swiper-clients-next',
      prevEl: '.swiper-clients-prev',
    },
});

const hangars = new Swiper('.swiper-hangars', {
  loop: true,
  allowTouchMove: true, 
  simulateTouch: false, 
  slideToClickedSlide: false, 
  touchReleaseOnEdges: false, 
  a11y: false, 
  watchSlidesProgress: true,
      navigation: {
      nextEl: '.swiper-bestsellers-next',
      prevEl: '.swiper-bestsellers-prev',
    },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        850: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
  }
});

const bestseller = new Swiper('.swiper-bestseller', {
    loop: true,
    grabCursor: true,
        pagination: {
        el: '.bestseller-pagination',
        clickable: true
    },
});

const careful = new Swiper('.swiper-careful', {
  loop: false,
      navigation: {
      nextEl: '.swiper-careful-next',
      prevEl: '.swiper-careful-prev',
    },
      breakpoints: {
        0: {
          slidesPerView: 1,
            grid: {
                rows: 2,
                fill: 'row'
              },
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 1,
            grid: {
                rows: 1,
                fill: 'row'
              },
          spaceBetween: 16,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
  }
});

const showdown = new Swiper('.swiper-showdown', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
      navigation: {
      nextEl: '.swiper-showdown-next',
      prevEl: '.swiper-showdown-prev',
    },
});


const our_tents = new Swiper('.swiper-our-tents', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
      navigation: {
      nextEl: '.swiper-our-tents-next',
      prevEl: '.swiper-our-tents-prev',
    },
});
const our_clients = new Swiper('.swiper-our-clients', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
      navigation: {
      nextEl: '.swiper-our-clients-next',
      prevEl: '.swiper-our-clients-prev',
    },
});

const complex = new Swiper('.swiper-complex', {
  loop: true,
      navigation: {
      nextEl: '.swiper-complex-next',
      prevEl: '.swiper-complex-prev',
    },
      breakpoints: {
        0: {
          slidesPerView: 1.3,
          spaceBetween: 16,
        },
        767: {
          slidesPerView: 1.9,
          spaceBetween: 20,
        },
  }
});


const youCanGet_catalog = new Swiper('.swiper-youCanGet-catalog', {
  loop: true,
      navigation: {
      nextEl: '.swiper-youCanGet-catalog-next',
      prevEl: '.swiper-youCanGet-catalog-prev',
    },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 1.3,
          spaceBetween: 16,
        },
        767: {
          slidesPerView: 2.1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
  }
});
