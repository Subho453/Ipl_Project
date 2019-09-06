const csvFilePath='matches.csv'
const writeJsonFile = require('write-json-file');
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    // console.log(jsonObj);
    (async () => {
    await writeJsonFile('matches.json',jsonObj);
    })();

})
const matches=require('./matches.json');
const deliveries=require('./deliveries.json');
function matchesPerYear(){
   var matchesPerYear= matches.reduce((acc,year) => {
        if(acc[year.season]){
            acc[year.season]++;
        }
        else{
            acc[year.season]=1;
        }
        return acc;
    },{});  
     matchesPerYears={"Year":Object.keys(matchesPerYear),"Matches":Object.values(matchesPerYear)};
    return matchesPerYears;
}
function teamWonPerYear(){
    let teamWon=matches.filter(match => match.winner!='')
                       .reduce((acc,team)=>{
        if(acc[team.winner]){
            eachyear={};
            matches.map(match=>eachyear[match.season]=0);
           let matchcount=matches.filter(teams =>teams.winner===team.winner)
                                 .reduce((acc,year)=>{
                if(acc[year.season]){
                    acc[year.season]++;
                }
                else{
                    acc[year.season]=1;
                }
                return acc;
            },{});
            acc[team.winner]=matchcount;
        }
        else{
            acc[team.winner]={};
        }
        return acc;
    },{});
    teamWons={"Team":Object.keys(teamWon),"Years":Object.values(teamWon)};
    return teamWons;
}

function extraRunsPerTeam(){
    var matchId=matches.filter(match => match.season=='2016')
                        .map(match =>match.id);
    var bowlingInning=deliveries.filter(delivery =>matchId.includes(delivery.match_id))
                                .map(delivery => ({team:delivery.bowling_team,extraruns:delivery.extra_runs}));
    var extraRuns=bowlingInning.reduce((acc,runs) =>{
        acc[runs.team]=(acc[runs.team] || 0)+Number(runs.extraruns);
        return acc;
    },{});
    extraRunsPerTeam={"Teams":Object.keys(extraRuns),"ExtraRuns":Object.values(extraRuns)};
    return extraRunsPerTeam;
}
matchesPerYear();
teamWonPerYear();
extraRunsPerTeam();
let data={matchesPerYears,teamWons,extraRunsPerTeam};
     (async () => {
        await writeJsonFile('public/data.json',data);

     })();


