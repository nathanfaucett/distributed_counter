import { setMe } from './redux/actions/simpleActions'
import { defaultTo } from 'ramda'

export const setUsername = store => {
  const username = defaultTo(
    Math.random().toString(36).substring(7)
  )(localStorage.getItem('username'));

  localStorage.setItem('username', username)
  store.dispatch(setMe(username))
}