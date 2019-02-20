$(document).ready(function() {
    const textHandler = $('.new-tweet');
    textHandler.on('keypress', (event) => {
      console.log('This is the key pressed', event.key);
    });
});