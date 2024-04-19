"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendPasswordResetEmail = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sendPasswordResetEmail = function sendPasswordResetEmail(token, email, name) {
  var url = process.env.NODE_ENV == 'development' ? 'http://localhost:3000/' : "https://woo-shirts-1.onrender.com/";
  var html = "\n    <html>\n        <body>\n          <h3>Dear ".concat(name, "</h3>\n             <p>Please click on the link below to reset your password.</p>\n             <a href=\"").concat(url, "password-reset/").concat(token, "\">Reset my password</a>\n        </body>\n    </html>");

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
    subject: "Debbie's store: Reset your password request.",
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

exports.sendPasswordResetEmail = sendPasswordResetEmail;