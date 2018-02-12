export const merge = (...args) => Object.assign({}, ...args)

export const uniqueFilter = (value, index, self) => self.indexOf(value) === index;
export const arrayConcatReduce = (acc, curr) => acc.concat(curr)

export const addTo = (base, amount) => base ? base + amount : amount
export const highestOf = (...numbers) => numbers.reduce((acc, curr) => curr > acc ? curr : acc, 0);

export const sumCount = counts => Object.values(counts).reduce((acc, curr) => acc + curr, 0)
export const netCount = (additions, subtractions) => sumCount(additions) - sumCount(subtractions)

export const userNamesFromCounts = (counts) => Object.keys(counts)


export const mergeCounts = (...counts) => counts.
  map(count => userNamesFromCounts(count)).
  reduce(arrayConcatReduce, []).
  filter(uniqueFilter).
  reduce(
    (acc, key) => merge(acc,
       { [key]: highestOf(...counts.map(count => count[key])) }
    ), {}
  );