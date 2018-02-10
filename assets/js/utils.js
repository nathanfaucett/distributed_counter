export const merge = (...args) => Object.assign({}, ...args)

export const uniqueFilter = (value, index, self) => self.indexOf(value) === index;

export const mergeCounts = (oldCounts, newCounts) => {
  let uniqueKeys = Object.keys(oldCounts).concat(Object.keys(newCounts)).filter(uniqueFilter);
  return uniqueKeys.reduce((acc, key) => merge(acc, { [key]: higherOf(oldCounts[key], newCounts[key]) }), {});
}

export const addTo = (base, amount) => base ? base + amount : amount
export const higherOf = (one, two) => one ? ( two ? (one > two ? one : two) : one) : two
