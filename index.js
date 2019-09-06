
const matches=require('./matches.json');
const deliveries=require('./deliveries.json');
function extraRunsPerTeam(){
    var matchId=matches.filter(match => match.season=='2016')
                        .map(match =>match.id);
    var bowlingInning=deliveries.filter(delivery =>matchId.includes(delivery.match_id))
                                .map(delivery => ({team:delivery.bowling_team,extraruns:delivery.extra_runs}));
    var extraRuns=bowlingInning.reduce((acc,runs) =>{
        acc[runs.team]=(acc[runs.team] || 0)+Number(runs.extraruns);
        return acc;
    },{});

    return extraRuns;
}
extraRunsPerTeam();