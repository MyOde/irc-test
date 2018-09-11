function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

const welcome = '0a20202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020200a20202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020200a2020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202c2d2e20200a20202c2d2d2c2020202020202020202020202020202020202020202020202020202020202c2d2d2d2c2020202020202020202020202020202020202020202020202020202c2d2d2f202f7c20200a2c2d2d2e277c202020205f5f20202c2d2e20202020202020202020202c2d2d2d2c2e2c2d2d2d2e277c202020202020202020202020202020202020202020202020202c2d2d2e203a2f207c20200a7c20207c2c2020202c27202c272f202f7c2020202020202020202c2720202e27207c7c2020207c203a202020202020202020202020202020202020202020202020203a20203a2027202f2020200a602d2d275f2020202720207c207c27207c202c2d2d2d2e202c2d2d2d2e272020202c3a2020203a203a2020202020202c2d2d2e2d2d2e20202020202c2d2d2d2e20207c20202720202f202020200a2c27202c277c20207c20207c2020202c272f20202020205c7c2020207c202020207c3a20202020207c2c2d2e20202f202020202020205c2020202f20202020205c202720207c20203a202020200a2720207c207c20202720203a20202f202f202020202f20273a2020203a20202e27207c2020203a202720207c202e2d2d2e20202e2d2e207c202f202020202f2027207c20207c2020205c2020200a7c20207c203a20207c20207c2027202e2020202027202f203a2020207c2e272020207c2020207c20202f203a20205c5f5f5c2f3a202e202e2e2020202027202f20202720203a207c2e205c20200a2720203a207c5f5f3b20203a207c20272020203b203a5f5f602d2d2d272020202020272020203a207c3a207c20202c22202e2d2d2e3b207c272020203b203a5f5f207c20207c2027205c205c200a7c20207c20272e277c20202c203b20272020207c20272e277c2020202020202020207c2020207c20272f203a202f20202f20202c2e20207c272020207c20272e277c2720203a207c2d2d2720200a3b20203a202020203b2d2d2d2720207c2020203a202020203a2020202020202020207c2020203a202020207c3b20203a2020202e272020205c2020203a202020203a3b20207c2c2720202020200a7c20202c2020202f20202020202020205c2020205c20202f202020202020202020202f202020205c20202f207c20202c20202020202e2d2e2f5c2020205c20202f20272d2d27202020202020200a202d2d2d602d2720202020202020202020602d2d2d2d272020202020202020202020602d272d2d2d2d27202020602d2d602d2d2d272020202020602d2d2d2d27202020202020202020202020200a20202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020200a';


const welcomeMessage = () => hex2a(welcome);
module.exports = {
    welcomeMessage
};