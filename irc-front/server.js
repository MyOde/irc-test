const path = require('path');
const webpack = require('webpack');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const proxy = require('http-proxy-middleware');
const { config, port } = require('./webpack.config');

const app = express();
const compiler = webpack(config);


const hex2a = (hexx) => {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
};

const welcome = '0a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020200a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020200a20202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020205f5f5f20202020200a20202c2d2d2c2020202020202020202020202020202020202020202020202020202020202e2d2d2e2c202020202020202020202020202020202020202020202020202020202020202020202c2d2d2e277c5f2020200a2c2d2d2e277c202020205f5f20202c2d2e20202020202020202020202c2d2d2d2c2e2c2d2d2e2720205c20205f5f20202c2d2e2020202c2d2d2d2e20202020202020202c2d2d2d2c2020207c20207c203a2c2720200a7c20207c2c2020202c27202c272f202f7c2020202020202020202c2720202e27207c7c20207c202f5c2f2c27202c272f202f7c2020272020202c275c2020202c2d2b2d2e202f20207c20203a20203a2027203a20200a602d2d275f2020202720207c207c27207c202c2d2d2d2e202c2d2d2d2e272020202c3a20203a203a20202720207c207c27207c202f2020202f2020207c202c2d2d2e277c272020207c2e3b5f5f2c2720202f2020200a2c27202c277c20207c20207c2020202c272f20202020205c7c2020207c202020207c3a20207c207c2d2c7c20207c2020202c272e2020203b202c2e203a7c2020207c20202c2227207c7c20207c2020207c202020200a2720207c207c20202720203a20202f202f202020202f20273a2020203a20202e27207c20203a203a2f7c2720203a20202f2020272020207c207c3a203a7c2020207c202f20207c207c3a5f5f2c277c203a202020200a7c20207c203a20207c20207c2027202e2020202027202f203a2020207c2e272020207c20207c20202e277c20207c2027202020272020207c202e3b203a7c2020207c207c20207c207c20202720203a207c5f5f20200a2720203a207c5f5f3b20203a207c20272020203b203a5f5f602d2d2d2720202020202720203a202720203b20203a207c2020207c2020203a202020207c7c2020207c207c20207c2f2020207c20207c20272e277c200a7c20207c20272e277c20202c203b20272020207c20272e277c2020202020202020207c20207c207c20207c20202c203b202020205c2020205c20202f207c2020207c207c2d2d27202020203b20203a202020203b200a3b20203a202020203b2d2d2d2720207c2020203a202020203a2020202020202020207c20203a205c2020202d2d2d27202020202020602d2d2d2d2720207c2020207c2f20202020202020207c20202c2020202f20200a7c20202c2020202f20202020202020205c2020205c20202f202020202020202020207c20207c2c27202020202020202020202020202020202020202020272d2d2d27202020202020202020202d2d2d602d272020200a202d2d2d602d2720202020202020202020602d2d2d2d272020202020202020202020602d2d2720202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020200a202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020200a';

const welcomeMessage = () => hex2a(welcome);

app.use(devMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(hotMiddleware(compiler));

app.use('/api', proxy({ target: 'http://localhost:44444', changeOrigin: false }));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(err) {
    if (err) {
        return console.error(err);
    }

    console.log(welcomeMessage());
    console.log(`Listening at http://localhost:${port}/`);
});
