/**
 *
 * Asynchronously loads the component for Ticket
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
