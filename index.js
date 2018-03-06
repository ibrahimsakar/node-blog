const   mongoose        = require("mongoose"),
        express         = require("express"),
        expressSession  = require("express-session");
        user            = require("./models/userModel"), 
        passport        = require("passport");
        localStrategy   = require("passport-local");
        bodyParser      = require("body-parser");
        app             = express();


//Routes
const indexRoute = require("./routes/indexRoute"),
      adminRoute = require("./routes/adminRoute"),
      blogRoute  = require("./routes/blogRoute");

//App Config
mongoose.connect("mongodb://localhost/Blog");
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//Passport Config
app.use(require("express-session")({
    secret: "Secret sentence",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

//Routes Using
app.use(indexRoute);
app.use(adminRoute);
app.use(blogRoute);


const server = app.listen(3000, (err) => {
    if(err){
        console.log(err);
    }
    console.log("App started. Port number %d", server.address().port);
});