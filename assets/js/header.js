const menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu'),
      header = document.querySelector('.header'),
      body = document.querySelector('body'),
      catalogsBtn = document.querySelector('.catalog-btn'),
      catalogs = document.querySelector('.catalogs'),
      cityBtns = document.querySelectorAll('.city-btn'),
      popUpCity = document.querySelector('.popUp-city'),
      catalogLists = document.querySelectorAll('.catalog-nav-list__title');


menuBtn.addEventListener('click', () => {
    header.classList.toggle('header-border');
    menu.classList.toggle('show-menu');
    body.classList.toggle('bodyStopScroll');
});


catalogsBtn.addEventListener('click', () => {
  catalogsBtn.classList.toggle('clicked')
  catalogs.classList.toggle('showCatalog')
});

cityBtns.forEach(city => {
  city.addEventListener('click', () => {
    popUpCity.classList.remove('d-none')
  })
});

catalogLists.forEach(list => {
  list.addEventListener('click', () => {
    list.parentElement.classList.toggle('showList')
  })
})


$(document).ready(function() {
if (window.matchMedia('(min-width: 576px)').matches)
{
  $('.catalog-nav-info').hide();
  $('.catalog-nav-info:first-child').show();
  $('.catalog-nav-base:first-child').addClass('active');
  $('.catalog-nav-base').mouseenter(function() {
    $('.catalog-nav-base').removeClass('active');
    $(this).addClass('active')
    let pageInfo = $(this).attr('data-catalog');
    $('.catalog-nav-info').hide();
    $('.' + pageInfo).show();
  })
}
});

const childrenCatalogs_show = document.querySelectorAll('.children-catalogs-show');

childrenCatalogs_show.forEach(show => {
  let count = 0;
  show.addEventListener('click', () => {
    if(count == 0) {
      show.parentElement.classList.add('showChildrenCatalog');
      return count = 1;
    } else {
      show.parentElement.classList.remove('showChildrenCatalog');
      return count = 0;
    }
  })
});
