/*
 * LayoutRoute Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { TOGGLE_SIDEBAR_COLLAPSED } from './constants';

/**
 * Toggle App LayoutRoute Sidebar Collapsed Status
 *
 * @return {object}      An action object with a string of TOGGLE_SIDEBAR_COLLAPSED
 */
// export function toggleSidebarCollapsed(status) {
//   console.log('toggleSidebarCollapsed', status);
//   return (dispatch, getState) =>
//     dispatch({
//       type: TOGGLE_SIDEBAR_COLLAPSED,
//       status: isBoolean(status) ? status : !getState().layout.sidebarCollapsed,
//     });
// }
export function toggleSidebarCollapsed(status) {
  return {
    type: TOGGLE_SIDEBAR_COLLAPSED,
    status,
  };
}
