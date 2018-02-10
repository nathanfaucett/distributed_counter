import { Socket } from "phoenix"
import { createStore } from "redux"

let socket = new Socket("/socket", {params: {token: window.userToken}})
socket.connect()

export default socket
