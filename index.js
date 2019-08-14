const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const app = express();

const user = require('./models/userModel');

// Routes
const indexRoute = require('./routes/indexRoute');
const adminRoute = require('./routes/adminRoute');
const blogRoute = require('./routes/blogRoute');

// App Config
mongoose.connect('mongodb://localhost/Blog', { useNewUrlParser: true });
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Config
app.use(require('express-session')({
    secret: 'Secret sentence',
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

// Routes Using
app.use(indexRoute);
app.use(adminRoute);
app.use(blogRoute);


const server = app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('App started. Port number %d', server.address().port);
});
