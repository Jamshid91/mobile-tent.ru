$(document).ready(function() {
    $('.tab-info').hide();
    $('.tab-info:first-child').show();
    $('.tab-btn').click(function() {
      let pageInfo = $(this).attr('data-tab');
      $('.tab-info').hide();
      $('.' + pageInfo).show();
    })
  });


  const eqCheks = document.querySelectorAll('.equipment-check .check');
  const calculateBtns = document.querySelectorAll('.equipment-calculate');
  const popUpExperience = document.querySelector('.popUp-calculate');
  const equipment__view = document.querySelectorAll('.equipment__view');
  const popUp_configurations = document.querySelector('.popUp-configurations');
  const equipment_buy = document.querySelectorAll('.equipment-buy');
  const popUp_buy = document.querySelector('.popUp-buy');
  const view_catalog = document.querySelectorAll('.view-catalog__link');
  const popUp_catalog = document.querySelector('.popUp-catalog');


  eqCheks.forEach(check => {
    check.addEventListener('click', () => {
        eqCheks.forEach(el => {
            el.classList.remove('checked')
        })
        check.classList.add('checked')
    })
  });


  calculateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpExperience.classList.remove('d-none');
        body.classList.add('bodyStopScroll')
      })
  });
 

  equipment__view.forEach(btn => {
    btn.addEventListener('click', () => {
      popUp_configurations.classList.remove('d-none');
        body.classList.add('bodyStopScroll')
      })
  }); 
 

  equipment_buy.forEach(btn => {
    btn.addEventListener('click', () => {
      popUp_buy.classList.remove('d-none');
        body.classList.add('bodyStopScroll')
      })
  });  
 

  view_catalog.forEach(btn => {
    btn.addEventListener('click', () => {
      popUp_catalog.classList.remove('d-none');
        body.classList.add('bodyStopScroll')
      })
  }); 