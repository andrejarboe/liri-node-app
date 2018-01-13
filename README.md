# Liri Bot
Built with Node.js, and npm packages: 
* twitter 
* request
* node-spotify-api
* fs (built into node)

## Overview 
LIRI is a _Language_ Interpretation and Recognition Interface node app that takes in parameters and gives you back data.

## How to run:
cd into the directory and run: node liri.js "command" "search term"
commands are:
   * `my-tweets`

   * `spotify-this-song` "song goes here"

   * `movie-this "movie goes here"`

   * `do-what-it-says`
   
   ### What Each Command Should Do

1. `node liri.js my-tweets`

   * This will show your last 20 tweets and when they were created at in your terminal/bash window.

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window
     
     * Artist(s)
     
     * The song's name
     
     * A preview link of the song from Spotify
     
     * The album that the song is from
     
   

