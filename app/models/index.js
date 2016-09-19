import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr("number"),
  longitude: DS.attr("number"),
  timezone: DS.attr("string"),
  offset: DS.attr("number"),
  currently: DS.attr(),
  minutely: DS.attr()
});
