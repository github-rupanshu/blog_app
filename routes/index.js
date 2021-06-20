const express = require('express');
const router = express.Router();

console.log('router loaded');


router.use('/api', require('./api'));

router.get("/ping", (req, res) => {
    return res.status(200).json({
      msg: "Pong !!! You are currently pingging Blog backend api hosted on heroku ",
      github:"https://github.com/github-rupanshu/blog_app"
    });
  });
  

module.exports = router;