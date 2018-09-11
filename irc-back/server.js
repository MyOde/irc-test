const express = require('express');
const { welcomeMessage } = require('./welcome.js');
const { json } = require('body-parser');
const apiRouter = require('./api.js')

const app = express();

app.use(json());
app.use('/api', apiRouter);


app.listen(44444, () => {
    // eslint-disable-next-line no-console
    console.log(welcomeMessage());
})
