import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('place-finder', 'Integration | Component | place finder', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{place-finder}}`);

  assert.equal(this.$('#autocomplete').length, 1);
});

test('Should remove text on focus', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  assert.expect(3);

  this.render(hbs`{{place-finder}}`);

  this.$('#autocomplete').val('Portland');

  assert.equal(this.$('#autocomplete').val(), 'Portland');

  this.$('#autocomplete').blur();
  this.$('#autocomplete').focus();
  this.$('#autocomplete').focusin();

  assert.equal((document.activeElement.id === 'autocomplete'), true);

  assert.equal(this.$('#autocomplete').val(), '');
});