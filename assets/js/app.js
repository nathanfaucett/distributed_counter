import "phoenix_html"

import React from "react";
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import socket from "./socket";
import { mainReducer } from "./redux/reducers/combinedReducer";

import { App } from "./react/App";


const middlewares = [thunkMiddleware]
let store = createStore(mainReducer, applyMiddleware(...middlewares));
window.store = store;

let channel = socket.channel("counter:subtopic", {});
channel.join().receive("ok", resp => { console.log("Joined successfully", resp) });
channel.on("update", (message) => {});

const setupApp = store =>  <Provider store={store}>
  <App />
</Provider>

ReactDOM.render(setupApp(store), document.getElementById('root'));