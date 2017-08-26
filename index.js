'use strict';

var http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.get('/linkget', function (req, res) 
{
  res.send('Get Response')
});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
