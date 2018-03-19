import { increment, decrement, setMe, setRoom } from './simpleActions'
import { pushCounts } from '../../lib/socket_wrapper';
import { setRoomInStorage, setUsernameInStorage } from '../../lib/local_storage'
import { randRoom } from '../../lib/initalizers'
import { isEmpty } from 'ramda'

export const setRoom = room => (dispatch, getState, {API}) => {
  
}

export const goToRoom = history => (dispatch, getState) => {
 let room = getState().counts.room
  if (isEmpty(room)) {
    room = randRoom();
    dispatch(setRoomAndWriteStorage(room))
  }
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
  const {counts} = getState();
  API.pushCounts(counts);
}

export const decrementAndNotify = (amount=1) => (dispatch, getState, {API}) => {
  dispatch(decrement(amount));
  const {counts} = getState();
  API.pushCounts(counts);
}