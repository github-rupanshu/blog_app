const express = require('express');
const router = express.Router();
const blogController = require('../../../controllers/api/v1/blog_controller');
//const verify = require('../../../middlewares/checkAuth');
const passport = require("passport");

router.post('/create', passport.authenticate("jwt", {
    session: false
}), blogController.createBlog);

router.get('/get', passport.authenticate("jwt", {
    session: false
}), blogController.getBlog);

router.get('/destroy/:id', passport.authenticate("jwt", {
    session: false
}), blogController.destroy);

router.post('/update/:id', passport.authenticate("jwt", {
    session: false
}), blogController.updateBlog);

module.exports = router;