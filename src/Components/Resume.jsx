import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from "../Context/Context"

const ResumeContainer = styled.div`
    padding: 62px 42px;

`;
const ResumeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
    align-items: center;
`;
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
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
    @media (min-width:280px) and (max-width:350px){
        font-size: 22px
    }
    @media (min-width:350px) and (max-width:500px){
        font-size: 27px;
    }
`;
const TitleUnderline = styled.span`
    width: 80px;
    border: 3px solid #61dafb;
    @media (min-width: 600px ) and (max-width:768px){
        width: 65px;  
    }
    @media (min-width: 500px ) and (max-width:599px){
        font-size: 60px;
    }
    @media (min-width:280px) and (max-width:350px){
        font-size: 50px;
        width: 45px;
    }
    @media (min-width:350px) and (max-width:500px){
        font-size: 40px;
        width: 55px;
    }
`
const EducationExperience = styled.div`
    display: flex;
    @media (min-width: 280px) and (max-width: 1199px) {
        flex-direction: column;
        align-items: center;
    }
`;
const VerticalSection = styled.div`
    flex: 50%;
`;
const Heading = styled.h3`
    display: flex;
    /* justify-content: center; */
    font-weight: 500;
    font-size: 24px;
    margin-left: 5px;
    @media (min-width:768px) and (max-width:1199px){
        justify-content: center;
    }
    @media (min-width:280px) and (max-width:350px){
        font-size: 18px;
    }
    @media (min-width:350px) and (max-width:500px){
        font-size: 20px;
    }
`;
const InfomationCard = styled.div`
    min-width: 380px;
    min-height: 225px;
    border: 2px solid #F5F5F5;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    gap: 15px;
    margin-right: 15px;
    margin-bottom: 25px;
    @media (min-width:768px) and (max-width:1199px){
        width: 500px;
        height: 270px;
    }
    @media (min-width:280px) and (max-width:350px){
        min-width: 250px;
    }
    @media (min-width:350px) and (max-width:500px){
        min-width: 280px;
    }
`;
const TimeDuration = styled.span`
    width: 113px;
    height: 20px;
    background-color: #61dafb;
    padding: 5px 5px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    @media (min-width:280px) and (max-width:350px){
        font-size: 13px;
    }
    @media (min-width:350px) and (max-width:500px){
        font-size: 14px;
    }
`;
const StreamOrRole = styled.h3`
    font-weight: 500;
    margin: 0;
    @media (min-width:280px) and (max-width:350px){
        font-size: 16px;
    }
    @media (min-width:350px) and (max-width:500px){
        font-size: 17px;
    }
`;
const UniversityOrCompany = styled.span`
    color: rgb(220,53,69);
    @media (min-width:280px) and (max-width:350px){
        font-size: 16px;
    }
    @media (min-width:350px) and (max-width:500px){
        font-size: 17px;
    }
`;
const SomeDescription = styled.p`
    margin: 0;
    line-height: 35px;
`;
const Label = styled.label`
    font-weight: 500;
    font-size: 17px;
    @media (min-width:280px) and (max-width:350px){
        font-size: 15px;
    }
    @media (min-width:350px) and (max-width:500px){
        font-size: 16px;
    }
`;
const ResumeLink = styled.a`
    text-decoration: none;
    border: 2px solid #61dafb;
    padding: 10px 30px;
    color: #61dafb;
    font-family: 'Libre Franklin', sans-serif;
    background: transparent;
    border-radius: 30px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        background-color: #61dafb;
        color: white;
        font-weight: 500;
    }
    @media (min-width:280px) and (max-width:350px){
        font-size: 15px;
    }
    @media (min-width:350px) and (max-width:500px){
        font-size: 17px;
    }
`;





const Resume = () => {

    const {dispatch} = useContext(Context)

    const handleSidebar = () => {
        dispatch({
            type:"ACTIVATE_RESUME"
        })
    }

    return (
        <ResumeContainer id='resume' onWheel={handleSidebar} onMouseOver={handleSidebar}>
            <ResumeWrapper>
                <TitleWrapper>
                    <Title>Resume</Title>
                    <TitleUnderline></TitleUnderline>
                </TitleWrapper>
                <EducationExperience>
                <VerticalSection>
                        <Heading>My Experience</Heading>
                        <InfomationCard>
                            <TimeDuration>2021-Current</TimeDuration>
                            <StreamOrRole>System Engineer</StreamOrRole>
                            <UniversityOrCompany>Tata Consultancy Services</UniversityOrCompany>
                            <SomeDescription>
                                <Label>Role</Label> - Frontend developer<br />
                                <Label>Responsibility</Label> - Building enterprise level applications for Ericsson(client)<br />
                                <Label>Technologies</Label> - ReactJS, jQuery, SharePoint 
                            </SomeDescription>
                        </InfomationCard>
                        {/* <InfomationCard>
                            <TimeDuration>2021-2023</TimeDuration>
                            <StreamOrRole>System Engineer</StreamOrRole>
                            <UniversityOrCompany>Tata Consultancy Services</UniversityOrCompany>
                            <SomeDescription>Working on Ericsson account to build enterprise level
                                application that caters to their requirements.
                            </SomeDescription>
                        </InfomationCard> */}
                    </VerticalSection>
                    <VerticalSection>
                        <Heading>My Education</Heading>
                        <InfomationCard>
                            <TimeDuration>2017-2021</TimeDuration>
                            <StreamOrRole>Computer Science</StreamOrRole>
                            <UniversityOrCompany>GLA University, Mathura</UniversityOrCompany>
                            <SomeDescription>
                                <Label>Overall percentage</Label> - 76.4 <br/>
                                <Label>Knowledge gained</Label> - Java(OOPS), DBMS,
                                Operating System, Computer networks, Data Structures and algorithms etc
                            </SomeDescription>
                        </InfomationCard>
                        <InfomationCard>
                            <TimeDuration>2015-2016</TimeDuration>
                            <StreamOrRole>Science stream</StreamOrRole>
                            <UniversityOrCompany>New Beersheba School</UniversityOrCompany>
                            <SomeDescription>
                                <Label>Overall percentage</Label> - 79.6 <br />
                                <Label>Subjects</Label> - Physics, Chemistry, Maths
                            </SomeDescription>
                        </InfomationCard>
                    </VerticalSection>
                </EducationExperience>
                <ResumeLink href="https://drive.google.com/file/d/1crhbKlbzyk_lbibGQ1iYVnKHUCl2UhW1/view?usp=share_link" target="_blank">View resume</ResumeLink>
            </ResumeWrapper>
        </ResumeContainer>
    )
}

export default Resume
