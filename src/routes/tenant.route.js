const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/tenant/requests');
});

router.get('/requests', (req, res) => {
  const { tenantRequests } = require('../data/mockData');

  res.render('tenant/requests', { 
    layout: 'tenant', 
    requests: tenantRequests,
    isRequests: true
  });
});

router.get('/rooms', (req, res) => {
  const { currentRoom, adminRooms } = require('../data/mockData');
  
  const availableRooms = adminRooms.filter(room => room.status === 'Available');

  res.render('tenant/rooms', { 
    layout: 'tenant',
    currentRoom,
    availableRooms,
    isRooms: true 
  });
});

module.exports = router;