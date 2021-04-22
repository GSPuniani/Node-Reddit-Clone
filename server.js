// Require Libraries
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
// Set db
require('./data/reddit-db');

// App Setup
const app = express();
require('./controllers/posts.js')(app);

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());

// Middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
    res.render("home")
});

app.get('/posts/new', (req, res) => {
  // Render the new-posts view
  res.render('posts-new');
})

// Start Server

app.listen(3000, () => {
  console.log('RedditJS listening on port localhost:3000!');
});