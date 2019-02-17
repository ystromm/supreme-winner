const express = require('express')

const app = express()
const port = 8080

app.get('/tweets', async (req, res, next) => {
    try {
        res.json({});
    }
    catch (e) {
        next(e);
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))