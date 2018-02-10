import { counts } from '../subReducers/counts'
import { increment, decrement, receiveCounts, setMe } from '../../actions/simpleActions'

const increment1action = increment();
const decrement1action = decrement();
const increment10action = increment(10);
const decrement10action = decrement(10);

const setMeAction = setMe('grantjamespowell')

describe("counts", () => {
  describe("me", () => {
    it("defaults to null", () => {
      expect(counts(undefined, {}).me).toEqual(null);
    });

    it("can be set with a set me action", () => {
      expect(counts(undefined, setMeAction).me).toEqual("grantjamespowell")
    });
  });
});