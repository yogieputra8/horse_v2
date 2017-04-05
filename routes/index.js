var express = require('express');
var router = express.Router();
var http = require("http");
var https = require("https");
var fs = require('fs');
var Hogan = require("hogan.js");
var cookieParser = require('cookie-parser')
var _ = require('underscore');



var bodyParser = require('body-parser');
router.use(bodyParser.json()); // to support JSON bodies
router.use(bodyParser.urlencoded({ extended: true }));

var multer = require("multer");
var upload = multer({ dest: 'public/upload/' });




router.route('/')
    .get(function(req, res, next) {
        res.render('index', { 
        })
    })
    .post(function(req, res, next) {

    });


router.route('/about')
    .get(function(req, res, next) {
        res.render('about', { 
        })
    })
    .post(function(req, res, next) {

    });







module.exports = router;
