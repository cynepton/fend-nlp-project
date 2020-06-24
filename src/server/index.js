const dotenv = require('dotenv')
dotenv.config();

var path = require('path')
const express = require('express')
const bodyParser =  require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const cors = require("cors")
var aylien = require('aylien_textapi')
const app = express()

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

console.log(`Your API ID is ${process.env.API_ID}`);
console.log(`Your API KEY is ${process.env.API_KEY}`);
console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

let articleContent = {};
app.post("/data", function (req, res) {
    textapi.sentiment(
      {
        url: req.body.test,
      },
      (error, response) => {
        if (error == null) {
          articleContent = {
            text: response.text,
            polarity: response.polarity,
            subjectivity: response.subjectivity,
            polarity_confidence: response.polarity_confidence,
            subjectivity_confidence: response.subjectivity_confidence,
          };
          res.send(articleContent);
          console.log(articleContent);
        } else {
          console.log("Error", error);
        }
      }
    );
  });

