const express = require('express')

const app = express()
const port = 8080

if (process.argv.length != 3) {
    console.log("Need an API key!");
    process.exit(-1);
}

const key = process.argv[0];

app.get('/tweets', async (req, res, next) => {
    try {
        res.json({});
    }
    catch (e) {
        next(e);
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))