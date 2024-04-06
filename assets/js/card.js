
    var productSlider = new Swiper('.big-card', {
        spaceBetween: 12,
        centeredSlides: false,
        loop:true,
        direction: 'horizontal',
        loopedSlides: 6,
        resizeObserver:true,
        
        breakpoints: {
            0: {
              slidesPerView: 1.075,
              spaceBetween: 16,
            },
            576: {
              slidesPerView: 1,
            },
      }
    });
    var productThumbs = new Swiper('.small-card', {
        spaceBetween: 10,
        loop: true,
        slideToClickedSlide: true,
        direction: 'horizontal',
        slidesPerView: 6,
        loopedSlides: 6,    
    });
    productSlider.controller.control = productThumbs;
    productThumbs.controller.control = productSlider;


    $(document).ready(function() {
        $('.card-tabs-box').hide();
        $('.card-tabs-box:first-child').show();
        $('.tabs-btn').click(function() {
          let pageInfo = $(this).attr('data-info');
          $('.card-tabs-box').hide();
          $('.' + pageInfo).show();
        })
      });



      $(document).ready(function() {
        $('.description-tab').hide();
        $('.description-tab:first-child').show();
        $('.desc-btn').click(function() {
          let pageInfo = $(this).attr('data-desc');
          $('.description-tab').hide();
          $('.' + pageInfo).show();
        })
      });



      const option1 = new Swiper('.swiper-option1', {
        loop: true,
            navigation: {
            nextEl: '.swiper-option1-next',
            prevEl: '.swiper-option1-prev',
          },
      });
      const option2 = new Swiper('.swiper-option2', {
        loop: true,
            navigation: {
            nextEl: '.swiper-option2-next',
            prevEl: '.swiper-option2-prev',
          },
      });
      const option3 = new Swiper('.swiper-option3', {
        loop: true,
            navigation: {
            nextEl: '.swiper-option3-next',
            prevEl: '.swiper-option3-prev',
          },
      });
      const option4 = new Swiper('.swiper-option4', {
        loop: true,
            navigation: {
            nextEl: '.swiper-option4-next',
            prevEl: '.swiper-option4-prev',
          },
      });




      const video = new Swiper('.swiper-video', {
        spaceBetween: 22,
        loop:false,
        navigation: {
        nextEl: '.swiper-video-next',
        prevEl: '.swiper-video-prev',
      },
        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
              grid: {
                  rows: 2,
                  fill: 'row'
                },
            },
            991: {
              slidesPerView: 2,
            },
      }
    });


       const documentation = new Swiper('.swiper-documentation', {
        spaceBetween: 20,
        loop:true,
        navigation: {
        nextEl: '.swiper-documentation-next',
        prevEl: '.swiper-documentation-prev',
      },
        breakpoints: {
            0: {
              slidesPerView: 1.075,
              spaceBetween: 16,
            },
            576: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 4,
            },
      }
    });


    const hangar = new Swiper('.swiper-hangar', {
     spaceBetween: 20,
     loop:true,
     navigation: {
     nextEl: '.swiper-hangar-next',
     prevEl: '.swiper-hangar-prev',
   },
     breakpoints: {
         0: {
           slidesPerView: 1,
           spaceBetween: 16,
         },
         767: {
           slidesPerView: 2,
         },
         991: {
           slidesPerView: 3,
         },
         1199: {
           slidesPerView: 3,
         },
         1700: {
           slidesPerView: 4,
         },
   }
 });

 const recently_viewed = new Swiper('.swiper-recently-viewed', {
  spaceBetween: 20,
  loop:false,
  navigation: {
  nextEl: '.swiper-recently-viewed-next',
  prevEl: '.swiper-recently-viewed-prev',
},
  breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 3,
      },
      1700: {
        slidesPerView: 4,
      },
}
});