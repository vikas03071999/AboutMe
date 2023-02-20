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
`;
const TitleUnderline = styled.span`
    width: 80px;
    border: 3px solid #61dafb;
`
const EducationExperience = styled.div`
    display: flex;
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
`;
const InfomationCard = styled.div`
    width: 380px;
    height: 225px;
    border: 2px solid #F5F5F5;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    gap: 15px;
    margin-right: 15px;
    margin-bottom: 25px;
`;
const TimeDuration = styled.span`
    width: 85px;
    height: 14px;
    background-color: #61dafb;
    padding: 5px 5px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;
const StreamOrRole = styled.h3`
    font-weight: 500;
    margin: 0;
`;
const UniversityOrCompany = styled.span`
    color: rgb(220,53,69);
`;
const SomeDescription = styled.p`
    margin: 0;
`;





const Resume = () => {

    const {dispatch} = useContext(Context)

    const handleSidebar = () => {
        dispatch({
            type:"ACTIVATE_RESUME"
        })
    }

    return (
        <ResumeContainer onWheel={handleSidebar} onMouseEnter={handleSidebar} onMouseOver={handleSidebar}>
            <ResumeWrapper>
                <TitleWrapper>
                    <Title>Resume</Title>
                    <TitleUnderline></TitleUnderline>
                </TitleWrapper>
                <EducationExperience>
                    <VerticalSection>
                        <Heading>My Education</Heading>
                        <InfomationCard>
                            <TimeDuration>2017-2021</TimeDuration>
                            <StreamOrRole>Computer Science</StreamOrRole>
                            <UniversityOrCompany>GLA University, Mathura</UniversityOrCompany>
                            <SomeDescription>Subjects studied were OOPS, DBMS, OperatingSystem,
                                Computer Networks. Scored 7.5 GPA overall
                            </SomeDescription>
                        </InfomationCard>
                        <InfomationCard>
                            <TimeDuration>2015-2016</TimeDuration>
                            <StreamOrRole>P C M</StreamOrRole>
                            <UniversityOrCompany>New Beersheba School</UniversityOrCompany>
                            <SomeDescription>Subjects studied were OOPS, DBMS, OperatingSystem,
                                Computer Networks. Scored 7.5 GPA overall
                            </SomeDescription>
                        </InfomationCard>
                    </VerticalSection>
                    <VerticalSection>
                        <Heading>My Experience</Heading>
                        <InfomationCard>
                            <TimeDuration>2021-2023</TimeDuration>
                            <StreamOrRole>System Engineer</StreamOrRole>
                            <UniversityOrCompany>Tata Consultancy Services</UniversityOrCompany>
                            <SomeDescription>Working on Ericsson account to build enterprise level
                                application that caters to their requirements.
                            </SomeDescription>
                        </InfomationCard>
                        <InfomationCard>
                            <TimeDuration>2021-2023</TimeDuration>
                            <StreamOrRole>System Engineer</StreamOrRole>
                            <UniversityOrCompany>Tata Consultancy Services</UniversityOrCompany>
                            <SomeDescription>Working on Ericsson account to build enterprise level
                                application that caters to their requirements.
                            </SomeDescription>
                        </InfomationCard>
                    </VerticalSection>
                </EducationExperience>
            </ResumeWrapper>
        </ResumeContainer>
    )
}

export default Resume
