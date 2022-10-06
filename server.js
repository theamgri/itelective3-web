const express = require('express')
const app = express();
//app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
res.render('index.ejs');
 app.use( express.static( "views" ) ); // not sure if tama

});

app.get('/other', function (req, res) { //OTHER API
  app.use( express.static( "views" ) );
  res.render('other.ejs');
  

});
app.get('/index', function (req, res) { //OTHER API
  app.use( express.static( "views" ) );
  res.render('index.ejs');
  

});
var weather = require('weather-js');
weather.find({search: 'Davao, PH', degreeType: 'C'}, function(err, result) {
  weatherdata = result;
  
  if(err) {
   console.log(err) 
  }
  else {
  //console.log(JSON.stringify(result, null, 2)); 
  //console.log(weatherdata[0].forecast[0].skytextday)
  app.render('index', weatherdata);
  }
});
var fetchUrl = require("fetch").fetchUrl;


fetchUrl("https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork", function(error, meta, body){

meals= JSON.parse(body);
pork = meals;
app.render('other', pork);
console.log(pork);
});
//app.listen(8080);
console.log('Server is listening on port 8080');

app.listen(3000);