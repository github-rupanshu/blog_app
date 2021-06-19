const express = require('express');

const router = express.Router();

router.use('/blog', require('./blogs'));
router.use('/user', require('./users'));

module.exports = router;