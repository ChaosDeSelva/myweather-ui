import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('place-chart', 'Integration | Component | place chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{place-chart}}`);

  assert.equal(this.$().text().trim(), '');

  assert.equal(this.$('#weatherChart').length, 1);
});
