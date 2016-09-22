import Ember from 'ember';
import { test } from 'ember-qunit';
import moduleForAcceptance from 'black-hole-sun/tests/helpers/module-for-acceptance';

import GooglePlaceAutocompleteResponseMock from './../helpers/mock/place';

const ENTER = {keyCode: 13};
const DOWN_ARROW = {keyCode: 40};

moduleForAcceptance('Acceptance: EndToEnd');
test('Google Place Autocomplete Complete Selection', function (assert) {
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

      fillIn('#autocomplete', 'Portland');

      for (let i = 0; i < displayValue.length; ++i) {
        triggerEvent('#autocomplete', 'keydown', {keyCode: displayValue.charCodeAt(i)});
      }
      Ember.run.later(function () {
        triggerEvent('#autocomplete', 'keydown', DOWN_ARROW);
        triggerEvent('#autocomplete', 'keydown', ENTER);
        andThen(() => {
          assert.equal(find('#autocomplete').val(), 'Portland, OR, United States');

        });
      }, 1000);


    });
  });
});

test('Google Place Autocomplete Selection Update Country Name Title', function (assert) {
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

      fillIn('#autocomplete', 'Portland');

      for (let i = 0; i < displayValue.length; ++i) {
        triggerEvent('#autocomplete', 'keydown', {keyCode: displayValue.charCodeAt(i)});
      }
      Ember.run.later(function () {
        triggerEvent('#autocomplete', 'keydown', DOWN_ARROW);
        triggerEvent('#autocomplete', 'keydown', ENTER);

        andThen(() => {

          Ember.run.later(function () {
            assert.equal(find('#countryName').html(), 'Portland');
          }, 1000);
        });
      }, 1000);


    });
  });
});

test('Google Place Autocomplete Selection Content Block Visibility', function (assert) {
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

      assert.equal(find('#weatherPanel').is( ":visible" ), false);

      fillIn('#autocomplete', 'Portland');

      for (let i = 0; i < displayValue.length; ++i) {
        triggerEvent('#autocomplete', 'keydown', {keyCode: displayValue.charCodeAt(i)});
      }
      Ember.run.later(function () {
        triggerEvent('#autocomplete', 'keydown', DOWN_ARROW);
        triggerEvent('#autocomplete', 'keydown', ENTER);

        andThen(() => {

          Ember.run.later(function () {
            assert.equal(find('#weatherPanel').is( ":visible" ), true);
          }, 3000);

        });
      }, 1000);


    });
  });
});

test('Google Place Autocomplete Invalid Entry Alert Box', function (assert) {
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

      assert.equal(find('#weatherPanel').is( ":visible" ), false);

      fillIn('#autocomplete', 'Portland');

      for (let i = 0; i < displayValue.length; ++i) {
        triggerEvent('#autocomplete', 'keydown', {keyCode: displayValue.charCodeAt(i)});
      }
      Ember.run.later(function () {
        triggerEvent('#autocomplete', 'keydown', ENTER);

        andThen(() => {
          triggerEvent('#autocomplete', 'keydown', ENTER);

          Ember.run.later(function () {
            assert.equal(Ember.$('.sweet-alert.showSweetAlert.visible').length > 0, true);
            Ember.$('.sweet-alert.showSweetAlert.visible').find('.confirm').click();
              Ember.run.later(function () {
                assert.equal(Ember.$('.sweet-alert.showSweetAlert.visible').length <= 0, true);
              }, 1000);
          }, 3000);

        });
      }, 1000);


    });
  });
});