import { mergeCounts, merge, higherOf, uniqueFilter } from '../utils'

describe("merge", () => {
  it("it merges objects", () => {
    expect(merge({a: 2}, {b: 2})).toEqual({a: 2, b: 2});
    expect(merge({a: 2}, {a: 3})).toEqual({a: 3});
  });
});

describe("higherOf", () => {
  it("compares the higher of two values", () => {
    expect(higherOf(3,4)).toEqual(4)
  });

  it("returns the value if they are the same", () => {
    expect(higherOf(4,4)).toEqual(4)
  });

  it("returns the other if one is undefined", () => {
    expect(higherOf(undefined, 4)).toEqual(4);
    expect(higherOf(4, undefined)).toEqual(4);
  });

  it("returns the other if one is null", () => {
    expect(higherOf(null, 4)).toEqual(4);
    expect(higherOf(4, null)).toEqual(4);
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