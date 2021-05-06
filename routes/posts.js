const express = require("express");
const router = express.Router();

// import the model that i want to post to
// its actually the collection in the DB
const Post = require("../models/Posts");

router.get('/', async (req, res)=> {

    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (err) {
        res.json({message: err})
    }
})

// req.headers
// req.body
// need a body parser to parse request
router.post("/", async (req, res) => {
  console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    console.log(savedPost);
    res.json(savedPost); 
} catch (error) {
    res.status(400).send(error)
}

});

module.exports = router;
