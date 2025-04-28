function authenticate(req, res, next) {
  console.log('Authentication middleware called');
  next();
}

module.exports = { authenticate };