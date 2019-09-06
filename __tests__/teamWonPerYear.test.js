let teamWonPerYear = require("../ipl/teamWonPerYear");

describe("Matches Won by each team per year", () => {
  it("Matches Won by few teams per year", () => {
    const array = [
      {winner:"Kolkata Night Riders", season:"2008"},
      {winner:"Kolkata Night Riders", season:"2008"},
      {winner:"Chennai Super Kings",season:"2008"},
      {winner:"Chennai Super Kings",season:"2008"},
      {winner:"Royal Challenger Bangalore",season:"2009"},
      {winner:"Royal Challenger Bangalore",season:"2009"},
      {winner:"Sunrisers Hyderabad",season:"2010"},
      {winner:"Sunrisers Hyderabad",season:"2010"}
    ];
    const expectedOutput = {
      'Kolkata Night Riders':{ '2008':2},
       'Chennai Super Kings':{ '2008':2 },
     'Royal Challenger Bangalore':{ '2009':2},
 'Sunrisers Hyderabad':{'2010':2}
    };
    expect(teamWonPerYear(array)).toEqual(expectedOutput);
  });
  it("Matches Won by team and excluding no winner", () => {
    const array = [
        {"winner":'Kolkata Night Riders',season:2008},
        {"winner":'Kolkata Night Riders',season:2008},
        {"winner":'',season:2008},
        {"winner":'Chennai Super Kings',season:2008},
        {"winner":'Chennai Super Kings',season:2008}
    ];
    const expectedOutput = {
        'Kolkata Night Riders':{ '2008':2},
        'Chennai Super Kings':{ '2008':2},
    };
    expect(teamWonPerYear(array)).toEqual(expectedOutput);
  });
})
