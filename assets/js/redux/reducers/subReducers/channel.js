import * as actions from "../../actions/constants";
import { merge } from "ramda";

export const channel = (
  state = { room: null, password: null, chirperInterval: null },
  action = {}
) => {
  switch (action.type) {
    case actions.SET_ROOM:
      return merge(state, { room: action.room });
    case actions.SET_PASSWORD:
      return merge(state, { password: action.password });
    case actions.SET_CHIRPER_INTERVAL:
      return merge(state, { chirperInterval: action.chirperInterval });
    default:
      return state;
  }
};
