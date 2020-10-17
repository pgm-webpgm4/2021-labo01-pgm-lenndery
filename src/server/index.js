/**
 * The Server
 * 
 * TODO: add error catching
 */

// import and define api
const express = require('express'), api = express(), port = 5050;
module.exports = api;

// set handlers
api.use(express.json());
api.use(express.urlencoded({
    extended: true
}));

// import api handlers
require('./routes/author');
require('./routes/blog');

// start server
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

// module.exports = {
//     startServer
// };

startServer();