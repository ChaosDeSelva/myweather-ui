import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('place-chart', 'Integration | Component | place chart', {
  integration: true
});

test('Chart Has Confirmed Text Message', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{place-chart}}`);

  assert.equal(this.$('#weatherChartError').text().trim(), 'Sorry, But no minutely precipitation data was found.');
});