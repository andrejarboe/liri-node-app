//require 
var keys = require("./keys.js");
var twitterKeys = require('twitter');
var command = process.argv[2];


/* Functions
*******************************/


if(command === 'my-tweet'){
  console.log('im here');
  var params = {
    screen_name: 'nodejs'
  };

  twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });

}else if(command === 'spotify-this-song'){

}else if(command === 'movie-this'){
  
}else if(command === 'do-what-it-says'){
    
}