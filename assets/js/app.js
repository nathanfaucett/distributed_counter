import "phoenix_html"

import React from "react";
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import socket from "./socket";
import { mainReducer } from "./redux/reducers/combinedReducer";

import { App } from "./react/App";
import { updateStoreWithRecievedCounts } from './lib/socket_wrapper'

import { loadPreviousRoomToStore, loadPreviousUserToStore } from './lib/initalizers'

let channel = socket.channel("counter:subtopic", {});
channel.join()

const middlewares = [thunk.withExtraArgument({channel})]
const store = createStore(mainReducer, applyMiddleware(...middlewares));
window.store = store;

// initalizers
loadPreviousRoomToStore(store);
loadPreviousUserToStore(store);
updateStoreWithRecievedCounts(channel)(store);

// render the APP
const setupApp = store => <Provider store={store}><App /></Provider>;
ReactDOM.render(setupApp(store), document.getElementById('root'));