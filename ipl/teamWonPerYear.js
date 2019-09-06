function teamWonPerYear(matches){
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
    return teamWon;
}
module.exports=
        teamWonPerYear;