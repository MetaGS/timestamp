// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();



var month = ['January','February','March','April','May','June','Jule','August','September','October','November','December'];
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/dreams", function (request, response) {
  dreams.push(request.path);
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

app.use('/:date',function(req,res,next){
  console.log(req.path);
  if(req.url === '/'){
    const date = req.params.date;
    //if(Number(date)===NaN){
    var obj = new Date(date);
   
    if(!isNaN(date)){
    var obj1 = new Date(Number(date));
    var obj = obj1;
    console.log('it works',obj1);
    }
    var hours = obj;
    var js = {
    unix : hours.getTime(),
    natural: month[Number(hours.getMonth())]+' '+hours.getDay()+', '+ hours.getFullYear()
    }
    if(!js.unix) js.natural = null;
    res.json(js);
  } else {
    res.send('no such path here bro');
  }
})

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
