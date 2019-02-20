$(document).ready(function() {
  $('.new-tweet').on('keypress', 'textarea', function() {
    let textLength = 140 - (this.textLength);
    console.log(textLength);
    let counter = $(this).siblings('.counter').text(textLength);
    console.log('counter:', counter);
    // $(counter).text 
  });
});