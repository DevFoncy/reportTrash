/**
 *
 * Asynchronously loads the component for Account
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
