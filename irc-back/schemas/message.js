// @flow
const { Schema } = require('mongoose');
const setSerializer = require('./utilities.js');

const messageSchema = new Schema({
    content: String,
    roomId: String,
    userId: String
});

setSerializer(messageSchema);

module.exports = messageSchema;
