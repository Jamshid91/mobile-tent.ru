$(document).ready(function() {
    $('.option-info').hide();
    $('.option-info:first-child').show();
    $('.option-btn').click(function() {
      let pageInfo = $(this).attr('data-tab');
      $('.option-info').hide();
      $('.' + pageInfo).show();
    })
  });