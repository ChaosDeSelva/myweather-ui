import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('place-info', 'Integration | Component | place info', {
  integration: true
});

test('Check Country Name', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('countryName', 'Portland');

  this.render(hbs`{{place-info countryName=countryName}}`);

  assert.equal(this.$('#countryName').html(), 'Portland');
});

test('Check Humidity Format', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('model', {
    currently : {
      humidity: 0.8
    }
  });

  this.render(hbs`{{place-info  model=model}}`);

  assert.equal(this.$('#humidity').html(), '80%');
});

test('Check Wind Speed Format', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('model', {
    currently : {
      windSpeed: 4
    }
  });

  this.render(hbs`{{place-info  model=model}}`);
  assert.equal(this.$('#windSpeed').html().trim(), '4 mph.');
});

test('Check Wind Bearing Format', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('model', {
    currently : {
      windSpeed: 4,
      windBearing: 140
    }
  });

  this.render(hbs`{{place-info  model=model}}`);
  assert.equal(this.$('#windSpeed').html(), 'SSE 4 mph.');
});

test('Check Visibility Format', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('model', {
    currently : {
      visibility: 4
    }
  });

  this.render(hbs`{{place-info  model=model}}`);

  assert.equal(this.$('#visibility').html(), '4 mi.');
});

test('Check Pressure Format', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('model', {
    currently : {
      pressure: 4
    }
  });

  this.render(hbs`{{place-info  model=model}}`);

  assert.equal(this.$('#pressure').html(), '4 mb.');
});

test('Check Temperature Format', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('model', {
    currently : {
      temperature: 47.6
    }
  });

  this.render(hbs`{{place-info  model=model}}`);

  assert.equal(this.$('#temperature').html(), '48℉');
});

test('Check Feels Like Temperature Format', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('model', {
    currently : {
      apparentTemperature: 47.2
    }
  });

  this.render(hbs`{{place-info  model=model}}`);

  assert.equal(this.$('#feelsLikeTemperature').html(), '47℉');
});

test('Check Chance of Rain Format', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('model', {
    currently : {
      precipProbability: 0.8
    }
  });

  this.render(hbs`{{place-info  model=model}}`);

  assert.equal(this.$('#chanceRain').html(), '80%');
});

test('Check Time Format', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  var mockTime = 1474344773*1000;
  var offset = -8;
  var date = new Date( new Date(mockTime).getTime() + offset);

  this.set('model', {
    currently : {
      time: date.getTime() / 1000
    }
  });

  this.render(hbs`{{place-info  model=model}}`);

  assert.equal(this.$('#locationTime').html(), 'Mon Sep 19 2016 21:12:52 GMT-0700 (PDT)');
});