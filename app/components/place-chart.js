import Ember from 'ember';

export default Ember.Component.extend({
  model: 0,

  timeWeatherData: Ember.observer('model', function() {
    if (typeof this.get('model.minutely') !== 'undefined') {
      var model = this.get('model.minutely.data');
      var labels = [];
      var data = [];

      for ( var i = 0; i < model.length; i++ ){
        var apiTime = new Date(model[i].time*1000);
        var h = apiTime.getHours();
        var hours = h > 12 ? h - 12 : h;
        if ( hours <= 0 ){ hours = 12; }
        var amPm = h >= 12 ? "PM" : "AM";
        var formattedTime = hours + ':' + ('0'+apiTime.getMinutes()).substr(-2) + ':' + ('0'+apiTime.getSeconds()).substr(-2) + ' ' + amPm;

        labels.push(formattedTime);
        data.push(Math.round(model[i].precipProbability * 100));
      }

      var ctx = document.getElementById("weatherChart");
      new window.Chart(ctx, {
        type: 'line',
        data: {

          labels: labels,
          datasets: [
            {
              label: "Chance of rain each minute for the next hour",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: data,
              spanGaps: false,
            }
          ]

        },
        options: {
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                max: 100,
                min: 0,
                stepSize: 5,
                callback: function(value) {
                  return value + '%';
                }
              }
            }]
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.yLabel + "%";
              }
            }
          }
        }
      });
      window.$('#weatherChart').show();
      window.$('#weatherChartError').hide();
    } else {
      window.$('#weatherChart').hide();
      window.$('#weatherChartError').show();
    }
  })
});
