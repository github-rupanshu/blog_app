const express = require('express');
const router = express.Router();
const blogController = require('../../../controllers/api/v1/blog_controller');
const Blog =require("../../../models/blog")
const {canDeleteBlog}=require("../../../permissions/blog")

const passport = require("passport");

router.post('/create', passport.authenticate("jwt", {
    session: false
}), blogController.createBlog);

router.get('/get', passport.authenticate("jwt", {
    session: false
}), blogController.getAllBlogs);

router.get('/get/:id', passport.authenticate("jwt", {
    session: false
}), blogController.getBlog);

router.get('/gettitle/:title', passport.authenticate("jwt", {
    session: false
}), blogController.getByTitle);


router.delete('/destroy/:id', passport.authenticate("jwt", {
    session: false
}),setBlog,authDeleteBlog, blogController.destroy);

router.put('/update/:id', passport.authenticate("jwt", {
    session: false
}), blogController.updateBlog);


module.exports = router;

function setBlog(req, res, next) {

    req.blog = Blog.findById(req.params.id);
    
    if (req.blog.id == null) {
      res.status(404)
      return res.send('Blog not found')
    }
    next()
  }

  function authDeleteBlog(req, res, next) {
    if (!canDeleteBlog(req.user, req.blog)) {
      res.status(401)
      return res.send('Not Allowed')
    }
  
    next()
  }
  
  