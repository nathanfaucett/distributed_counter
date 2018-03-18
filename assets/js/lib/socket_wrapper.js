import { receiveCounts } from '../redux/actions/simpleActions'

export const updateStoreWithRecievedCounts = store => counts => {
  const action = receiveCounts(counts)
  store.dispatch(action)
};

export const pushCounts = channel => counts => {
  console.log("pushing all da counts");
  channel.push("update", counts);
}