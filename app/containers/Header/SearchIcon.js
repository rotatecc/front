import React from 'react';
import styled from 'styled-components';


const Container = styled.a`
  color: black;
  cursor: pointer;
  font-size: 30px;
  position: absolute;
  right: 25px;
  top: 45px;
`;


function SearchIcon({ onClick }) {
  return (
    <Container onClick={onClick}>
      s
    </Container>
  );
}

SearchIcon.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};

export default SearchIcon;
