import Ember from 'ember';

export function amiDefined(params) {
  //Only 1 param passed in , index off 0
  return (typeof params !== 'undefined' && typeof params[0] !== 'undefined');
}

export default Ember.Helper.helper(amiDefined);
