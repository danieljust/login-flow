import Ember from 'ember';

let AuthenticationError = function(errors, message) {
  Ember.Error.call(this, message);

  this.errors = errors || [
    {
      title: 'This is custom error.',
      detail: message
    }
  ];
};

AuthenticationError.prototype = Object.create(Ember.Error.prototype);

export default AuthenticationError;
