//require
var twitter = require("twitter");
var request = require("request");
var Spotify = require("node-spotify-api");
var fs = require('fs');


var keys = require("./keys.js");

var command = process.argv[2];

/*
****************************************/

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
      for (var i = 0; i < 20; i++) {
        console.log(tweets[i].text);
      }
    }
  });
} else if (command === "spotify-this-song") {
  var songName = process.argv[3];
  var artist = "";

  var spotify = new Spotify({
    id: "c4b43d807d6446e283c8bd1668080d02",
    secret: "6a11da9292694fdfa37beb1732df6c0f"
  });

  if(!songName){
    songName = "The Sign Ace of Base";
    artist = "Ace of Base";
  }

  spotify.search({ type: "track", query: songName}, function(
    err,
    data
  ) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    
    console.log("Artist(s): " +data.tracks.items[0].album.artists[0].name);
    console.log("The song's name: " +data.tracks.items[0].name);
    console.log("Song preview: " +data.tracks.items[0].preview_url);
    console.log("Album: " +data.tracks.items[0].album.name);    
  });

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
      console.log(
        "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value
      );
      console.log("Country: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
    }
  });
} else if (command === "do-what-it-says") {
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
  
    // Break the string down by comma separation and store the contents into the output array.
    var output = data.split(",");
  
    // Loop Through the newly created output array
    for (var i = 0; i < output.length; i++) {

      if(output[0]=== "spotify-this-song"){
        var songName = output[1];
        var artist = "";
      
        var spotify = new Spotify({
          id: "c4b43d807d6446e283c8bd1668080d02",
          secret: "6a11da9292694fdfa37beb1732df6c0f"
        });
      
        if(!songName){
          songName = "The Sign Ace of Base";
          artist = "Ace of Base";
        }
      
        spotify.search({ type: "track", query: songName}, function(
          err,
          data
        ) {
          if (err) {
            return console.log("Error occurred: " + err);
          }
          
          console.log("Artist(s): " +data.tracks.items[0].album.artists[0].name);
          console.log("The song's name: " +data.tracks.items[0].name);
          console.log("Song preview: " +data.tracks.items[0].preview_url);
          console.log("Album: " +data.tracks.items[0].album.name);    
        });
      }
    }
  });
}
