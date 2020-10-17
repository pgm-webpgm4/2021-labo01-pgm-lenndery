/**
 * The Server
 * 
 * TODO: add error catching
 */
const express = require('express'), api = express(), port = 5050;
module.exports = api;

api.use(express.json());
api.use(express.urlencoded({
    extended: true
}));

require('./api/Author');
require('./api/Blog');

const startServer = () => {
    return new Promise((resolve, reject) => {
        console.log("Starting the server...");

        api.listen(port, (err) => {
            if (err) reject();
            else {
                resolve();
                console.log(`api listening at http://localhost:${port}`)
            }
        })
    })
}

module.exports = {
    startServer
};