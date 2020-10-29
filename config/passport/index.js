import passportJwt from 'passport-jwt';
import ReadBusinessService from '../../businessServices/user/read.js';
import logger from '../../utils/logging/logger.js';

const { Strategy: JwtStrategy, ExtractJwt } = passportJwt;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';

// create jwt strategy
module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        const service = new ReadBusinessService();
        const user = await service.getById(jwt_payload.id);
        if (user) return done(null, user);
        return done(null, false);
      } catch (err) {
        logger.error(err);
        throw err;
      }
    }),
  );
};
