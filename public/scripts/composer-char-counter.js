$(document).ready(function() {
  $('.new-tweet').on('keypress', 'textarea', function() {
    textLength = 140 - (this.textLength);
    console.log(textLength);
  });
});