import "phoenix_html"

import React from "react";
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { socket, API as SocketAPI} from "./socket";
import { mainReducer } from "./redux/reducers/combinedReducer";

import { App } from "./react/App";
import { loadPreviousRoomToStore, loadPreviousUserToStore } from './lib/initalizers'

const API = new SocketAPI(socket);

const middlewares = [thunk.withExtraArgument({API})]
const store = createStore(mainReducer, applyMiddleware(...middlewares));

window.API = API;
window.store = store;

// initalizers
loadPreviousRoomToStore(store);
loadPreviousUserToStore(store);

// render the APP
const setupApp = store => <Provider store={store}><App /></Provider>;
ReactDOM.render(setupApp(store), document.getElementById('root'));