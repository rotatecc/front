/*
 * App Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'rccapp/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'rccapp/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const WINDOW_RESIZE = 'rccapp/App/WINDOW_RESIZE';
export const WINDOW_SCROLL = 'rccapp/App/WINDOW_SCROLL';

export const DEFAULT_LOCALE = 'en';
