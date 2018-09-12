// @flow
import type { ChatRoomType } from 'types/chat.js';
const { ChatModel, MessageModel } = require('utilities/ircDb.js');

const getRoom = async (id: int): ChatRoomType => {
    const entry = await ChatModel.findById(id).exec();
    // TODO Limit retrieved message amount, and have some sort of paging.
    const messages = await MessageModel.find({ roomId: id }).exec();
    return { room: entry, messages };
};

const createRoom = async (name: string, creatingUserId: string): void => {
    const room = new ChatModel({ name, participants: [creatingUserId] })
    room.save();
};

module.exports = {
    getRoom,
    createRoom
}
