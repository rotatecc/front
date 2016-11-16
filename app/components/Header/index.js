import React from 'react';
import styled from 'styled-components';
import { Row, Column } from 'hedron';

import Logo from 'components/Logo';
import Navbar from 'containers/Navbar';


export class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Row>
          <Column fluid xs={12}>
            <Logo centered />
          </Column>
        </Row>
        <Row>
          <Column fluid xs={12}>
            <Navbar centered />
          </Column>
        </Row>
      </div>
    );
  }
}

export default styled(Header)`
  margin: 15px 0;
`;
