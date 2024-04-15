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

const wind = new Swiper('.swiper-wind', {
  loop: true,
  autoHeight: true,
  spaceBetween: 30,
      navigation: {
      nextEl: '.swiper-wind-next',
      prevEl: '.swiper-wind-prev',
    },
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

const infoText = new Swiper('.swiper-infoText', {
  loop: true,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 24,
});

showdown.controller.control = infoText;
infoText.controller.control = showdown;

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

$(document).ready(function() {
  $('.wind-box').hide();
  $('.wind-box:first-child').show();
  $('.banner-item').click(function() {
    let pageInfo = $(this).attr('data-wind');
    $('.wind-box').hide();
    $('.' + pageInfo).show();
  })
});

const modelBtn = document.querySelector('.model__btn');
const popUp_model = document.querySelector('.popUp-model');
const request_contactsBtn = document.querySelectorAll('.request-contacts__btn');
const popUp_requestContact = document.querySelector('.popUp-requestContact');
const lowWick_btn = document.querySelector('.lowWick-faq');
const popUp_lowWick = document.querySelector('.popUp-lowWick');
const offer_btn = document.querySelector('.offer__btn');
const popUp_offer = document.querySelector('.popUp-offer');
const person_btn = document.querySelector('.person img');
const popUp_person = document.querySelector('.popUp-person');



request_contactsBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    popUp_requestContact.classList.remove('d-none')
  });
});

lowWick_btn.addEventListener('click', () => {
  popUp_lowWick.classList.remove('d-none');
  body.classList.add('bodyStopScroll')
});

offer_btn.addEventListener('click', () => {
  popUp_offer.classList.remove('d-none');
});

person_btn.addEventListener('click', () => {
  popUp_person.classList.remove('d-none');
});

modelBtn.addEventListener('click', () => {
  popUp_model.classList.remove('d-none')
});

