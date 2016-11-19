/*
 * App Actions
 */

import { createAction } from 'redux-actions';

import {
  WINDOW_RESIZE,
  WINDOW_SCROLL,
} from './constants';


export const windowResize = createAction(WINDOW_RESIZE, (size) => size);

export const windowScroll = createAction(WINDOW_SCROLL, (scroll) => scroll);
