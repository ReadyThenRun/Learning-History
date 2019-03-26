const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello Express.JS Framework!");
});
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
})
app.get('/ab*cd', function (req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
})


const server = app.listen(8000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`The app listening at http://${host}:${port}`);
})
