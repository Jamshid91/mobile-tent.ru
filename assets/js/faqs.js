$(document).ready(function() {
    $('.faqs-tab-text').hide();
    $('.faqs-tab-text:first-child').show();
    $('.faqs-tab-btn').click(function() {
      let pageInfo = $(this).attr('data-faq');
      $('.faqs-tab-text').hide();
      $('.' + pageInfo).show();
    })
  });