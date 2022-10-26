const passport = require('../authentication/passportAuthentication');

const authenticationMiddleware = passport.authenticate('oauth-bearer', {
  session: false,
});

module.exports = authenticationMiddleware;
