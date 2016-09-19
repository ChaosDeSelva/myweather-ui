import Ember from 'ember';

export default Ember.Route.extend({
  countryName: '',
  longitude: 0,
  latitude: 0,

  actions: {
    getModel (lat, lng){
      var self = this;
      self.get('store').unloadAll();

      return new Ember.RSVP.Promise(resolve => {
        this.get('store').queryRecord('index', {
          filter: {
            lat: lat,
            lng: lng
          }
        }).then(function(data) {
          resolve(self.controllerFor('index').set('model', data));
          window.$('#weatherPanel').show();
        });
      });
    }
  },

  model(){
    return {};
  },
});
