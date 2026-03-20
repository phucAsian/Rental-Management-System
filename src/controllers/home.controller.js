const { rooms } = require('../data/mockData');

exports.home = (req, res) => {
  res.render('home/index', {
    layout: 'main',
    rooms
  });
};