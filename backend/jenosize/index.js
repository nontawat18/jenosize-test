const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const place = require("./routes/jenosize.route")
const apiKeyMiddleware = require('./middleware/apikey-middleware');

const multer = require('multer');


const app = express();



app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://localhost:8080",
        "http://localhost:8081",
    ],
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/jenosize", place)


app.get('/', (req, res, next) => {
    req.exemptFromApiKeyValidation = true;
    next();
}, (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.use((req, res, next) => {
    res.status(404).json({ message: "route not found" });
})

app.use((err, res, next) => {
    res.status(500).json({ message: "error 500 server error" });
})


module.exports = app;