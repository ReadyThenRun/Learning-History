const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');

var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

app.use(express.static(path.join(__dirname, './../public')));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(multer({
    dest: '/tmp/'
}).single('file'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/process_get', (req, res) => {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };

    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/process_post', urlencodedParser, (req, res) => {
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };

    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/file_upload', function (req, res) {
    console.log(req.file.filename);
    console.log(req.file);
    // console.log(req.file.type);
    var file = path.join(__dirname, "./../public/files/" + req.file.originalname);
    var filename = path.join(__dirname, "./../public/tmp/" + req.file.originalname);

    fs.readFile(file, (err, data) => {
        if (err) {
            throw err;
            console.log(err);
        } else {
            fs.writeFile(filename, data, (err) => {
                if (err) throw err;
                console.log('Saved!');
            });
        }

    });
});





const server = app.listen(8000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`The app listening at http://${host}:${port}`);
});
