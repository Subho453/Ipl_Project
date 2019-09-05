let MatchesPerYear = require("../ipl/MatchesPerYear");

describe("Matches Played per season", () => {
  it("Matches Played per season", () => {
    const array = [5,5,5,2,3,2,1,4]
    const expectedOutput = [1,2,1,1,3];
    expect(MatchesPerYear(array).toEqual(expectedOutput);
  });
})
