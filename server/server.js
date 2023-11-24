const express = require("express");
const app = express();
const port = 5000;
const path = require('path');

app.use(express.static(path.join(__dirname, '/..'), {index: '/public/index.html'}));
app.use(express.json({limit: '50mb'}));

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.listen(port, function () {
    console.log('Listening on port', port);
});