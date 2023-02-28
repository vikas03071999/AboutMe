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
    @media (min-width: 768px) and (max-width:992px){
        font-size: 40px;
    }
    @media (min-width: 600px ) and (max-width:768px){
        font-size: 35px;
    }
    @media (min-width: 500px ) and (max-width:599px){
        font-size: 32px;
    }
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
    /* min-width: 270px;
    min-height: 190px; */
    flex: 35%;
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    border: 2px dotted #61dafb;
    padding: 15px 35px;
    border-radius: 10px;
    background-color: white;
    /* @media (min-width: 992px){
        min-width: 238px;
    } */
    /* @media (max-width:857px) {
        
    } */
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
    <WhatIDoContainer id="whatIDo" onMouseEnter={handleSidebar} onWheel={handleSidebar}>
        <WhatIDoWrapper>
            <TitleWrapper>
                <Title>Skills</Title>
                <TitleUnderline></TitleUnderline>
            </TitleWrapper>
            <SkillsContainer>
                <SingleSkill>
                    <AboutSkill>
                        <SkillTitle>Web development</SkillTitle>
                        <SkillDescription>My expertise includes a variety of programming
                             languages and technologies, such as HTML, CSS, JavaScript, 
                             React, Node.js, and more. I am skilled in database management, 
                             website optimization.
                        </SkillDescription>
                    </AboutSkill>
                </SingleSkill>
                <SingleSkill>
                    <AboutSkill>
                        <SkillTitle>Problem solving</SkillTitle>
                        <SkillDescription>Skilled in designing and implementing efficient
                            algorithms to solve complex problems using various data 
                            structures such as arrays, linked lists, trees, graphs,
                            and more. Solved over 200 problems on Leet code and counting. 
                        </SkillDescription>
                    </AboutSkill>
                </SingleSkill>
                <SingleSkill>
                    <AboutSkill>
                        <SkillTitle>Object oriented programming</SkillTitle>
                        <SkillDescription>Good understanding of OOPS concept such as 
                            classes, inheritance, polymorphism, encapsulation etc.
                            Have good command over OOP language Java.
                        </SkillDescription>
                    </AboutSkill>
                </SingleSkill>
                <SingleSkill>
                    <AboutSkill>
                        <SkillTitle>Software development lifecycle(SDLC)</SkillTitle>
                        <SkillDescription>
                            Experience working with agile team in 
                            a fast paced environment. Good understanding of
                            agile methodolgies such as Sprint planning, product backlog,
                            kanban etc. 
                        </SkillDescription>
                    </AboutSkill>
                </SingleSkill>
            </SkillsContainer>
        </WhatIDoWrapper>
    </WhatIDoContainer>
  )
}

export default WhatIDo
