require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/api', function (req, res) {
    res.json({ message: "Hello from server!" });
    // res.sendFile(__dirname + '/index.html');
});

app.post('/api', function (req, res) {
    console.log("se recibe un resquest tipo post");
    const url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDl4DnX9zf-QVaYfOyk3Im7GVnuMnaIlPA&cx=018342974445388584067:p09wcxjsirw&q=' + req.body.input;
    https.get(url, function (apiResponse) {
        let chunkAccumulator = '';

        apiResponse.on('data', function (chunk) {
            chunkAccumulator += chunk;
        });

        apiResponse.on('end', function () {
            let apiData = JSON.parse(chunkAccumulator);
            let srcArray = [];
            apiData.items.map(function (item) {
                srcArray.push(item.pagemap.cse_image[0].src);
            });
            res.write("todo ok por aqui");
            console.log(srcArray);
            res.send();
        });

    }).on('error', function (error) {
        console.log('ERROR' + error.message);
    });
});

app.listen(PORT, function () {
    console.log('Server is running on '+PORT);
}); 