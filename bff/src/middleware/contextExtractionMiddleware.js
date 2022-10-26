const extractBearerToken = (request) => {
  const authHeader = request.get('Authorization') || '';
  return authHeader.replace('bearer ', '');
};

const contextExtractionMiddlware = (req, res, next) => {
  res.locals.authorizationToken = extractBearerToken(req);
  next();
};

module.exports = contextExtractionMiddlware;
