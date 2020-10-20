const express = require('express'),ui = express(),port = 8080;

// require('./components/Posts')
    
ui.use(express.static('src/client/static'));

const startClient = () => {
    return new Promise((resolve, reject) => {
        console.log("Starting the client...");

        ui.listen(port, (err) => {
            if (err) reject()
            else {
                resolve()
                console.log(`UI listening at http://localhost:${port}`)
            }
        })
    })
}

startClient();

// module.exports = {
//     startClient
// };
