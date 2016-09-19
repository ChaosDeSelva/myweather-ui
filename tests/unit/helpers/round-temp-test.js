import { roundTemp } from 'black-hole-sun/helpers/round-temp';
import { module, test } from 'qunit';

module('Unit | Helper | round temp');

// Replace this with your real tests.
test('Round Temp Value Up', function(assert) {
  let numHigh = 46.9;
  let resultHigh = roundTemp(numHigh);
  assert.equal(resultHigh, 47);
});

test('Round Temp Value Down', function(assert) {
  let numLow = 28.3;
  let resultLow = roundTemp(numLow);
  assert.equal(resultLow, 28);
});
