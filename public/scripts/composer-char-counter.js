$(document).ready(function() {
  $('.new-tweet').on('keydown', 'textarea', function() {
    let textLength = 140 - (this.textLength);
    // console.log(textLength);
    let counter = $(this).siblings('.counter').text(textLength);
    // console.log('counter:', counter);
    if (textLength < 0) {
      $(this).siblings('.counter').css('color', 'red');
    } else {
      $(this).siblings('.counter').css('color', 'black');
    }
  });
});