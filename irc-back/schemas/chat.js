// @flow
const { Schema } = require('mongoose');

const chatRoomSchema = new Schema({
    name: String,
    participants: [String]
});

module.exports = chatRoomSchema;
