const HapiAuthJwt = require('hapi-auth-jwt2');
const parameters = require('./parameters');
const Moment = require('moment');

function validate (decoded, request, cb) {
    if (process.env.NODE_ENV === 'test') {
        return cb(null, true);
    }

    const diff = Moment().diff(Moment(decoded.exp * 1000));
    if (decoded.account_id) {
        if (diff > 0) {
            return cb(null, false);
        } else {
            return cb(null, true);
        }
    } else {
        return cb(null, false);
    }
}

const register = (server, options, next) => {
    server.register(HapiAuthJwt, (err) => {
        if (err) {
            return next(err);
        }

        server.auth.strategy('jwt', 'jwt', true, {
            key: parameters.key.privateKey,
            validateFunc: validate,
            verifyOptions: {
                ignoreExpiration: false,
                algorithms: ['HS256']
            }
        });
        return next();
    });
};

register.attributes = {
    name: 'auth',
    version: '1.0.0'
};

module.exports = register;
