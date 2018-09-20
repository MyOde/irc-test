// @flow
import type { FluxActionType, ChatRoomReducerType } from 'ducks/stateType.js';
import { loop, Cmd } from 'redux-loop';
import { getRoomMessages } from 'api/chat';
import { populateRoomMessages } from './actions.js'

const defaultState = {
  isLoading: false,
  messages: []
}

const reducer = (
  state: ChatRoomReducerType = defaultState,
  action: FluxActionType
): ChatRoomReducerType => {
  switch (action.type) {
    case 'ROOM': {
      const { payload, isNew } = action;
      const { id } = payload;
      if (isNew) {
        return state;
      }

      if (!(state && state.messages)) {
        return loop(
          { ...state, isLoading: true },
          Cmd.run(getRoomMessages, {
            successActionCreator: populateRoomMessages,
            args: [id]
          })
        );
      }

      return state;
    }
    case 'CHAT_ROOM/POPULATE_MESSAGES': {
      const { messages } = action;
      return { ...state, messages, isLoading: false };
    }
    default: { return state; }
  }
};

export default reducer;
