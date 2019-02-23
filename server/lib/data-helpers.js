"use strict";


// Defines helper functions for saving and getting tweets, using the mongo database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves tweets to `db` now "mongodb"
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet);
      callback(null, true);
      
    },

    // Get all tweets in `mongodb`, sorted by newest first
    getTweets: function(callback) {
      db.collection("tweets").find().toArray((err, tweets) => {
      if (err) {
        throw err;
      }
        const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        callback(null, tweets.sort(sortNewestFirst));
      });
    }
  }
};
