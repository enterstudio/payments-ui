'use strict';

var actionTypes = require('action-types');
var appActions = require('app-actions');


describe('appActions', function() {

  it('should dispatch error message', function() {
    var error = {debugMessage: 'something happened'};
    var action = appActions.error(error.debugMessage);
    assert.deepEqual(action, {
      type: actionTypes.APP_ERROR,
      error: error,
    });
  });

});
