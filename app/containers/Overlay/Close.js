import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
  position: fixed;
  top: 1px;
  right: 20px;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 40px;
  z-index: 105;
`;

function Close({ onClick }) {
  return (
    <Container onClick={onClick}>&times;</Container>
  );
}

Close.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};

export default Close;
