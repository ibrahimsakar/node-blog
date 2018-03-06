const   express     = require("express"),
        Blog        = require("../models/blogModel"),
        router      = express.Router();

router.get("/addNewBlog", (req, res) => {
    res.render("blog/newBlog");
});

router.post("/addNewBlog", (req, res) => {
    const { 
        blogTitle, 
        comSentence: commercialTitle, 
        comImage: commercialImage, 
        contentText
    } = req.body.data;

    const blogContent = { blogTitle, commercialTitle, commercialImage, contentText }
    
    Blog.create(blogContent)
        .then((newBlog) => {
            console.log(newBlog);
            res.status(201).json(newBlog);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
});

router.get("/testing", (req, res) => {
    Blog.find()
        .then((foundBlogs) => {
            res.json(foundBlogs);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
});

module.exports = router;