import React from 'react';
import styled from 'styled-components';
import './App.css';

import NavWrapper from './Components/NavWrapper';

const Header = styled.header`
  width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <Header>
      <NavWrapper></NavWrapper>
    </Header>
  );
}

export default App;
