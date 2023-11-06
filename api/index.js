const router = require('express').Router();
module.exports = router;


router.use('/posts', require('./posts'));
// router.use('/auth', require('./auth'));