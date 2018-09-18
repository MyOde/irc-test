// @flow

export type PopulateRoomMessagesType = {
  type: 'CHAT_ROOM/POPULATE_MESSAGES',
  messages: Array<string>
};

export const populateRoomMessages = (messages: Array<string>): PopulateRoomMessagesType => ({
  type: 'CHAT_ROOM/POPULATE_MESSAGES',
  messages
});
