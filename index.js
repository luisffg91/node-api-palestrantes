const express = require('express');
const bodyParser = require('body-parser');
const talkRouter = require('./routes/talkerRouter');
const loginRouter = require('./routes/loginRouter');

const app = express();
app.use(bodyParser.json());

const PORT = '3000';

app.use('/talker', talkRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log('API Online');
});
