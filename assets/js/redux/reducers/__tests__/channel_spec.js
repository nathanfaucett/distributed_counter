import { increment, decrement, receiveCounts, setMe, setRoom } from '../../actions/simpleActions'
import { channel } from '../subReducers/channel'

describe("channel reducer", () => {
  it("sets defaults correctly", () => {
    expect(channel(undefined, {})).toEqual({
      room: null,
      chirperInterval: null
    });
  });

  it("sets the room", () => {
    expect(channel(undefined, setRoom("aroom")).room).toEqual("aroom")
  });
});