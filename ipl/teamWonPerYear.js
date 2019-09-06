function teamWonPerYear(matches){
    let teamWon=matches.filter(match => match.winner!='')
                       .reduce((acc,team)=>{
        if(acc[team.winner]){
            eachyear={};
            matches.map(match=>eachyear[match.season]=0);
           let matchcount=matches.filter(teams =>teams.winner==team.winner)
                                 .reduce(year=>{
                if(year.season in acc){
                    [year.season]++;
                }
                else{
                    acc=eachyear;
                    console.log(acc);
                }
                return acc;
            },eachyear);
            acc[team.winner]=eachyear;
            
        }
        else{
            acc[team.winner]={};
        }
        return acc;
    },{});
    console.log(teamWon);
}
module.exports =  teamWonPerYear ;