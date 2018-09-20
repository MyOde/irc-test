// @flow
const { Schema } = require('mongoose');
const setSerializer = require('./utilities.js');

const chatRoomSchema = new Schema({
  name: String,
  participants: [String]
});

setSerializer(chatRoomSchema);

export type ChatRoomType = {
  id: string,
  name: string,
  participants: [string]
};

module.exports = chatRoomSchema;
