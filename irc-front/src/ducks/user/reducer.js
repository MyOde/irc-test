// @flow
import type { Loop } from 'redux-loop';
import type { FluxActionType, UserReducerType } from 'ducks/stateType.js';
import { loop, Cmd } from 'redux-loop';
import { getUserInfo } from 'api/chat.js';
import { actOnUserName } from './actions.js';

const defaultState = {
  name: null,
  userRetrieved: false
}

const reducer = (
  state: UserReducerType = defaultState,
  action: FluxActionType
): Loop<UserReducerType> | UserReducerType => {
  switch (action.type) {
    case 'USER/PUT_USER_NAME': {
      const { name } = action;
      return { ...state, name }
    }
  }

  const { userRetrieved } = state;
  if (!userRetrieved) {
    return loop (
      { ...state, userRetrieved: true },
      Cmd.run(
        getUserInfo,
        {
          successActionCreator: actOnUserName
        }
      )
    );
  }

  return state;
}

export default reducer;
