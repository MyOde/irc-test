// @flow
import type { Node } from 'react';
import type { StateType } from 'ducks/stateType.js';
import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { NOT_FOUND } from 'redux-first-router';
import { locationType } from 'ducks/location/selectors.js';
import Home from 'pages/home.jsx';
import ChatRoom from 'pages/chatRoom.jsx';
import NotFound from 'pages/notFound.jsx';

type AppPropsType = {
  page: string
};

const App = ({ page }: AppPropsType): Node => {
  const CurrentPage = {
    'HOME': Home,
    'ROOM': ChatRoom,
    [NOT_FOUND]: NotFound
  }[page];

  return <CurrentPage />
}

const mapState = (state: StateType): AppPropsType => {
  return {
    page: locationType(state),
  }
};

const ConnectedApp = connect(mapState)(App);
// eslint-disable-next-line no-undef
export default hot(module)(ConnectedApp);
