import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from "../Context/Context"
import { DiHtml5 } from "react-icons/di";

const WhatIDoContainer = styled.div`
    background-color: #f8f9fa;
    padding: 62px 42px;
`;

const WhatIDoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
const TitleWrapper = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
` 
const Title = styled.h1`
    margin: 0;
    font-size: 50px;
`;
const TitleUnderline = styled.span`
    width: 80px;
    border: 3px solid #61dafb;
`
const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
    gap: 15px;
`;
const SingleSkill = styled.div`
    flex: 35%;
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
`;
const AboutSkill = styled.div`
    display: flex;
    flex-direction: column;
`;
const SkillTitle = styled.h3`
    margin: 0;
    font-size: 24px;
    font-weight: 500;
`;
const SkillDescription = styled.p`

`;

const WhatIDo = () => {
    const {dispatch} = useContext(Context)

    const handleSidebar = () => {
        dispatch({
            type:"ACTIVATE_WHATIDO"
        })
    }
  return (
    <WhatIDoContainer id="whatIDo" onMouseEnter={handleSidebar}>
        <WhatIDoWrapper>
            <TitleWrapper>
                <Title>What I Do?</Title>
                <TitleUnderline></TitleUnderline>
            </TitleWrapper>
            <SkillsContainer>
                <SingleSkill>
                <DiHtml5 style={{width:"150px",height:"75px"}}/>
                    <AboutSkill>
                        <SkillTitle>Web development</SkillTitle>
                        <SkillDescription>I develop websites using ReactJS library.
                            This bio website is also built using ReactJS. ReactJS is a
                            very popular library used by top tech giants like Meta,
                            Airbnb etc
                        </SkillDescription>
                    </AboutSkill>
                </SingleSkill>
                <SingleSkill>
                    <DiHtml5 style={{width:"150px",height:"75px"}}/>
                    <AboutSkill>
                        <SkillTitle>Web development</SkillTitle>
                        <SkillDescription>I develop websites using ReactJS library.
                            This bio website is also built using ReactJS. ReactJS is a
                            very popular library used by top tech giants like Meta,
                            Airbnb etc
                        </SkillDescription>
                    </AboutSkill>
                </SingleSkill>
                <SingleSkill>
                    <DiHtml5 style={{width:"150px",height:"75px"}}/>
                    <AboutSkill>
                        <SkillTitle>Web development</SkillTitle>
                        <SkillDescription>I develop websites using ReactJS library.
                            This bio website is also built using ReactJS. ReactJS is a
                            very popular library used by top tech giants like Meta,
                            Airbnb etc
                        </SkillDescription>
                    </AboutSkill>
                </SingleSkill>
                <SingleSkill>
                    <DiHtml5 style={{width:"150px",height:"75px"}}/>
                    <AboutSkill>
                        <SkillTitle>Web development</SkillTitle>
                        <SkillDescription>I develop websites using ReactJS library.
                            This bio website is also built using ReactJS. ReactJS is a
                            very popular library used by top tech giants like Meta,
                            Airbnb etc
                        </SkillDescription>
                    </AboutSkill>
                </SingleSkill>
            </SkillsContainer>
        </WhatIDoWrapper>
    </WhatIDoContainer>
  )
}

export default WhatIDo
