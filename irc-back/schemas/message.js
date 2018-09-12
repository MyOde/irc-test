// @flow
const { Schema } = require('mongoose');

const messageSchema = new Schema({
    content: String,
    roomId: String,
    userId: String
});

module.exports = messageSchema;
