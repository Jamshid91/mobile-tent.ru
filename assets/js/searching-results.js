const filterBox = document.querySelector('.filter-box'),
      showFilter_btn = document.querySelector('.showFilter__btn');


showFilter_btn.addEventListener('click', () => {
filterBox.classList.toggle('showFilterBox')
});


const eqCheks = document.querySelectorAll('.equipment-check .check');

eqCheks.forEach(check => {
  check.addEventListener('click', () => {
      eqCheks.forEach(el => {
          el.classList.remove('checked')
      })
      check.classList.add('checked')
  })
});

const bestseller = new Swiper('.swiper-bestseller', {
    loop: true,
    grabCursor: true,
        pagination: {
        el: '.bestseller-pagination',
        clickable: true
    },
});