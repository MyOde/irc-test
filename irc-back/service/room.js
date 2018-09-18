// @flow
import type { ChatRoomType } from 'schemas/chat.js';
const { ChatModel, MessageModel } = require('utilities/ircDb.js');

const getRoom = async (id: int): ChatRoomType => {
    // TODO Limit retrieved message amount, and have some sort of paging.
    const messages = await MessageModel.find({ roomId: id }).exec();
  return messages;
};

const createRoom = async (name: string, creatingUserId: string): string => {
    const room = new ChatModel({ name, participants: [creatingUserId] })
    await room.save();
  return room._id;
};

const createMessage = async (content: string, roomId: string, userId: string): string => {
    const message = new MessageModel({ content, roomId, userId });
    await message.save();
  return message._id;
};

const getParticipantRooms = async (userId: string): [ChatRoomType] => {
    const rooms = await ChatModel.find({ participants: userId }).exec();
    return rooms;
};

module.exports = {
    getRoom,
    createRoom,
    createMessage,
    getParticipantRooms
};
