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
          categories: data.teamWons.Years,
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
      series: data.teamWons.seriesdata
  });
  Highcharts.chart("extraRunsPerTeam", {
    title: {
      text: "Extra Runs given by each teams in 2016"
    },
    subtitle: {
      text: "IPL data"
    },
    xAxis: {
      title:{
        text:'Teams'
      },
      categories: data.extraRunsPerTeam.Teams,
    },
    yAxis:{
        title:{
          text:'ExtraRuns'
        }
    },
    series: [{
      type: 'column',
      name:'ExtraRuns',
      colorByPoint: true,
      data: data.extraRunsPerTeam.ExtraRuns,
      showInLegend: false
  }]
  });
  Highcharts.chart("mostEconomicalBowlers", {
    title: {
      text: "Most Economical Bowlers in Year 2015"
    },
    subtitle: {
      text: "IPL data"
    },
    xAxis: {
      title:{
        text:'Bowlers'
      },
      categories: data.mostEconomicalBowlers.Bowlers,
    },
    yAxis:{
        title:{
          text:'Economies'
        }
    },
    series: [{
      type: 'column',
      name:'Economy',
      colorByPoint: true,
      data: data.mostEconomicalBowlers.Economy,
      showInLegend: false
  }]
  });
}

fetchAndVisualizeData();
