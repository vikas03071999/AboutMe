import React from 'react'
import styled from 'styled-components'
import Home from '../Components/Home';

const ContentSectionContainer = styled.div`
    flex: 80%;
    /* background-color: beige; */
`;

const ContentSection = () => {
  return (
    <ContentSectionContainer>
      <Home />
    </ContentSectionContainer>
  )
}

export default ContentSection
