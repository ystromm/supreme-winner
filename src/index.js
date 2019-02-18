if (process.argv.length != 3) {

    console.log("Need a token!");
    process.exit(-1);
}
const apiKey = process.argv[2];

const twitter = require('./twitter')(apiKey);

const words = require('./words')();
const AsyncLock = require('async-lock');
const lock = new AsyncLock({maxPending: 3});


const express = require('express')
const app = express()
const port = 8080

app.get('/search', async (req, res, next) => {
    try {
        const q = req.query.q;
        const texts = await lock.acquire('twitter', () => twitter.texts(q))
            .then(texts => words.histogram(texts));
        res.json(texts);
    }
    catch (e) {
        next(e);
    }
})

app.listen(port, () => console.log(`Listening on port ${port}!`))