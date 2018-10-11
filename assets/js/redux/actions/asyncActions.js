import {
  increment,
  decrement,
  setMe,
  setRoom,
  receiveCounts,
  zeroCounts,
  setChirperInterval,
  setPassword
} from "./simpleActions";
import {
  setRoomInStorage,
  setUsernameInStorage
} from "../../lib/local_storage";
import { randRoom } from "../../lib/initalizers";
import { isEmpty } from "ramda";
import { v4 } from "uuid";

const countsRecieverFunction = dispatch => counts =>
  dispatch(receiveCounts(counts));
const chirpFunction = (getState, API) => () => {
  const {
    counts: { additions, subtractions }
  } = getState();
  API.pushCounts({ additions, subtractions });
};

export const setRoomAndUpdateChannel = (room, password) => (
  dispatch,
  getState,
  { API }
) => {
  dispatch(setRoomAndWriteStorage(room, password));
  dispatch(zeroCounts());

  API.setNewChannel(room + ":" + password);
  API.setCountsRecieverFunction(countsRecieverFunction(dispatch));

  const {
    counts: { chirperInterval: chirperInterval }
  } = getState();

  if (chirperInterval) {
    clearInterval(chirperInterval);
  }

  const newChirperInterval = setInterval(chirpFunction(getState, API), 5000);
  dispatch(setChirperInterval(newChirperInterval));
};

export const goToRoom = history => (dispatch, getState) => {
  let {
      channel: { room, password }
    } = getState(),
    isNullPassword = password == "" || password == null;

  if (isNullPassword) {
    password = v4();
  }

  if (isEmpty(room)) {
    dispatch(setRoomAndUpdateChannel(randRoom(), password));
  }

  if (isNullPassword) {
    dispatch(setRoomAndUpdateChannel(room, password));
  }

  history.push(`/counter/${encodeURI(room)}/${encodeURI(password)}`);
};

export const setMeAndWriteStorage = username => dispatch => {
  dispatch(setMe(username));
  setUsernameInStorage(username);
};

export const setRoomAndWriteStorage = (room, password) => dispatch => {
  dispatch(setRoom(room));
  dispatch(setPassword(password));
  setRoomInStorage(room);
};

export const incrementAndNotify = (amount = 1) => (
  dispatch,
  getState,
  { API }
) => {
  dispatch(increment(amount));
  const {
    counts: { additions, subtractions }
  } = getState();
  API.pushCounts({ additions, subtractions });
};

export const decrementAndNotify = (amount = 1) => (
  dispatch,
  getState,
  { API }
) => {
  dispatch(decrement(amount));
  const {
    counts: { additions, subtractions }
  } = getState();
  API.pushCounts({ additions, subtractions });
};
