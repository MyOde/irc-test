// @flow
const { Schema } = require('mongoose');

const messageSchema = new Schema({
    sessionId: String,
    alias: String
});

module.exports = messageSchema;
