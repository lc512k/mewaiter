// web.js
var express = require("express");
var logfmt = require("logfmt");
var nodemailer = require("nodemailer");
var app = express();
var path = require('path');

app.use(logfmt.requestLogger());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());

////////////// Web Services //////////////
app.post('/ws/mail', function(req, res) {
  var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
      user: "gal@tocarta.es",
      pass: "na0mieitanic0"
    }
  });

  var mailOptions = {
    from: "meWaiter <info@mewaiter.com>",
    to: "gal@tocarta.es",
    subject: "Invitación meWaiter",
    text: JSON.stringify(req.body, undefined, '  ') //"name: " + req.body.name + " email: " + req.body.email, html: ''
  }
  console.log(JSON.stringify(req.body, undefined, '  '));
  smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent: " + response.message);
    }
    smtpTransport.close(); // shut down the connection pool, no more messages
  });

  res.send('ok');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
