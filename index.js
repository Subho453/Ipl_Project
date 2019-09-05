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
function MatchesPerYear(){
    matchesperyear={};
    matches.filter(year => {
        if(matchesperyear.hasOwnProperty(year.season)==true){
            matchesperyear[year.season]++;
        }
        else{
            matchesperyear[year.season]=1;
        }
    });            
     Matchesperyear={"Year":Object.keys(matchesperyear),"Matches":Object.values(matchesperyear)};
    return Matchesperyear;
}
MatchesPerYear();
let data={Matchesperyear};
     (async () => {
        await writeJsonFile('public/data.json',data);

     })();rm