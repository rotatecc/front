/*
 * HomePage
 */

import React from 'react';
import { Row, Column } from 'hedron';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Row>
        <Column md={6}>
          <h2>Home</h2>
        </Column>
        <Column md={6}>
          <h3>Home</h3>
          <h4>Home</h4>
          <h5>Home</h5>
          <h6>Home</h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Column>
      </Row>
    );
  }
}
