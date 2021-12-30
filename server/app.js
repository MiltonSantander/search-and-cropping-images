require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.get('/api', function (req, res) {
    console.log('se recibe un request tipo GET');
});

app.post('/api', function (req, res) {
    console.log('POST REQUEST RESPONSE');
    console.log(req.body.message);
    const url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDl4DnX9zf-QVaYfOyk3Im7GVnuMnaIlPA&cx=018342974445388584067:p09wcxjsirw&q=' + req.body.message;
    https.get(url, function (apiResponse) {
        let chunkAccumulator = '';

        apiResponse.on('data', function (chunk) {
            chunkAccumulator += chunk;
        });

        apiResponse.on('end', function () {
            let apiData = JSON.parse(chunkAccumulator);
            let srcArray = [];
            apiData.items.map(function (value, index) {
                if ('pagemap' in value) {
                    let pageMap = value.pagemap;
                    if ('cse_image' in pageMap) {
                        let cseImage = pageMap.cse_image[0];
                        if ('src' in cseImage) {
                            if (!cseImage.src.includes('x-raw-image:')) {
                                let src = cseImage.src;
                                let srcObject = {};
                                srcObject['id'] = index;
                                srcObject['src'] = src;
                                srcArray.push(srcObject);
                            }
                        }
                    }
                }
            });
            res.send(srcArray);
        });

    }).on('error', function (error) {
        console.log('ERROR' + error.message);
    });
});

app.listen(PORT, function () {
    console.log('Server is running on ' + PORT);
}); 