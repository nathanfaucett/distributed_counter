import {increment, decrement} from './simpleActions'
import { pushCounts } from '../../lib/socket_wrapper';

const notifyCounts = channel => ({additions, subtractions}) => pushCounts(channel)({additions, subtractions});

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