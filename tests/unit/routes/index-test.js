import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('Check Properties and Route Exists', function(assert) {
  let route = this.subject();
  assert.expect(7);
  assert.equal(route.get('countryName'), '');
  assert.equal(route.get('longitude'), 0);
  assert.equal(route.get('latitude'), 0);

  route.set('countryName', 'Portland');
  route.set('longitude', 48);
  route.set('latitude', 59);

  assert.equal(route.get('countryName'), 'Portland');
  assert.equal(route.get('longitude'), 48);
  assert.equal(route.get('latitude'), 59);

  assert.ok(route);
});
