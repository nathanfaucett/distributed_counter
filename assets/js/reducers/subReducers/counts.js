import * as actions from '../../actions/constants'
import { merge, higherOf, mergeCounts } from '../../utils'


export const counts = (state={additions: {}, subractions: {}, me: null}, action={}) => {
  switch(action.type) {
    case actions.SET_ME:
      return merge(state, { me: action.me })
    case actions.RECEIVE_COUNTS:
      return merge(state, {
        additions: mergeCounts(state.additions, action.addition),
        subractions: mergeCounts(state.subractions, action.subractions)
      })
    case actions.INCREMENT:
      return merge(state, { additions: { [state.me]: addTo(state.additions[me], action.amount) }})
    case actions.DECREMENT:
      return merge(state, { subractions: { [state.me]: addTo(state.subractions[me], action.amount) }})
    default:
      return state
  }
}