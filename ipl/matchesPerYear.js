function matchesPerYear(array){
    var matchesPerYear= array.reduce((acc,year) => {
         if(acc[year.season]){
             acc[year.season]++;
         }
         else{
             acc[year.season]=1;
         }
         return acc;
     },{});            
     return matchesPerYear;
    
 }

module.exports =  matchesPerYear ;