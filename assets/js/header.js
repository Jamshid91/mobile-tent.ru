const menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu'),
      header = document.querySelector('.header'),
      body = document.querySelector('body'),
      catalogsBtn = document.querySelector('.catalog-btn'),
      catalogs = document.querySelector('.catalogs'),
      cityBtns = document.querySelectorAll('.city-btn'),
      popUpCity = document.querySelector('.popUp-city'),
      catalogList = document.querySelectorAll('.catalog-nav-list'),
      catalogLists = document.querySelectorAll('.catalog-nav-list__title'),
      rightHeads = document.querySelectorAll('.right-head'),
      catalogsProduct = document.querySelector('.catalogs-product'),
      searchCatalog = document.querySelector('.search-catalogs'),
      searchInp = document.querySelector('.search__inp'),
      requestBtn = document.querySelectorAll('.call-me'),
      popUpRequest = document.querySelector('.popUp-request'),
      calculate_btn = document.querySelectorAll('.calculate__btn'),
      popUp_calculate = document.querySelector('.popUp-calculate');


menuBtn.addEventListener('click', () => {
    header.classList.toggle('header-border');
    menu.classList.toggle('show-menu');
    body.classList.toggle('bodyStopScroll');
});

requestBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    popUpRequest.classList.remove('d-none')
  })
});

calculate_btn.forEach(btn => {
  btn.addEventListener('click', () => {
    popUp_calculate.classList.remove('d-none')
    body.classList.add('bodyStopScroll')
  });
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

searchInp.addEventListener('input', () => {
  if(searchInp.value.length > 1) {
    searchCatalog.classList.add('d-block')
    catalogs.classList.remove('showCatalog')
    catalogsBtn.classList.remove('clicked')
  } else {
    searchCatalog.classList.remove('d-block')
  }
})

let count = 0;
catalogLists.forEach(list => {
  list.addEventListener('click', () => {
    if(count == 0) {
      catalogList.forEach(elem => {
        elem.classList.add('d-none');
      })
      list.parentElement.parentElement.classList.add('showList')
      list.parentElement.parentElement.classList.remove('d-none');
      catalogsProduct.classList.add('d-none')
      return count = 1;
    } else {
      catalogList.forEach(elem => {
        elem.classList.remove('d-none');
        catalogsProduct.classList.remove('d-none')
      });
      list.parentElement.parentElement.classList.remove('showList')
      return count = 0;
    }
  })
});

rightHeads.forEach(elem => {
  elem.addEventListener('click', () => {
    elem.parentElement.classList.toggle('hideNavs')
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
