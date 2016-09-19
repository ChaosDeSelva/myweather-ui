import Ember from 'ember';
import { test } from 'ember-qunit';
import moduleForAcceptance from 'black-hole-sun/tests/helpers/module-for-acceptance';

import GooglePlaceAutocompleteResponseMock from './../helpers/mock/place';
import startApp from '../helpers/start-app';

var application;

const ENTER = {keyCode: 13};
const DOWN_ARROW = {keyCode: 40};

moduleForAcceptance('Acceptance: EndToEnd', {
  beforeEach: function () {
    application = startApp();
  },
  afterEach: function () {
    Ember.run(application, 'destroy');
  }
});

test('Google Place Autocomplete', function(assert) {
  visit('/');
  andThen(() => {
    window.google.maps.places = {
      Autocomplete() {
        return {
          addListener(event, f) {
            f.call();
          },
          getPlace() {
            return GooglePlaceAutocompleteResponseMock;
          }
        };
      }
    };

    andThen(() => {
      var displayValue = 'Portland';
      click('#autocomplete');
      fillIn('#autocomplete', 'Portland');

      for (let i = 0; i < displayValue.length; ++i) {
        triggerEvent('#autocomplete', 'keyup', {keyCode: displayValue.charCodeAt(i)});
      }

      triggerEvent('#autocomplete', 'keydown', {keyCode: DOWN_ARROW});
      triggerEvent('#autocomplete', 'keydown', {keyCode: ENTER});
      andThen(() => {
        assert.equal(find('#autocomplete').val(), 'Portland'); //todo should be full address
      });
    });
  });
});
