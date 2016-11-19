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
  color: ${({ color }) => color};
`;

function Close({ color, onClick }) {
  return (
    <Container color={color} onClick={onClick}>&times;</Container>
  );
}

Close.propTypes = {
  color: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

Close.defaultProps = {
  color: 'white',
};

export default Close;
