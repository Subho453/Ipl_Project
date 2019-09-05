function fetchAndVisualizeData() {
    fetch('./data.json')
    .then(r => r.json())
    .then(data => {
        visualizeData(data);
    })
}

function visualizeData(data) {
    Highcharts.chart("container", {
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
        categories: data.matchesperyear.Year,
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
        data: data.matchesperyear.Matches,
        showInLegend: false
    }]
    });
}

fetchAndVisualizeData();