/**
 *
 * Asynchronously loads the component for TicketList
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
