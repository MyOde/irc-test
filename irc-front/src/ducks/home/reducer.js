// @flow
import type { Loop } from 'redux-loop';
import type { FluxActionType, HomeReducerType } from 'ducks/stateType.js';
import { loop, Cmd } from 'redux-loop';
import { postNewRoom, getUserRooms } from 'api/chat';
import { changeToEmptyRoom, populateHomeRooms } from './actions.js';

const defaultState = {
  rooms: [],
  isLoading: false,
  isSecondaryLoading: false
};

const reducer = (
  state: HomeReducerType = defaultState,
  action: FluxActionType
): Loop<HomeReducerType> | HomeReducerType => {
  switch(action.type) {
    case 'HOME/POPULATE_HOME_ROOMS': {
      const { rooms } = action;
      return {
        ...state,
        rooms
      };
    }
    case 'HOME': {
      return loop(
        { ...state, isLoading: true },
        Cmd.run(getUserRooms, {
          successActionCreator: populateHomeRooms,
        })
      );
    }
    case 'HOME/CREATE_ROOM': {
      const { name } = action;
      return loop(
        { ...state, isSecondaryLoading: true },
        Cmd.run(postNewRoom, {
          successActionCreator: changeToEmptyRoom,
          args: [name]
        })
      );
    }
    case 'ROOM': {
      const { isNew } = action;
      if (isNew) {
        return { ...state, isSecondaryLoading: false };
      }

      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
