import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  longitude: 0,
  latitude: 0,
  map: {},

  weatherIcon: Ember.observer('longitude', 'latitude', function() {
    var map = this.get('map');
    if ( typeof window.aeris !== 'undefined' ) {
      var latitude = this.get('latitude');
      var longitude = this.get('longitude');

      if (!map.hasOwnProperty('_mapObjId')) {

        // Configure Aeris API keys
        window.aeris.config.set({
          apiId: config.map.apiId,
          apiSecret: config.map.apiSecret
        });

        map = new window.aeris.maps.Map('map-canvas', {
          zoom: 8,
          baseLayer: new window.aeris.maps.layers.AerisTile({
            tileType: 'flat',
            zIndex: 1
          })
        });

        map._mapObjId = 1;

        this.set('map', map);

      } else {
        map = this.get('map');
      }

      var marker = new window.aeris.maps.markers.Marker({
        position: [latitude, longitude]
      });

      marker.setMap(map); // marker is rendered on the map

      // Create 'radar' layer
      new window.aeris.maps.layers.AerisTile({
        tileType: 'radar',
        zIndex: 3,
        map: map
      });

      // Create 'admin' layer
      new window.aeris.maps.layers.AerisTile({
        tileType: 'admin',
        zIndex: 5,
        map: map
      });

      map.setCenter([latitude, longitude]);
    }
  })
});
