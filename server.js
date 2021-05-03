// Require Libraries
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');


// App Setup
const app = express();

// Use Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());

app.use(cookieParser()); // Add this after you initialize express.



// Middleware
const exphbs  = require('express-handlebars');
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Handlebars.registerPartial('navbar');

// Routes
// app.get('/', (req, res) => {
//     res.render("home")
// });

app.get('/posts/new', (req, res) => {
  // Render the new-posts view
  res.render('posts-new');
})

// Controllers
require('./controllers/posts.js')(app);
require('./controllers/comments.js')(app);
require('./controllers/auth.js')(app);

// Set db
require('./data/reddit-db');

// Start Server
app.listen(3000, () => {
  console.log('RedditJS listening on port localhost:3000!');
});


// Export app for mocha testing
module.exports = app;