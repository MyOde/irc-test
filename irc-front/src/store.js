import { connectRoutes } from 'redux-first-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { install, combineReducers } from 'redux-loop';
import chatRoomReducer from 'ducks/chatRoom/reducer.js';
import homeReducer from 'ducks/home/reducer.js';
import dialogReducer from 'ducks/dialog/reducer.js';
import userReducer from 'ducks/user/reducer.js';

const routesMap = {
  'HOME': '/',
  'ROOM': '/room/:id',
};

const { reducer, middleware, enhancer } = connectRoutes(routesMap, {});
const rootReducer = combineReducers({
  location: reducer,
  chatRoom: chatRoomReducer,
  home: homeReducer,
  dialog: dialogReducer,
  user: userReducer
});

const middlewares = applyMiddleware(middleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {}, composeEnhancers(
  enhancer,
  middlewares,
  install()
));

export default store;
