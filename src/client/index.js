/**
 * The Web Client
 */

const express = require('express'),
    ui = express(),
    port = 8080;

ui.get('/', (req, res) => {
    res.send('<h1>Hello World</1>')
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

module.exports = {
    startClient
};