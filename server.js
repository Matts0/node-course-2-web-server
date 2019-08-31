const express = require('express');
const hbs = require('hbs');

var app = express ();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use((req, res, next) => {
  var now = new Date().toString();
  console.log(`${now}`);
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use( (req, res, next) => {
  res.render('maintenance.hbs')
});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  })

  //res.send('<h1>Hello Express!</h1>');
  // res.send( {
  //   name: 'Matt',
  //   likes: [
  //     'eSports',
  //     'MMA',
  //     'Fitness'
  //   ]
  // })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
