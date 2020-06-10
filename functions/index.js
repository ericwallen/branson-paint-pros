const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const cors = require('cors')({ origin: true });


  exports.sendQuoteToBret = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        console.log('happens');
        


        
        // sgMail.setApiKey('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');
        sgMail.setApiKey('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');
        const newMessageToEric = {
          to: 'ericwallen1@gmail.com',
          from: 'noreply@bransonpaintpros.com',
          subject: 'You have a new quote request',
          html: `

<b>Type</b> ${req.query.TYPE}<br>
<b>First name</b> ${req.query.FIRSTNAME}<br>
<b>Int/Ext</b> ${req.query.PAINTLOCATION}<br>
<b>Last name</b> ${req.query.LASTNAME}<br>
<b>Email</b> ${req.query.EMAIL}<br>
<b>Phone Number</b> ${req.query.PHONENUMBER}<br>
<b>Address 1</b> ${req.query.ADDRESS1}<br>
<b>Address 2</b> ${req.query.ADDRESS2}<br>
<b>City</b> ${req.query.CITY}<br>
<b>State</b> ${req.query.STATE}<br>
<b>Zip</b> ${req.query.ZIPCODE}<br>
<b>Details</b> ${req.query.DETAILS}<br>
      
      `,
        }
        sgMail.send(newMessageToEric);


        const newMessageToBret = {
            to: 'bret@bransonpaintpros.com',
            from: 'noreply@bransonpaintpros.com',
            subject: 'You have a new quote request',
            html: `
  
  <b>Type</b> ${req.query.TYPE}<br>
  <b>First name</b> ${req.query.FIRSTNAME}<br>
  <b>Int/Ext</b> ${req.query.PAINTLOCATION}<br>
  <b>Last name</b> ${req.query.LASTNAME}<br>
  <b>Email</b> ${req.query.EMAIL}<br>
  <b>Phone Number</b> ${req.query.PHONENUMBER}<br>
  <b>Address 1</b> ${req.query.ADDRESS1}<br>
  <b>Address 2</b> ${req.query.ADDRESS2}<br>
  <b>City</b> ${req.query.CITY}<br>
  <b>State</b> ${req.query.STATE}<br>
  <b>Zip</b> ${req.query.ZIPCODE}<br>
  <b>Details</b> ${req.query.DETAILS}<br>
        
        `,
          }
          sgMail.send(newMessageToBret);
        res.send({message: 'worked'})
    });
  });


  exports.test = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        console.log('test works');
        
        res.send({message: 'worked'})
    });
  });