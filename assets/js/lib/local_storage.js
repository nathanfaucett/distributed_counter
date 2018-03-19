import { setMe, setRoom } from '../redux/actions/simpleActions'
import { defaultTo } from 'ramda'

const USERNAME = "USERNAME";
const ROOM = "ROOM";

const randomValue = () => Math.random().toString(36).substring(7);
const getValueOrDefault = key => localStorage.getItem(key) || randomValue()
const setValue = (key, val) => localStorage.setItem(key, val);

export const setUsernameInStorage = username => setValue(USERNAME, username);
export const setRoomInStorage = room => setValue(ROOM, room);

export const getPreviousUsername = store => {
  const username = getValueOrDefault(USERNAME);
  setUsernameInStorage(username)
  return username;
}

export const getPreviousRoom = store => {
  const room = getValueOrDefault(ROOM);
  setRoomInStorage(room);
  return room;
}

