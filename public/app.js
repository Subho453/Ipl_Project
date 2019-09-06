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

    Highcharts.chart('teamWons', {
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
          categories: Object.keys(data.teamWons.Years[0]),
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
        
          name: data.teamWons.Teams[0],
          data: Object.values(data.teamWons.Years[0])
      }, 
      { 
        name: data.teamWons.Teams[1],
        data: Object.values(data.teamWons.Years[1])
      },
      {
        
      name: data.teamWons.Teams[2],
      data: Object.values(data.teamWons.Years[2])
      },
      {
        
        name: data.teamWons.Teams[3],
        data: Object.values(data.teamWons.Years[3])
      },
      {
        
        name: data.teamWons.Teams[4],
        data: Object.values(data.teamWons.Years[4])
      },
      {
        
        name: data.teamWons.Teams[5],
        data: Object.values(data.teamWons.Years[5])
      },
      {
        
        name: data.teamWons.Teams[6],
        data: Object.values(data.teamWons.Years[6])
      },
      {
        
        name: data.teamWons.Teams[7],
        data: Object.values(data.teamWons.Years[7])
      },
      {
        
        name: data.teamWons.Teams[8],
        data: Object.values(data.teamWons.Years[8])
      },
      {
        
          name: data.teamWons.Teams[9],
          data: Object.values(data.teamWons.Years[9])
      },
      {
        
            name: data.teamWons.Teams[10],
            data: Object.values(data.teamWons.Years[10])
      },
      {
        
        name: data.teamWons.Teams[11],
        data: Object.values(data.teamWons.Years[11])
      },
      {
        
        name: data.teamWons.Teams[12],
        data: Object.values(data.teamWons.Years[12])
      },
      {
        
        name: data.teamWons.Teams[13],
        data: Object.values(data.teamWons.Years[13])
      },

   
    ]
  });
}

fetchAndVisualizeData();
