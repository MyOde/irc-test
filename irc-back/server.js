// @flow
const express = require('express');
const { json } = require('body-parser');
const cookieParser = require('cookie-parser');
const apiRouter = require('./api.js')
const { welcomeMessage } = require('./welcome.js');
const sessionAuth = require('utilities/sessionAuth.js');

const app = express();


// TODO Some XHR protection
app.use(json());
app.use(cookieParser());
app.use(sessionAuth);
app.use('/api', apiRouter);

app.listen(44444, () => {
    // eslint-disable-next-line no-console
    console.log(welcomeMessage());
})
