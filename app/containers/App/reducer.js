/*
 * AppReducer
 */

import { fromJS } from 'immutable';

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


// The initial state of the App
const initialState = fromJS({
  window: {
    width: 0, // viewport width (not document)
    height: 0, // viewport height (not document)
    left: 0, // scrollLeft
    top: 0, // scrollTop
  },
  menuOverlay: false,
  searchOverlay: false,
});


function appReducer(state = initialState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case WINDOW_RESIZE: {
      const newWindowSize = state.get('window')
        .set('width', payload.width)
        .set('height', payload.height);

      return state.set('window', newWindowSize);
    }
    case WINDOW_SCROLL: {
      const newWindowScroll = state.get('window')
        .set('left', payload.left)
        .set('top', payload.top);

      return state.set('window', newWindowScroll);
    }
    case SHOW_MENU_OVERLAY: {
      return state.set('menuOverlay', true);
    }
    case HIDE_MENU_OVERLAY: {
      return state.set('menuOverlay', false);
    }
    case TOGGLE_MENU_OVERLAY: {
      return state.set('menuOverlay', !state.get('menuOverlay'));
    }
    case SHOW_SEARCH_OVERLAY: {
      return state.set('searchOverlay', true);
    }
    case HIDE_SEARCH_OVERLAY: {
      return state.set('searchOverlay', false);
    }
    case TOGGLE_SEARCH_OVERLAY: {
      return state.set('searchOverlay', !state.get('searchOverlay'));
    }
    default:
      return state;
  }
}

export default appReducer;
