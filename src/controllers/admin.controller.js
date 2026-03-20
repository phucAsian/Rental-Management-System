exports.accounts = (req, res) => {
  const { accounts } = require('../data/mockData');

  res.render('admin/accounts', {
    layout: 'admin',   
    accounts,
    isAccounts: true
  });
};

exports.rooms = (req, res) => {
  res.render('admin/rooms', { layout: 'admin' });
};