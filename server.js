const app = require("express")();

app.get('/', (req, res) => res.json({"greeting": "Hello there"}))

module.exports = app;