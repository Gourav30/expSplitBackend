const nodemailer = require('nodemailer');

const logger = require('./loggerLib');

  let sendMailMethod = (to,subject,text) =>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'expensesplitter003@gmail.com',
          pass: 'Expense@003'
        }
      });

      const mailOptions = {
        from: 'expensesplitter003@gmail.com',
        to: to,
        subject: subject,
        text: text
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          logger.error(error);
        } else {
          logger.info('Email sent: ' + info);
        }
      });

  }

  module.exports = {

    sendMail: sendMailMethod
  };