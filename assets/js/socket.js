import { Socket } from "phoenix"

import { recieveCounts, zeroCounts, setRoom } from './redux/actions/simpleActions'
import { setRoomAndWriteStorage } from './redux/actions/asyncActions'

export const socket = new Socket("/socket", {params: {token: window.userToken}})
socket.connect()

const pushCountsToChannel = channel => counts => channel.push("update", { body: counts });

const clearChirper = chirperInterval => clearInterval(chirperInterval);

const recieveCountsAndDispatchToStore = store => ({body: counts}) => store.dispatch(recieveCounts(counts));

const getCounts = store => {
  const {additions, subtractions} = store.getState();
  return { additions, subtractions }
}

const channelNameFromRoomName = roomName => `counter:${roomName.toString()}`;

export class API {
  constructor(socket) {
    this.socket = socket
  }

  pushCounts = pushCountsToChannel(this.channel);

  setRoom = roomName => {
    this.clearChirper(this.chirperInterval);

    const newChannelName = channelNameFromRoomName(roomName)
    this.setNewChannel(newChannelName);

    this.store.dispatch(zeroCounts());
    this.store.dispatch(setRoomAndWriteStorage(roomName));

    this.setNewChannel(newChannelName);
    this.setCountsReciever();

    this.chirperInterval = this.setChirper();
  }

  setStore = store => { this.store = store }

  // private

  setNewChannel = channelName => {
    this.channel.leave();
    this.channel = this.socket.channel(channelName);
    this.channel.join();
  }

  setCountsReciever = () => this.channel.on("update", recieveCountsAndDispatchToStore(this.store));

  setChirper = () => setInterval(
    () => this.pushCounts(getCounts(this.store))
  , 5000)
}
