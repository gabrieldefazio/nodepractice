console.log('The bot is starting.');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

T.get('followers/ids', { screen_name: 'morismaris' },  function (err, data, response) {
    if(err) console.log('something went wrong');
    console.log(data.length);
});

function tweetIt(){
    var r = Math.floor(Math.random()*100);
    var tweet = {
        status: 'here is a random number: ' + r
    }
    T.post('statuses/update', tweet, (err, data, response)=>{
        if (err) console.log('whoops!')
        else console.log('Yay!')
    });
}

tweetIt()