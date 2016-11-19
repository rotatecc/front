import React from 'react';
import styled from 'styled-components';

import Close from '../Close';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const BarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  height: 150px;
  width: 80%;
`;

const Bar = styled.input`
  border: 0;
  border-bottom: 2px solid black;
  outline: 0;
  height: 100px;
  width: 90%;
  font-size: 4rem;
`;

function Search({ close }) {
  return (
    <Container>
      <Close onClick={close} />
      <BarWrapper>
        <Bar placeholder="Search" />
      </BarWrapper>
    </Container>
  );
}

Search.propTypes = {
  close: React.PropTypes.func.isRequired,
};

export default Search;
