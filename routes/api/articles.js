const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//model
const Article = require("../../models/Article");

// @route POST api/test
// @desc Test GET
// @access Public
router.get("/test", (req, res) => res.json({ msg: "it works" }));


// @route POST api/articles/save
// @desc save new article
// @access Public

router.post("/save", (req, res) => {
    const newArticle = new Article({
        headline: req.body.headline,
        snippet: req.body.snippet,
        published_date: req.body.published_date,
        url: req.body.url
    });

    newArticle.save().then(articles => res.json(articles))
});

// @route GET api/articles
// @desc get all articles
// @access Public
router.get("/", (req, res) => {
    Article.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(404).json({noarticles: "No articles were found"}));
});


module.exports = router;
