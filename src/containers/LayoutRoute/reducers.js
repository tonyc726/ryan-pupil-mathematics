/*
 * Layout - Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { TOGGLE_SIDEBAR_COLLAPSED } from './constants';

// The initial state of the App
const initialState = {
  sidebarCollapsed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR_COLLAPSED:
      return Object.assign({}, state, { sidebarCollapsed: action.status });
    default:
      return state;
  }
};
