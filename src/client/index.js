const express = require('express'),ui = express(),port = 8080;
const App = require('./components/App');
const Start = require('./components/Start');

// require('./components/Posts')
    
ui.use(express.static('src/client/static'));

ui.get('/', (req, res) => {
    const html = Start('<h1>Hello World</1>');
    res.send(html);
})

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
