import { Socket } from "phoenix";
import { v4 } from "uuid";

export const socket = new Socket("/socket", {
  params: { token: window.userToken }
});
socket.connect();

const pushCountsToChannel = channel => counts =>
  channel.push("update", { body: counts });
const channelNameFromRoomName = (roomName, password) =>
  `counter:${encodeURI(roomName.toString())}:${password}`;

export class API {
  constructor(socket) {
    this.socket = socket;
    this.pushCounts = this.pushCounts.bind(this);
    this.setNewChannel = this.setNewChannel.bind(this);
    this.setCountsRecieverFunction = this.setCountsRecieverFunction.bind(this);
  }

  pushCounts = counts => {
    pushCountsToChannel(this.channel)(counts);
  };

  setNewChannel = (roomName, password) => {
    const channelName = channelNameFromRoomName(roomName, password);

    if (this.channel) {
      this.channel.leave();
    }

    this.channel = this.socket.channel(channelName);
    this.channel.join();
  };

  setCountsRecieverFunction(onUpdateFunc) {
    this.channel.on("update", ({ body: counts }) => onUpdateFunc(counts));
  }
}
