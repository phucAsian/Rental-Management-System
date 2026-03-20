const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { phone, password } = req.body || {};

  if (!phone || !password) {
    return res.send('Thiếu dữ liệu');
  }

  if (phone === '1234567890' && password === 'landlord') {
    return res.redirect('/admin');
  }

  if (phone === '0987654321' && password === 'tenant') {
    return res.redirect('/tenant');
  }

  return res.send('Sai tài khoản');
});

router.post('/login', (req, res) => {
  const { phone, password } = req.body || {};

  if (!phone || !password) {
    return res.send('Thiếu dữ liệu');
  }

  if (phone === '1234567890' && password === 'landlord') {
    return res.redirect('/admin');
  }

  if (phone === '0987654321' && password === 'tenant') {
    return res.redirect('/tenant');
  }

  return res.send('Sai tài khoản');
});


router.get('/logout', (req, res) => {
  res.redirect('/');
});
module.exports = router;