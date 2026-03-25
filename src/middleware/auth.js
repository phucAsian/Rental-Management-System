module.exports = {
  ensureAuthenticated: (req, res, next) => {
    if (req.session && req.session.user) return next();
    return res.redirect('/');
  },

  ensureRole: (role) => (req, res, next) => {
    if (req.session && req.session.user && req.session.user.role === role) return next();
    return res.status(403).send('Không có quyền truy cập');
  }
};
