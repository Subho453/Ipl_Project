function fetchAndVisualizeData() {
    fetch('./data.json')
    .then(r => r.json())
    .then(data => {
        visualizeData(data);
    })
}

function visualizeData(data) {
    Highcharts.chart("matchesperyear", {
      title: {
        text: "Matches Played Per Year"
      },
      subtitle: {
        text: "IPL data"
      },
      xAxis: {
        title:{
          text:'Seasons'
        },
        categories: data.matchesPerYears.Year,
      },
      yAxis:{
          title:{
            text:'Matches'
          }
      },
      series: [{
        type: 'column',
        name:'Matches',
        colorByPoint: true,
        data: data.matchesPerYears.Matches,
        showInLegend: false
    }]
    });

    Highcharts.chart('teamwonperyear', {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Matches Won by Team per Year'
      },
      xAxis: {
        title: {
          text: 'Years'
        },
          categories: Object.keys(data.Teamwonperyear.Years[0]),
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Teams'
          },
          stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'bold',
                  color: ( // theme
                      Highcharts.defaultOptions.title.style &&
                      Highcharts.defaultOptions.title.style.color
                  ) || 'gray'
              }
          }
      },
      legend: {
          align: 'right',
          x: 0,
          verticalAlign: 'top',
          y: 0,
          floating: false,
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || 'white',
          borderColor: '#CCC',
          borderWidth: 1,
          shadow: false
      },
      tooltip: {
          // headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}<br/>'
      },
      plotOptions: {
          column: {
              stacking: 'normal',
              dataLabels: {
                  enabled: true
              }
          }
      },
      series: [{
        
          name: data.Teamwonperyear.Teams[0],
          data: Object.values(data.Teamwonperyear.Years[0])
      }, 
      { 
        name: data.Teamwonperyear.Teams[1],
        data: Object.values(data.Teamwonperyear.Years[1])
      },
      {
        
      name: data.Teamwonperyear.Teams[2],
      data: Object.values(data.Teamwonperyear.Years[2])
      },
      {
        
        name: data.Teamwonperyear.Teams[3],
        data: Object.values(data.Teamwonperyear.Years[3])
      },
      {
        
        name: data.Teamwonperyear.Teams[4],
        data: Object.values(data.Teamwonperyear.Years[4])
      },
      {
        
        name: data.Teamwonperyear.Teams[5],
        data: Object.values(data.Teamwonperyear.Years[5])
      },
      {
        
        name: data.Teamwonperyear.Teams[6],
        data: Object.values(data.Teamwonperyear.Years[6])
      },
      {
        
        name: data.Teamwonperyear.Teams[7],
        data: Object.values(data.Teamwonperyear.Years[7])
      },
      {
        
        name: data.Teamwonperyear.Teams[8],
        data: Object.values(data.Teamwonperyear.Years[8])
      },
      {
        
          name: data.Teamwonperyear.Teams[9],
          data: Object.values(data.Teamwonperyear.Years[9])
      },
      {
        
            name: data.Teamwonperyear.Teams[10],
            data: Object.values(data.Teamwonperyear.Years[10])
      },
      {
        
        name: data.Teamwonperyear.Teams[11],
        data: Object.values(data.Teamwonperyear.Years[11])
      },
      {
        
        name: data.Teamwonperyear.Teams[12],
        data: Object.values(data.Teamwonperyear.Years[12])
      },
      {
        
        name: data.Teamwonperyear.Teams[13],
        data: Object.values(data.Teamwonperyear.Years[13])
      },

   
    ]
  });
}

fetchAndVisualizeData();
