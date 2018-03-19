import { increment, decrement, setMe, setRoom } from './simpleActions'
import { pushCounts } from '../../lib/socket_wrapper';
import { setRoomInStorage, setUsernameInStorage } from '../../lib/local_storage'
import { randRoom } from '../../lib/initalizers'
import { isEmpty } from 'ramda'

const notifyCounts = channel => ({additions, subtractions}) => pushCounts(channel)({additions, subtractions});

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

export const incrementAndNotify = (amount=1) => (dispatch, getState, {channel}) =>{
  dispatch(increment(amount));
  const {counts} = getState();
  notifyCounts(channel)(counts);
}

export const decrementAndNotify = (amount=1) => (dispatch, getState, {channel}) => {
  dispatch(decrement(amount));
  const {counts} = getState();
  notifyCounts(channel)(counts);
}