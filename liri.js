//require
var twitter = require("twitter");
var request = require("request");

var keys = require("./keys.js");

var command = process.argv[2];

if (command === "my-tweets") {
  //twitter
  var twitterObj = new twitter(keys);
  var params = {
    q: "camelCasedBot",
    count: 20
  };

  twitterObj.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      for(var i = 0; i<20; i++){
        console.log(tweets[i].text);        
      }
    }
  });
} else if (command === "spotify-this-song") {
  

} else if (command === "movie-this") {
  var movieName = process.argv[3];
  var queryUrl =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  console.log(queryUrl);

  request(queryUrl, function(error, response, body) {
    
      // If the request is successful
      if (!error && response.statusCode === 200) {
    
        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).

        console.log("Title: " + JSON.parse(body).Title);        
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country: "+ JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);     
        console.log("Actors: " + JSON.parse(body).Actors);        
      }
    });

} else if (command === "do-what-it-says") {

}
