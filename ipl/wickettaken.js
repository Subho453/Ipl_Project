// const deliveries=require('./deliveries.json');
function mostWicketTaken(deliveries) {
    var data = deliveries.filter(delivery => delivery.player_dismissed != '');
    var bowlers = data.map(name => name.bowler)
        .filter((x, i, arr) => arr.indexOf(x) == i);
    for (let i = 0; i < bowlers.length; i++) {
        var eachbowler=data.filter(delivery =>delivery.bowler == bowlers[i]);
        var batsmans = eachbowler.map(name => name.batsman );
        prev=batsmans[0];
        count=0
        batsman={};
        for(let i=0;i<batsmans.length;i++){
            if(prev==batsmans[i]){
                count++;
            }
            else{
                batsman[batsmans[i]]=count;
                count=1;
                prev=batsmans[i];
            }
        batsman[batsmans[i]]=count;
        }
         console.log(batsman); 
        }
    }



const deliveries = [
    { bowler: 'Irfan', batsman: 'Gl', player_dismissed: 'Gl' },

    { bowler: 'Zaheer', batsman: 'Gl', player_dismissed: 'Gl' },
    { bowler: 'Irfan', batsman: 'Kl', player_dismissed: 'Kl' },
    { bowler: 'Bumrah', batsman: 'Hl', player_dismissed: 'Hl' },
    { bowler: 'Zaheer', batsman: 'Gl', player_dismissed: 'Al' },
    { bowler: 'Zaheer', batsman: 'Gl', player_dismissed: 'Al' },
    { bowler: 'Zaheer', batsman: 'Al', player_dismissed: 'Al' },
    { bowler: 'Mc', batsman: 'Ql', player_dismissed: '' }
];
mostWicketTaken(deliveries);