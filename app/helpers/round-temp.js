import Ember from 'ember';

export function roundTemp(params/*, hash*/) {
  return Math.round(params);
}

export default Ember.Helper.helper(roundTemp);
