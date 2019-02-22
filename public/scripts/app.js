/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

// make js in the DOM only load once the client is ready
$(() => {

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

function createTweetElement(data) {
	return `
		<article class="tweet">
			<header class="tweet-header">
				<img class="avatar" src="${data.user.avatars.small}" />
				<h2>${(data.user.name)}</h2>
				<span>@${escape(data.user.handle)}</span>
			</header>
			<section class="tweet-section">
				<p>${escape(data.content.text)}</p>
			</section>
			<footer class="tweet-footer">
        <p>${new Date(data.created_at).toLocaleString()}<i class="fas fa-heart"></i><i class="fas fa-retweet"></i><i class="fas fa-flag"></i></p>
			</footer>
		</article>`
}

// pass each tweet from array as object
function renderTweets(newData) {
	for (let tweet of newData) {
		$('#tweet-container').prepend(createTweetElement(tweet));
	}
}

$( "#submit" ).submit(function(event) {
  event.preventDefault();
    var newTweet = $(this).serialize();
    if ($('textarea').val() === "" || $('textarea').val() === null) {
      $('.error').text('You didn\'t fill out your tweet.').slideToggle('fast');
    } else if ($('.counter').text() < 0) {
      $('.error').text('Only 140 character tweets are allowed. Keep your tweets short and to the point').slideToggle('fast');
    } else {
      $.post('/tweets/', newTweet, function (data) {
        $('#tweet-container').prepend(createTweetElement(data));
        $('#submit')[0].reset();
        $('.counter').text(140);
      });
    }
});

function loadTweets() {
  $.get('/tweets/').then(function (newData) {
    renderTweets(newData);
  })
}

loadTweets();

$('.button').click(function () {
  $('.new-tweet').slideToggle('fast');
  $('#newTweetTextArea').focus();
});
 
});