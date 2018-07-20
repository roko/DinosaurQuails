// Utilities for session care
const createSession = (req, res, newUser) => {
  return req.session.regenerate(() => {
    req.session.user = newUser;
    res.redirect('/');
  });
};

const isLoggedIn = (req, res) => {
  return req.session ? !!req.session.user : false;
};

const checkUser = (req, res, next) => {
  if (!exports.isLoggedIn(req)) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports.createSession = createSession;
module.exports.isLoggedIn = isLoggedIn;
module.exports.checkUser = checkUser;
