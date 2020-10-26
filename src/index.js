/**
 * Wrap the app together with server & client
 */

const api = require('./server');
const { startServer } = require('./server');
// const { startClient } = require('./client');

/**
 * Run the server, once started, start the client
 */

startServer().then(() => { 
    // startClient() 
})