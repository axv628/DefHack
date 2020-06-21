const accountSid = 'PrivateKeyCannotDisplay';
const authToken = 'PrivateKeyCannotDisplay';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'You have been allotted a space at Kokila Ben Private  Hospital. Please arrive at the hospital by 12:30 pm latest or you may risk losing the bed space.',
     from: '+447723489772',
     to: '+44xxxxxxxxxx'
   })
  .then(message => console.log(message.sid));
