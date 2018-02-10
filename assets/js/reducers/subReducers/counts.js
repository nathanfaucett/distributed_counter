import {
  RECEIVE_COUNTS
} from '../../actions/constants'
import { merge } from '../../utils'

export function counts(
  state={},
  action
) {
  switch(action.type) {
    case RECEIVE_COUNTS:
      return merge(state, action.me)
    default:
      return state
  }
}