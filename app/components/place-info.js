import Ember from 'ember';

export default Ember.Component.extend({
  countryName: '',
  model: {},

  locationTime: Ember.computed('model.currently.time', function () {
    if (typeof this.get('model') !== 'undefined') {

      if ( typeof this.get('model.offset') !== 'undefined' ) {
        var d = new Date(this.get('model.currently.time') * 1000);
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

        return new Date(utc + (3600000 * this.get('model.offset')));
      } else {
        return new Date(this.get('model.currently.time') * 1000);
      }
    }
  }),

  chanceRain: Ember.computed('model.currently.precipProbability', function () {
    if (typeof this.get('model') !== 'undefined') {
      return this.get('model.currently.precipProbability') * 100;
    }
  }),

  humidity: Ember.computed('model.currently.humidity', function () {
    if (typeof this.get('model') !== 'undefined') {
      return this.get('model.currently.humidity') * 100;
    }
  }),

  windBearing: Ember.computed('model.currently.windBearing', function () {
    if (typeof this.get('model') !== 'undefined') {
      var val = Math.ceil((this.get('model.currently.windBearing') / 22.5) + 0.5);
      var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
      var tmp = arr[(val % 16)];

      if ( typeof tmp !== 'undefined' && arr.indexOf(tmp) !== -1 ) {
        return arr[(val % 16)];
      } else {
        return ' ';
      }
    } else {
      return ' ';
    }
  }),

  weatherIcon: Ember.observer('model.currently.icon', function () {
    if (typeof this.get('model') !== 'undefined') {
      var icons = new window.Skycons({"color": "#1058ab"});
      var iconSet = window.Skycons;
      var hm = {
        "clear-day": iconSet.CLEAR_DAY,
        "clear-night": iconSet.CLEAR_NIGHT,
        "partly-cloudy-day": iconSet.PARTLY_CLOUDY_DAY,
        "partly-cloudy-night": iconSet.PARTLY_CLOUDY_NIGHT,
        "cloudy": iconSet.CLOUDY,
        "rain": iconSet.RAIN,
        "sleet": iconSet.SLEET,
        "snow": iconSet.SNOW,
        "wind": iconSet.WIND,
        "fog": iconSet.FOG
      };

      icons.set("theWeatherIcon", hm[this.get('model.currently.icon')]);

      icons.play();
    }
  })

});
