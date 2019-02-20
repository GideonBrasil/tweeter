$(document).ready(function() {
  let textLength;
  $('.new-tweet').on('keypress', 'textarea', function() {
    textLength = 140 - (this.textLength);
    $('.counter') 
    console.log(textLength);
  });
});