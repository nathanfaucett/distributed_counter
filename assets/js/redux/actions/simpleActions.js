import * as actions from "./constants";
import { defaultTo } from "ramda";

export const setMe = me => ({
  type: actions.SET_ME,
  me
});

export const receiveCounts = counts => ({
  type: actions.RECEIVE_COUNTS,
  additions: defaultTo({})(counts.additions),
  subtractions: defaultTo({})(counts.subtractions)
});

export const increment = (amount = 1) => ({
  type: actions.INCREMENT,
  amount
});

export const decrement = (amount = 1) => ({
  type: actions.DECREMENT,
  amount
});

export const setRoom = room => ({
  type: actions.SET_ROOM,
  room
});

export const setPassword = password => ({
  type: actions.SET_PASSWORD,
  password
});

export const zeroCounts = () => ({
  type: actions.ZERO_COUNTS
});

export const setChirperInterval = chirperInterval => ({
  type: actions.SET_CHIRPER_INTERVAL,
  chirperInterval
});
