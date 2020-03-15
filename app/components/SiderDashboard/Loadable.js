/**
 *
 * Asynchronously loads the component for Sider
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
