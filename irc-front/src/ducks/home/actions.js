// @flow
import type { ChatHeaderType } from 'ducks/stateType.js';

export const CREATE_ROOM_DIALOG = 'CREATE_ROOM_DIALOG';

export type NavigateHomeType = {
  type: 'HOME'
};

export type ChangeToRoomType = {
  type: 'ROOM',
  payload: {
    id: string
  },
  isNew: boolean
};

export type CreateRoomDialogType = {
  type: 'DIALOG/OPEN_DIALOG',
  identifier: string
};

export type CreateRoomType = {
  type: 'HOME/CREATE_ROOM',
  name: string
};

export type PopulateHomeRoomsType = {
  type: 'HOME/POPULATE_HOME_ROOMS',
  rooms: Array<ChatHeaderType>
};

const changeToRoomBase = (id: string, isNew: boolean): ChangeToRoomType => {
  // eslint-disable-next-line
  console.log(id, isNew);
  return {
    type: 'ROOM',
    payload: {
      id
    },
    isNew
  };
};

export const changeToRoom = (id: string): ChangeToRoomType => changeToRoomBase(id, false);
export const changeToEmptyRoom = (id: string): ChangeToRoomType => changeToRoomBase(id, true);

export const navigateHome: NavigateHomeType = { type: 'HOME' };

export const createRoomDialog: CreateRoomDialogType = {
  type: 'DIALOG/OPEN_DIALOG',
  identifier: CREATE_ROOM_DIALOG
};

export const createRoom = (name: string): CreateRoomType => ({
  type: 'HOME/CREATE_ROOM',
  name
});

export const populateHomeRooms = (
  rooms: Array<ChatHeaderType>
): PopulateHomeRoomsType => ({
  type: 'HOME/POPULATE_HOME_ROOMS',
  rooms
});
