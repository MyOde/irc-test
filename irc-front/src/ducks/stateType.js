// @flow
import type {
  CreateRoomDialogType,
  CreateRoomType,
  PopulateHomeRoomsType,
  ChangeToRoomType,
  NavigateHomeType
} from 'ducks/home/actions.js';

import type {
  OpenDialogType,
  CloseDialogType
} from 'ducks/dialog/actions.js';

import type {
  PopulateRoomMessagesType
} from 'ducks/chatRoom/actions.js';

export type FluxActionType =
  PopulateHomeRoomsType
  | ChangeToRoomType
  | CreateRoomDialogType
  | CreateRoomType
  | OpenDialogType
  | CloseDialogType
  | PopulateRoomMessagesType
  | NavigateHomeType;

export type DispatchFuncType = (FluxActionType) => void;

export type LocationReducerType = {
  pathname: string,
  type: string,
  payload: {},
  prev: {
    pathname: string,
    type: string,
    payload: {}
  }
};

export type StateType = {
  location: LocationReducerType,
  chatRoom: ChatRoomReducerType,
  home: HomeReducerType,
  dialog: DialogReducerType
};

export type ChatRoomReducerType = {
  messages: Array<string>,
  isLoading: boolean
};

export type HomeReducerType = {
  rooms: Array<ChatHeaderType>,
  isSecondaryLoading: boolean
};

export type DialogReducerType = Array<DialogMetaType>;
export type DialogMetaType = {
  identifier: string
};

export type ChatHeaderType = {
  id: string,
  name: string
};
