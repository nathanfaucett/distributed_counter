import { mergeCounts, merge, uniqueFilter, highestOf, netCount, sumCount } from '../utils'

describe("highestOf", () => {
  it("returns the highest of arguements",() => {
    expect(highestOf(1,2,3)).toEqual(3)
    expect(highestOf(1)).toEqual(1);
    expect(highestOf(1,2,3, null, undefined)).toEqual(3)
  });
});

describe("merge", () => {
  it("it merges objects", () => {
    expect(merge({a: 2}, {b: 2})).toEqual({a: 2, b: 2});
    expect(merge({a: 2}, {a: 3})).toEqual({a: 3});
  });
});

describe("highestOf", () => {
  it("compares the higher of two values", () => {
    expect(highestOf(3,4)).toEqual(4)
  });

  it("returns the value if they are the same", () => {
    expect(highestOf(4,4)).toEqual(4)
  });

  it("returns the other if one is undefined", () => {
    expect(highestOf(undefined, 4)).toEqual(4);
    expect(highestOf(4, undefined)).toEqual(4);
  });

  it("returns the other if one is null", () => {
    expect(highestOf(null, 4)).toEqual(4);
    expect(highestOf(4, null)).toEqual(4);
  });
});

describe("uniqueFilter", () => {
  expect([1,2,2,3].filter(uniqueFilter)).toEqual([1,2,3])
});

describe("mergeCount", () => {
  it("merges counts", () => {
    expect(mergeCounts({a: 1, b: 2}, {a: 2, b:1})).toEqual({a: 2, b: 2})
    expect(mergeCounts({a: 1}, {b: 1})).toEqual({a: 1, b: 1})
    expect(mergeCounts({a: 2, c: 1}, {a: 1, b: 2, c: 3})).toEqual({a: 2, b: 2, c: 3})
  });
})

describe("sum counts", () => {
  it("sums counts", () => {
    expect(sumCount({})).toEqual(0)
    expect(sumCount({ a: 1, b: 2})).toEqual(3)
    expect(sumCount({ a: 10, b: 20, c: 30})).toEqual(60)
  });
});

describe("netCounts", () => {
  it("give the net of the counts", () => {
    expect(netCount({}, {})).toEqual(0);
    expect(netCount({a: 1}, {a: 1, b:2 })).toEqual(-2);
    expect(netCount({a: 1, b: 2}, {a: 1, b:2 })).toEqual(0);
    expect(netCount({a: 10, b: 10}, {a: 2, b:2 })).toEqual(16);
  });
});