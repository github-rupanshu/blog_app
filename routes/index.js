const express = require('express');
const router = express.Router();

console.log('router loaded');


/**
 * @swagger
 * /ping:
 *  get:
 *    description: Use to ping hosted server
 *    responses:
 *      '200':
 *        description: application deployed
 */

router.use('/api', require('./api'));

/**
 * @swagger
 * /ping:
 *  get:
 *    description: Use to ping hosted server
 *    responses:
 *      '200':
 *        description: application deployed
 */

router.get("/ping", (req, res) => {
    return res.status(200).json({
      msg: "Pong !!! You are currently pingging Blog backend api hosted on heroku ",
      github:"https://github.com/github-rupanshu/blog_app"
    });
  });
  

module.exports = router;