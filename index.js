'use strict';

var http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
    
    var url = "http://smarthome2707.ddns.net/wapi/"    
    http.get(url, function(response) {
          var finalData = "";

          response.on("data", function (data) {
            finalData += data.toString();
          });

          response.on("end", function() {
            console.log(finalData.length);
            console.log(finalData.toString());
          });
    });
});


restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
