import { pipe, flatten, uniq, reduce, merge, sum, values, max, keys, map, defaultTo, prop, fromPairs } from 'ramda'

export const or0 = defaultTo(0);
export const addTo = (base, amount) => or0(base) + or0(amount);
export const highestOf = (...numbers) => pipe(map(or0), reduce(max, 0))(numbers);

export const sumCount = pipe(values, sum, max(0))
export const netCount = (additions, subtractions) => sumCount(additions) - sumCount(subtractions)
export const uniqueUsernames = pipe(map(keys), flatten, uniq)

export const mergeCounts = (...counts) => pipe(
  uniqueUsernames,
  map(username => [username,  highestOf(...counts.map(prop(username)))]),
  fromPairs
)(counts)

