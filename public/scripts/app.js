/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/
// Test / driver code (temporary). Eventually will get this from the server.
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];


// creates tweet element 
// pass in rendered tweet into template

// make js in the DOM only load once the client is ready
$(() => {

function createTweetElement(data) {
	return `
		<article class="tweet">
			<header class="tweet-header">
				<img class="avatar" src="${data.user.avatars.small}" />
				<h2>${data.user.name}</h2>
				<span>@${data.user.handle}</span>
			</header>
			<section class="tweet-section">
				<p>${data.content.text}</p>
			</section>
			<footer class="tweet-footer">
				<p>${data.created_at}</p>
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
      alert('You didn\'t fill out your tweet.');
    } 
    else if ($('.counter').text() < 0) {
      alert('Only 140 character tweets are allowed. Keep your tweets short and to the point');
    } else {
      $.post('/tweets/', newTweet, function (data) {
        $('#tweet-container').prepend(createTweetElement(data));
      });
    }
});

function loadTweets() {
  $.get('/tweets/').then(function (newData) {
    renderTweets(newData);
  })
}

loadTweets();

});