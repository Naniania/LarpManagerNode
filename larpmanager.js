const server = require('./config/server');

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at ` + server.info.uri);
    if (process.env.NODE_ENV === 'dev') {
        console.log(`WARNING Development mode`);
    }
});
