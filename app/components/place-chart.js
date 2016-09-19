import Ember from 'ember';

export default Ember.Component.extend({
  model: 0,

  timeWeatherData: Ember.observer('model', function() {
    if (typeof this.get('model.minutely') !== 'undefined') {
      var model = this.get('model.minutely.data');
      var labels = [];
      var data = [];

      for ( var i = 0; i < model.length; i++ ){
        labels.push(new Date(model[i].time*1000).getMinutes());
        data.push(Math.round(model[i].precipProbability * 100));
      }

      var ctx = document.getElementById("weatherChart");
      new window.Chart(ctx, {
        type: 'line',
        data: {

          labels: labels,
          datasets: [
            {
              label: "Chance of Rain",
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
          responsive: true
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
