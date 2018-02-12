$(document).ready(() => {
  $('nav').removeClass('black-toggle');
  // $('nav').removeClass('black');
  $(window).on('scroll', () => {
    if ($(window).scrollTop()) {
      $('nav').addClass('black');
    } else {
      $('nav').removeClass('black');
    }
  });
});