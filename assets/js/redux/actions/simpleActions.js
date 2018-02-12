import * as actions from './constants'

export const setMe = (me) => ({
  type: actions.SET_ME,
  me
})

export const receiveCounts = (counts) => ({
    type: actions.RECEIVE_COUNTS,
    additions: counts.additions ? counts.additions : {},
    subtractions: counts.subtractions ? counts.subtractions : {}
 })

export const increment = (amount=1) => ({
    type: actions.INCREMENT,
    amount
})

export const decrement = (amount=1) => ({
  type: actions.DECREMENT,
  amount
})