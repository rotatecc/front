import React from 'react';
import styled from 'styled-components';
import { Row, Column } from 'hedron';

import Close from '../Close';

import Logo from 'components/Logo';


const Container = styled.div`
  background: rgba(255, 255, 255, 0.95);
  position: relative;
  min-height: 100vh;
  width: 100%;
`;

const LogoWrapper = styled.div`
  padding: 25px 0 5px;
`;

const TestBlock = styled.div`
  background: cyan;
  height: 50px;
  width: 100%;
  margin-bottom: 20px;
`;

function Menu({ close }) {
  return (
    <Container>
      <Close onClick={close} />
      <LogoWrapper>
        <Logo version={'primary'} />
      </LogoWrapper>
      <Row>
        <Column md={10} mdShift={1} lg={8} lgShift={2}>
          <Row>
            <Column md={4}>
              <TestBlock />
            </Column>
            <Column md={4}>
              <TestBlock />
            </Column>
            <Column md={4}>
              <TestBlock />
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  );
}

Menu.propTypes = {
  close: React.PropTypes.func.isRequired,
};

export default Menu;
