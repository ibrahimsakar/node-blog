const express = require('express');
const Blog = require('../models/blogModel');

const router = express.Router();

router.get('/addNewBlog', (req, res) => {
    res.render('blog/newBlog');
});

router.post('/addNewBlog', (req, res) => {
    const {
        blogTitle,
        comSentence: commercialTitle,
        comImage: commercialImage,
        contentText,
    } = req.body.data;

    const blogContent = { blogTitle, commercialTitle, commercialImage, contentText };

    Blog.create(blogContent)
        .then((newBlog) => {
            res.status(201).json(newBlog);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get('/testing', (req, res) => {
    Blog.find()
        .then((foundBlogs) => {
            res.json(foundBlogs);
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;
