import { receiveCounts } from '../redux/actions/simpleActions'

export const updateStoreWithRecievedCounts = store => ({body: counts}) => { 
  store.dispatch(receiveCounts(counts));
 };
export const pushCounts = channel => counts => channel.push("update", {body: counts});