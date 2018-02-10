import * as actions from './constants'

export const setMe = (me) => ({
  type: actions.SET_ME,
  me
})

export const receiveCounts = (addtions, subtractions) => ({
    type: actions.RECEIVE_COUNTS,
    additions,
    subtractions
 })

export const increment = (amount=1) => ({
    type: actions.INCREMENT,
    amount
})

export const decrement = (amount=1) => ({
  type: actions.DECREMENT,
  amount
})