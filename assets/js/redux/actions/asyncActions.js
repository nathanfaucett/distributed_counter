import { increment, decrement, setMe, setRoom, receiveCounts, zeroCounts, setChirperInterval } from './simpleActions'
import { pushCounts } from '../../lib/socket_wrapper';
import { setRoomInStorage, setUsernameInStorage } from '../../lib/local_storage'
import { randRoom } from '../../lib/initalizers'
import { isEmpty } from 'ramda'

const countsRecieverFunction = dispatch => counts => dispatch(receiveCounts(counts));
const chirpFunction = (getState, API) => () => {
  const {counts: {additions, subtractions}} = getState();
  API.pushCounts({additions, subtractions});
};

export const setRoomAndUpdateChannel = room => (dispatch, getState, {API}) => {
  dispatch(setRoomAndWriteStorage(room));
  dispatch(zeroCounts());

  API.setNewChannel(room);
  API.setCountsRecieverFunction(countsRecieverFunction(dispatch));

  const {counts: {chirperInterval: chirperInterval}} = getState();

  if (chirperInterval) {
    clearInterval(chirperInterval)
   }

  const newChirperInterval = setInterval(chirpFunction, 5000)
  dispatch(setChirperInterval(newChirperInterval))
}

export const goToRoom = history => (dispatch, getState) => {
  let {counts: room} = getState();
  if (isEmpty(room)) { dispatch(setRoomAndUpdateChannel(randRoom())) }
  history.push(`/counter/${encodeURI(room)}`);
}

export const setMeAndWriteStorage = username => dispatch => {
  dispatch(setMe(username));
  setUsernameInStorage(username);
}

export const setRoomAndWriteStorage = room => dispatch => {
  dispatch(setRoom(room));
  setRoomInStorage(room);
}

export const incrementAndNotify = (amount=1) => (dispatch, getState, {API}) =>{
  dispatch(increment(amount));
  const {counts: {additions, subtractions}} = getState();
  API.pushCounts({additions, subtractions});
}

export const decrementAndNotify = (amount=1) => (dispatch, getState, {API}) => {
  dispatch(decrement(amount));
  const {counts: {additions, subtractions}} = getState();
  API.pushCounts({additions, subtractions});
}