const noAuthenticationMiddleware = (req, res, next) => {
  next();
};

module.exports = noAuthenticationMiddleware;
