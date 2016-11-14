import React from 'react';
import { Row, Column } from 'hedron';

import Logo from 'components/Logo';
import Navbar from 'containers/Navbar';


class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Row>
        <Column xs={3}>
          <Logo />
        </Column>
        <Column xs={9}>
          <Navbar />
        </Column>
      </Row>
    );
  }
}

export default Header;
