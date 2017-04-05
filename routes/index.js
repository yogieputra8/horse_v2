var express = require('express');
var router = express.Router();
var http = require("http");
var https = require("https");
var fs = require('fs');
var Hogan = require("hogan.js");
var cookieParser = require('cookie-parser')
var _ = require('underscore');

var credential = require('./credential.json')



var bodyParser = require('body-parser');
router.use(bodyParser.json()); // to support JSON bodies
router.use(bodyParser.urlencoded({ extended: true }));

var multer = require("multer");
var upload = multer({ dest: 'public/upload/' });






router.route('/')
    .get(function(req, res, next) {
        console.log(credential)
        res.render('index', {})
    })
    .post(function(req, res, next) {

    });


router.route('/behaviour')
    .get(function(req, res, next) {
        res.render('behaviour', {})
    })
    .post(function(req, res, next) {

    });

router.route('/habitat')
    .get(function(req, res, next) {
        res.render('habitat', {})
    })
    .post(function(req, res, next) {

    });

router.route('/classification')
    .get(function(req, res, next) {
        res.render('classification', {})
    })
    .post(function(req, res, next) {

    });

router.route('/gallery')
    .get(function(req, res, next) {
        res.render('gallery', {})
    })
    .post(function(req, res, next) {

    });


router.route('/mating')
    .get(function(req, res, next) {
        res.render('mating', {})
    })
    .post(function(req, res, next) {

    });


router.route('/diet')
    .get(function(req, res, next) {
        res.render('portofolio', {})
    })
    .post(function(req, res, next) {

    });


router.route('/communication')
    .get(function(req, res, next) {
        res.render('communication', {})
    })
    .post(function(req, res, next) {

    });


router.route('/fact')
    .get(function(req, res, next) {
        res.render('fact', {})
    })
    .post(function(req, res, next) {

    });


router.route('/anatomy')
    .get(function(req, res, next) {
        res.render('anatomy', {})
    })
    .post(function(req, res, next) {

    });


router.route('/culture')
    .get(function(req, res, next) {
        res.render('culture', {})
    })
    .post(function(req, res, next) {

    });

router.route('/about')
    .get(function(req, res, next) {
        res.render('about', {})
    })
    .post(function(req, res, next) {

    });


router.route('/email')
    .get(function(req, res, next) {
        res.render('email', {})
    })
    .post(function(req, res, next) {

        const nodemailer = require('nodemailer');

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '',
                pass: ''
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
            to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world ?', // plain text body
            html: '<b>Hello world ?</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });

    });


router.route('/redirect')
    .get(function(req, res, next) { 
        res.redirect('https://thescrumzoo20.wordpress.com/')

    })





module.exports = router;
