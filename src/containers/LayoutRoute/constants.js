/*
 * LayoutRoute Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'YourComponent/YourContainer' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'YourContainer/YOUR_ACTION_CONSTANT';
 */

export const TOGGLE_SIDEBAR_COLLAPSED = 'LayoutRoute/TOGGLE_SIDEBAR_COLLAPSED';
