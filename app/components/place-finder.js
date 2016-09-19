import Ember from 'ember';

export default Ember.Component.extend({

  countryName: '',
  longitude: 0,
  latitude: 0,
  searchText: '',

  didInsertElement (){
    Ember.run.scheduleOnce('afterRender', this, function() {

      var autocomplete;

      var placeChanged = () => {
        var locationObject = autocomplete.getPlace();

        var latitude = locationObject.geometry.location.lat();
        var longitude = locationObject.geometry.location.lng();

        this.set('countryName', locationObject.name);
        this.set('latitude', latitude);
        this.set('longitude', longitude);

        this.sendAction('getModel', latitude , longitude);
      };

      window.initAutocomplete = () => {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new window.google.maps.places.Autocomplete(
          /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
          {types: ['geocode']});

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        autocomplete.addListener('place_changed', placeChanged);
      };

      Ember.$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDsiC8JkAIUCgWjmXaYDjL06igrUMofB1g&libraries=places&callback=initAutocomplete");

    });
  }
});
