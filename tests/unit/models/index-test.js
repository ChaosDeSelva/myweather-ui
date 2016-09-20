import { moduleForModel, test } from 'ember-qunit';

moduleForModel('index', 'Unit | Model | index', {
  // Specify the other units that are required for this test.
  needs: []
});

test('Test Model Data', function(assert) {
  assert.expect(6);

  let model = this.subject({latitude: 40, longitude:50, timezone: 0, offset: -8, currently: {temperature: 50}});

  assert.equal(model.get('latitude'), 40);
  assert.equal(model.get('longitude'), 50);
  assert.equal(model.get('timezone'), 0);
  assert.equal(model.get('offset'), -8);
  assert.equal(model.get('currently.temperature'), 50);
  assert.equal(model.get('minutely'), undefined);

});
