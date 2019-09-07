let matchesPerYear = require("../ipl/matchesPerYear");

describe("Matches Played per season", () => {
  it("Matches Played for some season", () => {
    const array = [
      { season: 2008 },
      { season: 2008 },
      { season: 2008 },
      { season: 2009 },
      { season: 2009 },
      { season: 2010 }
    ];
    const expectedOutput = {
      "2008": 3,
      "2009": 2,
      "2010": 1
    };
    expect(matchesPerYear(array)).toEqual(expectedOutput);
  });
  it("Matches Played for zero season", () => {
    const array = [];
    const expectedOutput = {};
    expect(matchesPerYear(array)).toEqual(expectedOutput);
  });
});
