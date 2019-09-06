/*
1. Reads data from csv file
2. Calls functions implemented ipl module
3. Stores output at `public/data.json`
*/
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
matchesPerYear();
let data={matchesPerYears};
     (async () => {
        await writeJsonFile('public/data.json',data);

     })();

