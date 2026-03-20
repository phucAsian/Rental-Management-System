const express = require('express');
const router = express.Router();
const rooms = require('../data/mockData').adminRooms;

router.get('/', (req, res) => {
  res.render('home/index', {
    rooms
  });
});

module.exports = router;