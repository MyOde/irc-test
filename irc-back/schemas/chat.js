// @flow
const { Schema } = require('mongoose');

const chatRoomSchema = new Schema({
    name: String,
    participants: [String]
});

export type ChatRoomType = {
    _id: string,
    name: string,
    participants: [string]
};

module.exports = chatRoomSchema;
