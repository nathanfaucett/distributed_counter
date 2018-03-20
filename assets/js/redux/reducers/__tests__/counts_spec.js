import { counts } from '../subReducers/counts'
import { increment, decrement, receiveCounts, setMe, setRoom } from '../../actions/simpleActions'

const increment1action = increment();
const decrement1action = decrement();
const increment10action = increment(10);

const userName = 'grantjamespowell';
const setMeAction = setMe(userName);

describe("counts", () => {
  it("sets defaults correctly", () => {
    expect(counts(undefined, {})).toEqual({
      me: null,
      additions: {},
      subtractions: {},
    });
  });

  describe("me", () => {
    it("can be set with a set me action", () => {
      expect(counts(undefined, setMeAction).me).toEqual("grantjamespowell")
    });
  });

  describe("additions and subtractions for my personal counts", () => {
    it("can increment the internal state for me", () => {
      expect(counts({ me: userName, additions: { [userName]: 10 } }, increment1action)).
        toEqual(expect.objectContaining({me: userName, additions: { [userName]: 11 } }))
    });

    it("can increment the internal state for me even if me isn't in the count", () => {
      expect(counts({ me: userName, additions: {} }, increment1action)).
        toEqual(expect.objectContaining({me: userName, additions: { [userName]: 1 } }))
    });

    it("can increment the internal state for me by multiples", () => {
      expect(counts({ me: userName, additions: { [userName]: 10 } }, increment10action)).
        toEqual(expect.objectContaining({me: userName, additions: { [userName]: 20 } }))
    });

    it("can increment the internal state for me", () => {
      expect(counts({ me: userName, subtractions : { [userName]: 10 } }, decrement1action)).
        toEqual(expect.objectContaining({me: userName, subtractions: { [userName]: 11 } }))
    });

    it("will not delete other peoples counts", () => {
      expect(counts({ me: userName, additions: {a: 1} }, increment1action)).
        toEqual(expect.objectContaining({me: userName, additions: { [userName]: 1, a: 1 } }))
    });
  });

  describe("merging counts", () => {
    it("sending a new count from upstream will update local state", () => {
      let upstreamCountsAction = receiveCounts({
        additions: { a: 1, b: 2, c: 3 },
        subtractions: { a: 1, b: 2, c: 3 }
      });

      let initalState = {
        additions: { a: 3, b: 2, c: 1 },
        subtractions: { a: 3, b: 2, c: 1 }
      }

      let newState = counts(initalState, upstreamCountsAction);
      expect(newState.additions).toEqual({ a: 3, b: 2, c: 3 });
      expect(newState.subtractions).toEqual({ a: 3, b: 2, c: 3 });
    });

    it("missing a username locally adds it locally", () => {
      let upstreamCountsAction = receiveCounts({additions: { d: 1 }, subtractions: { d: 10 }});
      let initalState = { additions: {}, subtractions: {} };
      let newState = counts(initalState, upstreamCountsAction);

      expect(newState.additions).toEqual({ d: 1 });
      expect(newState.subtractions).toEqual({ d: 10 });
    });
  });
});