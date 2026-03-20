const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/admin/rooms');
});

router.get('/rooms', (req, res) => {
  const { adminRooms } = require('../data/mockData');

  res.render('admin/rooms', { 
    layout: 'admin',
    rooms: adminRooms, 
    isRooms: true 
  });
});

router.get('/tenants', (req, res) => {
  const { tenants } = require('../data/mockData');

  res.render('admin/tenants', { 
    layout: 'admin',
    tenants, 
    isTenants: true 
  });
});

router.get('/accounts', (req, res) => {
  const accounts = require('../data/mockData').accounts;

  res.render('admin/accounts', {
    layout: 'admin',
    accounts,
    isAccounts: true
  });
});
router.get('/payments', (req, res) => {
  const { payments } = require('../data/mockData'); 

  res.render('admin/payments', { 
    layout: 'admin',
    payments, 
    isPayments: true 
  });
});

router.get('/requests', (req, res) => {
  const { requests } = require('../data/mockData'); 
  res.render('admin/requests', { 
    layout: 'admin',
    requests, 
    isRequests: true 
  });
});

router.get('/revenue', (req, res) => {
  const { revenue } = require('../data/mockData'); 
  res.render('admin/revenue', { 
    layout: 'admin',
    revenue, 
    isRevenue: true 
  });
});

module.exports = router;