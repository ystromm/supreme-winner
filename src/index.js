const express = require('express')

const app = express()
const port = 8080

if (process.argv.length != 3) {
    console.log("Need an API key!");
    process.exit(-1);
}

const key = process.argv[2];

app.get('/search', async (req, res, next) => {
    try {
        res.json({key: key});
    }
    catch (e) {
        next(e);
    }
})

app.listen(port, () => console.log(`Listening on port ${port}!`))