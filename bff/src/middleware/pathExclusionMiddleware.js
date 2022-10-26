const pathExclusionMiddleware = exceptionPaths => middleware => (req, res, next) => {
  if (exceptionPaths.includes(req.path)) {
    next();
  } else {
    middleware(req, res, next);
  }
};

module.exports = pathExclusionMiddleware;
