const express = require('express');
const router = express.Router();

router.use('/', require('./home.route'));
router.use('/admin', require('./admin.route'));
router.use('/tenant', require('./tenant.route'));
router.use('/auth', require('./auth.route'));

module.exports = router;