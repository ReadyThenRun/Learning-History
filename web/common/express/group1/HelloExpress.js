const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello Express.JS Framework!");
});

const server = app.listen(8000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`The app listening at http://${host}:${port}`);
})