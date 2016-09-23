import { amiDefined } from 'black-hole-sun/helpers/ami-defined';
import { module, test } from 'qunit';

module('Unit | Helper | ami defined');

test('Value is defined', function(assert) {
  let result = [45];
  let outcome = amiDefined(result);
  assert.equal(outcome, true);
});

test('Value is not defined', function(assert) {
  let result;
  let outcome = amiDefined(result);
  assert.equal(outcome, false);
});
