import { roundTemp } from 'black-hole-sun/helpers/round-temp';
import { module, test } from 'qunit';

module('Unit | Helper | round temp');

// Replace this with your real tests.
test('Round Temp Value', function(assert) {
  let temp = 46.9;
  let result = roundTemp(temp);
  assert.equal(result, 47);
});
