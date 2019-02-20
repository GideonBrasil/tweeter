// $(document).ready(function() {
//     const textHandler = $('.new-tweet');
//     textHandler.on('keypress', (event) => {
//       console.log('This is the key pressed', event.key);
//     });
// });

$(document).ready(function() {
  $('.new-tweet').on('keypress', function() {
    console.log(this);
  });
});