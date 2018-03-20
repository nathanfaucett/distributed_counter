import { combineReducers } from "redux"
import { counts } from "./subReducers/counts"
import { channel } from "./subReducers/channel"

export const mainReducer = combineReducers({
  counts,
  channel
});