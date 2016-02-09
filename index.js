var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var PORT = process.env.PORT || 8080;
var icecreams = [ {name: 'vanilla', price: 10, awesomeness: 3},
 {name: 'chocolate', price: 4, awesomeness: 8},
  {name: 'banana', price: 1, awesomeness: 1},
   {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2}, ]; 

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

  app.get('/chocolate', function(req, res) {
    var data = {
      name: 'chocolate',
      price: 4,
      awesomeness: 8
    }
  res.render('home', data);
  console.log(data.name);
});

  app.get('/banana', function(req, res) {
    var data = {
      name: 'banana',
      price: 1,
      awesomeness: 1
    }
  res.render('home', data);
  console.log(data.name);
});

  app.get('/greentea', function(req, res) {
    var data = {
      name: 'greentea',
      price: 5,
      awesomeness: 7
    }
  res.render('home', data);
  console.log(data.name);
});

  app.get('/jawbreakers', function(req, res) {
    var data = {
      name: 'jawbreakers',
      price: 6,
      awesomeness: 2
    }
  res.render('home', data);
  console.log(data.name);
});


app.listen(PORT, function() {
  console.log("App listening on port %s", PORT);
});
