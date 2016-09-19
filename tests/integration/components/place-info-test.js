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

  assert.equal(this.$('#countryName').html(), 'Portland'); //todo check info binding
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

  assert.equal(this.$('#humidity').html(), '80%'); //todo check info binding
});
