var path = require('path');
var webpack = require('webpack');
var express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
var { config, port } = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(devMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(hotMiddleware(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(err) {
    if (err) {
        return console.error(err);
    }

    console.log(`Listening at http://localhost:${port}/`);
});
