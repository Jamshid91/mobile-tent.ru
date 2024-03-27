const menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu'),
      header = document.querySelector('.header'),
      body = document.querySelector('body'),
      catalogsBtn = document.querySelector('.catalog-btn'),
      catalogs = document.querySelector('.catalogs');


menuBtn.addEventListener('click', () => {
    header.classList.toggle('header-border');
    menu.classList.toggle('show-menu');
    body.classList.toggle('bodyStopScroll');
});


catalogsBtn.addEventListener('click', () => {
  catalogs.classList.toggle('showCatalog')
});





  $(document).ready(function() {
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
