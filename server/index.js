const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var cors = require('cors');

const client = require('twilio')(
    'AC9acefc361393f95b680acf9990cad003',
    '7a73055861ae7a8a775a34ebd9a24b34'
);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.use(cors());

app.get('/', (req, res) => {

    res.send('Hello World!');

});

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.post('/api/messages', (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
      .create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: req.body.to,
        body: req.body.body
      })
      .then(() => {
        res.send(JSON.stringify({ success: true }));
      })
      .catch(err => {
        console.log(err);
        console.log(err.response.data);
        res.send(JSON.stringify({ success: false }));
      });
      
  });
  

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
