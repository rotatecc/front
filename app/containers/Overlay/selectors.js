/**
 * Overlay state selectors
 */

import { createSelector } from 'reselect';

import { selectGlobal } from 'containers/App/selectors';

const selectOverlay = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('overlay')
);

export {
  selectOverlay,
};
