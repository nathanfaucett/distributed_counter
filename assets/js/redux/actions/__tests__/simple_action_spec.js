import { receiveCounts } from '../simpleActions'
import * as actions from '../constants'

describe("receiveCounts", () => {
  it("defaults to a blank object", () => {
    expect(receiveCounts({})).toEqual({type: actions.RECEIVE_COUNTS,additions: {}, subtractions: {}})
  });

  it("can make an action", () => {
    expect(receiveCounts({ additions: 2, subtractions: 2 })).toEqual({type: actions.RECEIVE_COUNTS,additions: 2, subtractions: 2})
  });
});