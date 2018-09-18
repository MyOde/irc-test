// @flow
import type { ChatHeaderType, DispatchFuncType, StateType } from 'ducks/stateType.js';
import type { Node } from 'react'
import { connect } from 'react-redux';
import React from 'react';
import { roomHeaders } from 'ducks/home/selectors.js';
import { changeToRoom, createRoomDialog } from 'ducks/home/actions.js';
import IrcButton from 'components/ircButton.jsx';

type PropsType = StatePropsType & DispatchPropsType;

type StatePropsType = {
  rooms: Array<ChatHeaderType>
};

type DispatchPropsType = {
  goToRoom: (string) => void,
  createRoom: () => void
};

const roomsToNavButton = (
  goToRoom: (string) => void
): ((ChatHeaderType) => Node) => (
  { id, name }: ChatHeaderType
): Node => (
  <li key={id}>
    <div>hello</div>
    <IrcButton action={goToRoom} actionArgs={[id]}>
      {name}
    </IrcButton>
  </li>
);

export const Home = ({ rooms, goToRoom, createRoom }: PropsType): Node => {
  const navList = rooms.map(roomsToNavButton(goToRoom)); //
  return (
    <div>
      <button onClick={createRoom}>Create room</button>
      <ul>
        {navList}
      </ul>
    </div>
  )
};

const mapState = (state: StateType): StatePropsType => {
  return {
    rooms: roomHeaders(state)
  }
};

const mapDispatch = (dispatch: DispatchFuncType): DispatchPropsType => {
  return {
    goToRoom: (id: string): void => dispatch(changeToRoom(id)),
    createRoom: (): void => dispatch(createRoomDialog)
  }
}

export default connect(mapState, mapDispatch)(Home);
