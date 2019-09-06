let extraRunsPerTeam = require("../ipl/extraRunsPerTeam");

describe("Extra Runs given by each Teams in 2016", () => {
  it("extra runs per team", () => {
    const matches = [
      { id: 1, season: "2016" },
      { id: 2, season: "2016" },
      { id: 3, season: "2008" },
      { id: 4, season: "2008" },
      { id: 5, season: "2009" },
      { id: 6, season: "2016" },
      { id: 7, season: "2010" },
      { id: 8, season: "2010" }
    ];
    const deliveries = [
      { match_id: 1, bowling_team: "Chennai Super Kings", extra_runs: 0 },
      { match_id: 2, bowling_team: "Chennai Super Kings", extra_runs: 5 },
      { match_id: 8, bowling_team: "Chennai Super Kings", extra_runs: 0 },
      { match_id: 6, bowling_team: "Mumbai Indians", extra_runs: 3 },      
    ];
    const expectedOutput = {
      "Chennai Super Kings": 5,
      "Mumbai Indians":3
    };
    expect(extraRunsPerTeam(matches, deliveries)).toEqual(expectedOutput);
  });
  it("no extra runs given by per team", () => {
    const matches = [
      { id: 1, season: "2016" },
      { id: 2, season: "2016" },
      { id: 3, season: "2008" },
      { id: 4, season: "2008" },
      { id: 5, season: "2009" },
      { id: 6, season: "2016" },
      { id: 7, season: "2010" },
      { id: 8, season: "2010" }
    ];
    const deliveries = [
      { match_id: 1, bowling_team: "Chennai Super Kings", extra_runs: 0 },
      { match_id: 2, bowling_team: "Chennai Super Kings", extra_runs: 0 },
      { match_id: 8, bowling_team: "Chennai Super Kings", extra_runs: 0 },
      { match_id: 6, bowling_team: "Mumbai Indians", extra_runs: 0 },      
    ];
    const expectedOutput = {
      "Chennai Super Kings": 0,
      "Mumbai Indians":0
    };
    expect(extraRunsPerTeam(matches, deliveries)).toEqual(expectedOutput);
  });
  it("No deliveries in the year 2016" , () => {
    const matches = [
      { id: 1, season: "2016" },
      { id: 2, season: "2016" },
      { id: 3, season: "2008" },
      { id: 4, season: "2008" },
      { id: 5, season: "2009" },
      { id: 6, season: "2016" },
      { id: 7, season: "2010" },
      { id: 8, season: "2010" }
    ];
    const deliveries = [
      { match_id: 3, bowling_team: "Chennai Super Kings", extra_runs: 0 },
      { match_id: 4, bowling_team: "Chennai Super Kings", extra_runs: 0 },
      { match_id: 5, bowling_team: "Chennai Super Kings", extra_runs: 0 },
      { match_id: 8, bowling_team: "Mumbai Indians", extra_runs: 0 },      
    ];
    const expectedOutput = {};
    expect(extraRunsPerTeam(matches, deliveries)).toEqual(expectedOutput);
  });
});
// return Matchesperyear;
