const   express     = require("express"),
        User        = require("../models/userModel"),
        passport    = require('passport'),
        router      = express.Router();

let adminActions = [
    {
        actionId: 1,
        actionName: "changeAboutContent",
        displayName: "Change About Content"
    },
    {
        actionId: 2,
        actionName: "addNewBlog",
        displayName: "Add New Blog"
    },
    {
        actionId: 3,
        actionName: "listAllBlogs",
        displayName: "List All Blogs"
    }
];

router.get("/admin", (req, res) => {
    res.render("admin/admin", {adminActions: adminActions});
});

router.get("/signin", (req, res) => {
    res.render("admin/signin");
});

router.post("/signin", passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/signin"
    }), (req, res) => {
});

module.exports = router;