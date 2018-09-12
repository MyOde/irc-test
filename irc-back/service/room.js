// @flow
import type { ChatRoomType } from 'schemas/chat.js';
const { ChatModel, MessageModel } = require('utilities/ircDb.js');

const getRoom = async (id: int): ChatRoomType => {
    const entry = await ChatModel.findById(id).exec();
    // TODO Limit retrieved message amount, and have some sort of paging.
    const messages = await MessageModel.find({ roomId: id }).exec();
    return { room: entry, messages };
};

const createRoom = async (name: string, creatingUserId: string): void => {
    const room = new ChatModel({ name, participants: [creatingUserId] })
    await room.save();
};

const createMessage = async (content: string, roomId: string, userId: string): void => {
    const message = new MessageModel({ content, roomId, userId });
    await message.save();
}

const getParticipantRooms = async (userId: string): [ChatRoomType] => {
    const rooms = await ChatModel.find({ participants: userId }).exec();
    return rooms;
}

module.exports = {
    getRoom,
    createRoom,
    createMessage,
    getParticipantRooms
}
