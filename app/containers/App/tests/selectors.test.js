import { fromJS } from 'immutable';
import expect from 'expect';

import {
  // TODO
  selectLocationState,
} from '../selectors';


// TODO selector tests here (describe for each)


describe('selectLocationState', () => {
  const locationStateSelector = selectLocationState();
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(locationStateSelector(mockedState)).toEqual(route.toJS());
  });
});
