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
            },eachyear);
            acc[team.winner]=matchcount;
        }
        else{
            acc[team.winner]={};
        }
        return acc;
    },{});
    console.log(teamWon);
    teamWons={'Teams':Object.keys(teamWon),'Years':Object.values(teamWon)};
    return teamWons;
}
teamWonPerYear();
matchesPerYear();
let data={matchesPerYears,teamWons};
     (async () => {
        await writeJsonFile('public/data.json',data);

     })();