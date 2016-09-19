import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('place-map', 'Integration | Component | place map', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{place-map}}`);

  assert.equal(this.$().text().trim(), '');

  assert.equal(this.$('#map-canvas').length, 1);
});
