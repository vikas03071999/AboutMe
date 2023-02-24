import React from 'react'
import styled from 'styled-components'
import AboutMe from '../Components/AboutMe';
import Contact from '../Components/Contact';
import Home from '../Components/Home';
import Portfolio from '../Components/Portfolio';
import Resume from '../Components/Resume';
import WhatIDo from '../Components/WhatIDo';

const ContentSectionContainer = styled.div`
    flex: 80%;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
`;

const ContentSection = () => {
  return (
    <ContentSectionContainer>
      <Home />
      <AboutMe />
      <WhatIDo />
      <Resume />
      <Portfolio />
      <Contact />
    </ContentSectionContainer>
  )
}

export default ContentSection
