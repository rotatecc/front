/*
 * App Actions
 */

import { createAction } from 'redux-actions';

import {
  WINDOW_RESIZE,
  WINDOW_SCROLL,
  SHOW_MENU_OVERLAY,
  HIDE_MENU_OVERLAY,
  TOGGLE_MENU_OVERLAY,
  SHOW_SEARCH_OVERLAY,
  HIDE_SEARCH_OVERLAY,
  TOGGLE_SEARCH_OVERLAY,
} from './constants';


export const windowResize = createAction(WINDOW_RESIZE, (size) => size);

export const windowScroll = createAction(WINDOW_SCROLL, (scroll) => scroll);

export const showMenuOverlay = createAction(SHOW_MENU_OVERLAY);

export const hideMenuOverlay = createAction(HIDE_MENU_OVERLAY);

export const toggleMenuOverlay = createAction(TOGGLE_MENU_OVERLAY);

export const showSearchOverlay = createAction(SHOW_SEARCH_OVERLAY);

export const hideSearchOverlay = createAction(HIDE_SEARCH_OVERLAY);

export const toggleSearchOverlay = createAction(TOGGLE_SEARCH_OVERLAY);
