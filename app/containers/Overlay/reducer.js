/*
 * Overlay reducer
 */

import { fromJS } from 'immutable';

import {
  CLOSE_OVERLAY,
  OPEN_MENU_OVERLAY,
  OPEN_SEARCH_OVERLAY,

  OVERLAYTYPE_MENU,
  OVERLAYTYPE_SEARCH,
} from './constants';


const initialState = fromJS({
  type: 'none',
  props: {},
});


export default function overlayReducer(state = initialState, action = {}) {
  const { type, payload, error } = action; // eslint-disable-line no-unused-vars

  switch (type) {
    case CLOSE_OVERLAY: {
      return initialState;
    }
    case OPEN_MENU_OVERLAY: {
      return initialState.set('type', OVERLAYTYPE_MENU);
    }
    case OPEN_SEARCH_OVERLAY: {
      return initialState.set('type', OVERLAYTYPE_SEARCH);
    }
    default:
      return state;
  }
}
