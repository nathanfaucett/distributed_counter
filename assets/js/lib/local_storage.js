import { setMe, setRoom } from '../redux/actions/simpleActions'
import { defaultTo } from 'ramda'

import faker from 'faker'

const USERNAME = "USERNAME";
const ROOM = "ROOM";

const randomValue = faker.internet.userName;
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
