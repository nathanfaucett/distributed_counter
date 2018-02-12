import { combineReducers } from "redux"
import { counts } from "./subReducers/counts"

export const mainReducer = combineReducers({
  counts,
});