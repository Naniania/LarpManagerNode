// Dependencies
const Hapi = require('hapi');

// Configurations files
const parameters = require('./parameters');
const auth = require('./auth');
const routes = require('./routes');

const server = new Hapi.Server();
const plugins = [];
const options = {
    host: parameters.server.host,
    port: parameters.server.port
};
if (process.env.NODE_ENV === 'dev') {
    options.routes = {
        cors: true
    };
}
server.connection(options);

// Plugins management
plugins.push({ register: auth });
server.register(plugins, (err) => {
    if (err) {
        throw err;
    }
    server.route(routes);
});

module.exports = server;
