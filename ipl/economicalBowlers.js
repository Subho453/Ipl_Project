function economicalBowlers(matches, deliveries) {
    var matchId = matches
      .filter(match => match.season == "2015")
      .map(match => match.id);
    var bowlingInning = deliveries
      .filter(delivery => matchId.includes(delivery.match_id))
      .map(delivery => ({
        bowlerName: delivery.bowler,
        ball: delivery.ball,
        bye: delivery.bye_runs,
        legbye: delivery.legbye_runs,
        totalRuns: delivery.total_runs
      }));
    var totalRuns = bowlingInning.reduce((acc, delivery) => {
      acc[delivery.bowlerName] =
        (acc[delivery.bowlerName] || 0) +
        Number(delivery.totalRuns) -
        Number(delivery.bye) -
        Number(delivery.legbye);
      return acc;
    }, {});
    var totalBalls = bowlingInning.reduce((acc, delivery) => {
      if (delivery.ball <= 6) {
        acc[delivery.bowlerName] = (acc[delivery.bowlerName] || 0) + 1;
      }
      return acc;
    }, {});
    total = Object.values(totalRuns);
    balls = Object.values(totalBalls);
    bowlerNames = Object.keys(totalBalls);
  //   console.log(totalRuns);
    var economy = total.map((runs, index) => {
      return { [bowlerNames[index]]: (runs * 6) / balls[index]};
    });
    economicalBowlers = economy.sort((a, b) => Object.values(a) - Object.values(b) );
    economicalBowlers = economicalBowlers.slice(0, 10);
    Bowlers=[];
    Economy=[];
    economicalBowlers.map(bowler =>{
      Bowlers.push(Object.keys(bowler)[0]);
      Economy.push(Object.values(bowler)[0]);
    })
   mostEconomicalBowlers={"Bowlers":Bowlers,"Economy":Economy};
   return mostEconomicalBowlers;

}

module.exports = economicalBowlers;
