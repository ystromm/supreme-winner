const Promise = require("bluebird");

if (process.argv.length != 3) {
    console.log("Need an API key!");
    process.exit(-1);
}

const apiKey = process.argv[2];

const twitter = require('./twitter')(apiKey);
const words = require('./words')();


const express = require('express')
const app = express()
const port = 8080

app.get('/search', async (req, res, next) => {
    try {
        const q = req.query.q;
        const texts = await twitter.texts(q)
            .then(texts => words.histogram(texts));
        res.json(texts);
    }
    catch (e) {
        next(e);
    }
})

app.listen(port, () => console.log(`Listening on port ${port}!`))