const Promise = require("bluebird");

if (process.argv.length != 3) {
    console.log("Need an API key!");
    process.exit(-1);
}

const apiKey = process.argv[2];

const twitter = require('./twitter')
const tweets = twitter(apiKey)

const express = require('express')
const app = express()
const port = 8080

app.get('/search', async (req, res, next) => {
    try {
        const statuses = await tweets.search("#HIF");
        res.json(statuses.map(status => status.text));
    }
    catch (e) {
        next(e);
    }
})

app.listen(port, () => console.log(`Listening on port ${port}!`))