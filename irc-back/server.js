const express = require('express');
const { json } = require('body-parser');
const apiRouter = require('./api.js')

const app = express();

app.use(json());
app.use('/api', apiRouter);

app.listen(44444, () => {})
