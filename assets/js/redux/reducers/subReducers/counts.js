import * as actions from '../../actions/constants'
import { merge } from 'ramda'
import { mergeCounts, addTo } from '../../../utils'

export const counts = (state={additions: {}, subtractions: {}, me: null}, action={}) => {
  switch(action.type) {
    case actions.SET_ME:
      return merge(state, { me: action.me })
    case actions.RECEIVE_COUNTS:
      return merge(state, {
        additions: mergeCounts(state.additions, action.additions),
        subtractions: mergeCounts(state.subtractions, action.subtractions)
      })
    case actions.INCREMENT:
      const newAdditions = merge(state.additions,  { [state.me]: addTo(state.additions[state.me], action.amount) });
      return merge(state, { additions: newAdditions })
    case actions.DECREMENT:
      const newSubtractions = merge(state.subtractions, { [state.me]: addTo(state.subtractions[state.me], action.amount) });
      return merge(state, { subtractions: newSubtractions});
    case actions.ZERO_COUNTS:
      return merge(state, {additions: {}, subtractions: {}});
    default:
      return state
  }
}