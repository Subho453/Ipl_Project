function MatchesPerYear(Array,item) {
    return Array.filter(arr =>arr==item)
                .reduce(count =>(count+=1),0);
}

module.exports ={
  MatchesPerYear
} 