"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendVerificationEmail = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// agxo sfiv hdvj ypfd
// lindakwoo@gmail.com
var sendVerificationEmail = function sendVerificationEmail(token, email, name) {
  var url = process.env.NODE_ENV == 'development' ? 'http://localhost:3000/' : "https://woo-shirts-1.onrender.com/";
  var html = "<html>\n        <body>\n            <h3>Dear ".concat(name, "</h3>\n            <p>Thanks for signing up at Debbie's store!</p>\n            <p>Use the link below to verify your email</p>\n            <a href=\"").concat(url, "email-verify/").concat(token, "\">Verify email</a>\n        </body>\n    </html>\n    ");

  var transporter = _nodemailer["default"].createTransport({
    service: 'gmail',
    auth: {
      user: 'lindakwoo@gmail.com',
      pass: 'agxo sfiv hdvj ypfd'
    }
  });

  var mailOptions = {
    from: 'lindakwoo@gmail.com',
    to: email,
    subject: 'Verify your email address',
    html: html
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent to ".concat(email));
      console.log(info.response);
    }
  });
};

exports.sendVerificationEmail = sendVerificationEmail;