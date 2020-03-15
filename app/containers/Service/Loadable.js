/**
 *
 * Asynchronously loads the component for Service
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
