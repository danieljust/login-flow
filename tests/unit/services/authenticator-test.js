import { moduleFor, test } from 'ember-qunit';
moduleFor('service:authenticator', 'Unit | Service | authenticator', {
  // Specify the other units that are required for this test.
  needs: [
    'authenticator:application',
    'service:session',
    'service:authenticator'
  ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
// authenticate test

// invalidate test

// errors test
