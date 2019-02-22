$(() => { 
$(document).ready(function() {
  $('.new-tweet').on('keyup', 'textarea', function() {
    let textLength = 140 - (this.textLength);
    // $(this).siblings('.counter').text(textLength);
    $(this).parent().children('.counter').text(textLength);
    if (textLength < 0) {
      $(this).siblings('.counter').css('color', 'red');
    }
    else {
      $(this).siblings('.counter').css('color', 'black');
    }
  });
});
});