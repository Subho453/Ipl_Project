function MatchesPerYear(array) {
    var prev=array[0].year;
    count=0;
    let match=[];
    array.filter(arr => {
        if(prev==arr.year){
            count++;
        }
        else{
            match.push(count);
            count=1;
            prev=arr.year;
        }
    });
    match.push(count);
    return count;
}

module.exports =  MatchesPerYear ;