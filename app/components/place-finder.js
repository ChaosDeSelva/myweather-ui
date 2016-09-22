import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
    countryName: '',
    longitude: 0,
    latitude: 0,
    searchText: '',

    actions: {
        onFocus() {
            this.set('searchText', '');
        }
    },

    didInsertElement (){
        Ember.run.scheduleOnce('afterRender', this, function () {
            var autocomplete;

            var placeChanged = () => {
                var self = this;
                Ember.run(function () {
                    var locationObject = autocomplete.getPlace();

                    if (typeof locationObject !== 'undefined' && locationObject.hasOwnProperty('geometry')) {

                        var latitude = locationObject.geometry.location.lat();
                        var longitude = locationObject.geometry.location.lng();

                        self.set('countryName', locationObject.name);
                        self.set('latitude', latitude);
                        self.set('longitude', longitude);

                        self.$('#autocomplete').blur();

                        self.sendAction('getModel', latitude, longitude);
                    } else {
                        Ember.run.later(function () {
                            window.sweetAlert("Oops... Try Again", "Either you made an invalid selection or you entered an invalid city!", "error");
                        }, 500);
                    }
                });
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

            Ember.$.getScript(config.googleMap.url);

        });
    }
});
