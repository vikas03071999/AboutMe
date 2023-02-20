import React from 'react'
import styled from 'styled-components'
import AboutMe from '../Components/AboutMe';
import Home from '../Components/Home';
import WhatIDo from '../Components/WhatIDo';

const ContentSectionContainer = styled.div`
    flex: 80%;
    height: 100vh;
    overflow-y: scroll;
`;

const ContentSection = () => {
  return (
    <ContentSectionContainer>
      <Home />
      <AboutMe />
      <WhatIDo />
    </ContentSectionContainer>
  )
}

export default ContentSection
