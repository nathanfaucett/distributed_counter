import { getPreviousRoom, getPreviousUsername } from './local_storage';
import { setMe, setRoom } from '../redux/actions/simpleActions'
import { pipe } from 'ramda';
import faker from 'faker'

export const randRoom = () => faker.company.bs()
export const loadPreviousUserToStore = store => store.dispatch(setMe(getPreviousUsername()));
export const loadPreviousRoomToStore = store => store.dispatch(setRoom(getPreviousRoom()));