import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:application', 'Unit | Adapter | application', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let adapter = this.subject();

  assert.equal(adapter.get('host').length > 0, true);
  assert.equal(typeof adapter.get('host') !== 'undefined', true);

});
