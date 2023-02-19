import React from 'react'
import styled from 'styled-components'
import ContentSection from './Container/ContentSection';
import Sidebar from './Components/Sidebar';


/**
 font-family: 'Handlee', cursive;
`font-family: 'Libre Franklin', sans-serif;
 */
const AppContainer = styled.div`
  display: flex;
  /* position: relative; */
  font-family: 'Poppins', sans-serif;
`;
const App = () => {
  return (
    <AppContainer>
      <Sidebar />
      <ContentSection />
    </AppContainer>
  )
}

export default App

