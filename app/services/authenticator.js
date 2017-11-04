import Service, { inject } from '@ember/service';
import { get } from '@ember/object';
import AuthenticationError from '../errors/authentication-error';
export default Service.extend({
  session: inject(),

  async authenticate(identity, password) {
    try {
      await get(this, 'session').authenticate(
        'authenticator:application',
        identity,
        password
      );
    } catch (reason) {
      throw new AuthenticationError(reason);
    }
  },
  async invalidate() {
    try {
      await get(this, 'session').invalidate('authenticator:application');
    } catch (reason) {
      throw new AuthenticationError(reason);
    }
  }
});

// export const AuthenticationError = EmberObject.extend({
//   toString() {
//     return (
//       get(this, 'reason.message') ||
//       get(this, 'reason.error') ||
//       get(this, 'reason')
//     );
//   }
// });
