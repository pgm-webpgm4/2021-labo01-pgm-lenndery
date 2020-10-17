const App = require("../App")

module.exports = Start = (content) => {
    return App(`
        <div class="container">
            ${content}
        </div>
    `)
}