const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

router.use('/', htmlRoutes);
router.use('/', apiRoutes);

module.exports = router;