const Router = require("express").Router();
const moment = require('moment');
const config = require("../config");
const Twit = require("twit");
const T = new Twit(config)


//dummy Data
const Friends = require("../friends").users;
const DMs = require("../DMs").events;
const Tweets = require("../tweets");
const User = Tweets[0].user

Router.get("/", (req,res, next)=>{
  // get the tweets first, when the data finish loading, then get the friends list, after the data -
  // finish loading, get the direct messages and again when the data finish loading,  -
  // then render the page with all the information retrieved passed to it =)
  // T.get('statuses/user_timeline',{count:5},function(err, Tweets, response) {
  //   if(err){
  //     console.log(err)
  //     err.message = "there was an Error retrieving data from your Tweets";
  //     return next(err)
  //   }else{
  //     const User = Tweets[0].user;
  //     ChangeTheDateFormatOfTweets(Tweets);
  //     T.get('friends/list',{count:5}, function(err, friends_data, response) {
  //       if(err){
  //         console.log(err)
  //         err.message = "there was an Error retrieving data from your friends list";
  //         return next(err)
  //       }else{
  //         const Friends = friends_data.users;
  //         T.get('direct_messages/events/list',{count:5}, function(err, direct_messages_data, response) {
  //           if(err){
  //             console.log(err)
  //             err.message = "there was an Error retrieving ,messages from your DM";
  //             return next(err)
  //           }else{
  //             const DMs = direct_messages_data.events;
  //             ChangeTheTimeFormatOfDMs(DMs);
  //             res.render("xxx", {Tweets,DMs,Friends,User})
  //           }//else Dms
  //         })//get_DMs
  //       }//else_friends
  //     })//get_friends
  //   }//else of timeline
  // })//get_timeline
  console.log("connected");
  ChangeTheTimeFormatOfDMs(DMs);
  ChangeTheDateFormatOfTweets(Tweets);
  res.render("xxx", {Tweets,DMs,Friends,User})
});

Router.post("/updateStatues", (req,res)=>{
  console.log("I have tweeted: " + req.body.tweet)
  // T.post('statuses/update', { status: req.body.tweet}, function(err, data, response) {
  //   if(err){
  //     console.log(err)
  //   }else{
  //     console.log("I have tweeted: " + req.body.tweet)
  //     res.send("It wunt work if i dont have you here ")
  //
  //   }
  // })
 })

Router.use((req,res,next) =>{
  // if it makes it this far, then there is a 404 error
  const err = new Error("404: Page Not Found");
  next(err);
})
Router.use((err,req,res,next) =>{
  console.log("Error Error Error is  ccgoing on ")
  res.locals.error = err
  res.render("error")
})

//-------------functions----------------///

// returns a calendar format of the date using moment
function changeTimeFromTwitter(TwitterTime){
  const time = moment(TwitterTime, "ddd MMM DD HH:mm:ss Z YYYY").format()
  return moment(time).calendar()
}

// changes the format of the date & time for each tweet
function ChangeTheDateFormatOfTweets(Tweets){
  if(Tweets.length > 0){
    for (var i = 0; i < Tweets.length; i++) {
      // SET  A NEW PROPERTY AND USE THAT FOR THE TIME TO DISPLAY
      let timeFromTwitterApi = Tweets[i].created_at
        Tweets[i].newPropertyForTweetTime = changeTimeFromTwitter(timeFromTwitterApi)
    }
  }
}

// CHANGES THE TIME FORMAT OF THE DM TIME
function ChangeTheTimeFormatOfDMs(DMs){
  if(DMs.length > 0){
    for (var i = 0; i < DMs.length; i++) {
      let timeforDms = DMs[i].created_timestamp
      // SET  A NEW PROPERTY AND USE THAT FOR THE TIME TO DISPLAY
        DMs[i].newPropertyForDmTime = moment(timeforDms, "x").calendar()
    }
  }
};


module.exports = Router;
