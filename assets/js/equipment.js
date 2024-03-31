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
  const popUpExperience = document.querySelector('.popUp-experience');


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
        popUpExperience.classList.remove('d-none')
      })
  });
  