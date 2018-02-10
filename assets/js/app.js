import "phoenix_html"
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'

import socket from "./socket"
import { mainReducer } from "./reducers/combinedReducer"

const middlewares = [thunkMiddleware]
window.store = createStore(mainReducer, applyMiddleware(...middlewares));

let channel = socket.channel("counter:subtopic", {})
channel.join().receive("ok", resp => { console.log("Joined successfully", resp) })
channel.on("update", (message) => {})