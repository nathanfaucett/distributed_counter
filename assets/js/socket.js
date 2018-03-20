import { Socket } from "phoenix"

export const socket = new Socket("/socket", {params: {token: window.userToken}})
socket.connect()

const pushCountsToChannel = channel => counts => channel.push("update", { body: counts });
const channelNameFromRoomName = roomName => `counter:${encodeURI(roomName.toString())}`;

export class API {
  constructor(socket) {
    this.socket = socket
    this.pushCounts = this.pushCounts.bind(this);
    this.setNewChannel = this.setNewChannel.bind(this);
    this.setCountsRecieverFunction = this.setCountsRecieverFunction.bind(this);
  }

  pushCounts(counts) {
    pushCountsToChannel(this.channel)(counts);
  };

  setNewChannel(roomName) {
    const channelName = channelNameFromRoomName(roomName);

    if (this.channel) {
      this.channel.leave();
    }

    this.channel = this.socket.channel(channelName);
    this.channel.join();
  }

  setCountsRecieverFunction(onUpdateFunc) {
    this.channel.on("update", ({body: counts}) => onUpdateFunc(counts))
  }
}