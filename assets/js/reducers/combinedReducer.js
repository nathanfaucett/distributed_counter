import { combineReducers } from "redux"
import { me } from "./subReducers/me"
import { counts } from "./subReducers/counts"

export const mainReducer = combineReducers({
  counts,
  me
});