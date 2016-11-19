/*
 * Overlay Actions
 */

import { createAction } from 'redux-actions';

import {
  CLOSE_OVERLAY,
  OPEN_MENU_OVERLAY,
  OPEN_SEARCH_OVERLAY,
} from './constants';


export const closeOverlay = createAction(CLOSE_OVERLAY);

export const openMenuOverlay = createAction(OPEN_MENU_OVERLAY);

export const openSearchOverlay = createAction(OPEN_SEARCH_OVERLAY);
