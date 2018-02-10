import * as actions from './constants'

export function receiveCounts(addtions, subtractions) {
  return {
    type: actions.RECEIVE_COUNTS,
    additions,
    subtractions
  }
}

export const increment = (amount=1) => {
    type: actions.INCREMENT,
    amount
}

export const decrement = (amount=1) => {
  type: actions.DECREMENT,
  amount
}