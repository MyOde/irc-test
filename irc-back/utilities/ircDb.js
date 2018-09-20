// @flow
import type { ConnectionConnectOpts } from 'mongoose';
const mongoose = require('mongoose');
const chatSchema = require('schemas/chat.js');
const messageSchema = require('schemas/message.js');
const userSchema = require('schemas/user.js');

const CHAT_ROOM_COLLECTION = 'room';
const MESSAGE_COLLECTION = 'messages';
const USER_COLLECTION = 'user';
const DATABASE_NAME = 'irc';
// TODO Move to configuration file
const CONNECTION_STRING = 'mongodb://localhost';

const closeIrcDb = () => { mongoose.connection.close(); }
const connectIrcDb = async (options: ?ConnectionConnectOpts): Promise<void> => {
  const optionsNew = {
    ...options,
    useNewUrlParser: true,
    dbName: DATABASE_NAME
  }

  await mongoose.connect(CONNECTION_STRING, optionsNew);

}

const ChatModel = mongoose.model(CHAT_ROOM_COLLECTION, chatSchema);
const MessageModel = mongoose.model(MESSAGE_COLLECTION, messageSchema);
const UserModel= mongoose.model(USER_COLLECTION, userSchema);

module.exports = {
  connectIrcDb,
  closeIrcDb,
  ChatModel,
  MessageModel,
  UserModel
};
