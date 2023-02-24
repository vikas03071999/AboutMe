import React, { useContext } from 'react'
import styled from 'styled-components'
import { userDetails } from '../Data/UserData';
import { Context } from '../Context/Context';  

const AboutMeConatiner = styled.div`
    min-height: 100vh;
    color: black;
    display: flex;
    transition: all 0.5s ease;
`;

const AboutMeWrapper = styled.div`
    padding: 60px 40px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    padding: 40px;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 50px;
`;

const TitleUnderline = styled.span`
    width: 80px;
    border: 3px solid #61dafb;
`


const AboutMeInfo = styled.div`
    display: flex;
    gap: 10px;
`;

const AboutMeDescription = styled.div`
    flex: 70%;
`;

const DescStartingLine = styled.h1`
    margin: 0;
    letter-spacing: 1px;
    @media (min-width: 1049px) and (max-width: 1094px){
        padding-right : 33px ;
    }
`;

const DescRemainingPara = styled.p`
    margin: 0;
    font-size: 18px;
    padding-right: 70px;
`;

const AboutMeDetails = styled.div`
    flex: 30%;
`;

const SingleDetail = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
`;

const DetailKey = styled.label`
    font-weight: 800;
    width: 57px;
`;

const DetailValue = styled.p`
    margin-left: 10px;
`;

const MailElement = styled.a`
    text-decoration: none;
    color: #61dafb;
    transition: all 0.1s ease;
    &:hover{
        color: #49b6d4;
    }
`;

const AboutMe = () => {
    const {dispatch} = useContext(Context)

    const handleSidebar = () => {
        dispatch({
            type:"ACTIVATE_ABOUT"
        })
    }

    return (
        <AboutMeConatiner id="aboutMe" onMouseOver={handleSidebar} onWheel={handleSidebar}>
            <AboutMeWrapper>
                <Header>
                    <Title>Know me more</Title>
                    <TitleUnderline></TitleUnderline>
                </Header>
                <AboutMeInfo>
                    <AboutMeDescription>
                        <DescStartingLine>I am <span style={{ color: "#61dafb" }}>Vikas Belal</span>, a full stack developer</DescStartingLine><br />
                        <DescRemainingPara>
                        specialized in creating and maintaining websites using various programming languages,
                        such as HTML, CSS, and JavaScript. I am responsible for designing, 
                        coding, testing, and deploying web applications or sites, 
                        and ensuring that they are functional, user-friendly, and visually appealing. I have good
                        amount of knowledge in ReactJS, NodeJS, ExpressJS along with relational and document databases
                        like MongoDB, MySQL etc.

                        </DescRemainingPara>
                    </AboutMeDescription>
                    <AboutMeDetails>
                        <SingleDetail>
                            <DetailKey>Name  : </DetailKey>
                            <DetailValue>{userDetails.name}</DetailValue>
                        </SingleDetail>
                        <SingleDetail>
                            <DetailKey>Email  : </DetailKey>
                            <DetailValue><MailElement href='mailto:belal.vikas.5@gmail.com'>{userDetails.email}</MailElement></DetailValue>
                        </SingleDetail>
                        <SingleDetail>
                            <DetailKey>Age  : </DetailKey>
                            <DetailValue>{new Date().getFullYear() - userDetails.yearOfBirth}</DetailValue>
                        </SingleDetail>
                        <SingleDetail>
                            <DetailKey>From  : </DetailKey>
                            <DetailValue>{userDetails.state}, {userDetails.country}</DetailValue>
                        </SingleDetail>
                    </AboutMeDetails>
                </AboutMeInfo>
            </AboutMeWrapper>
        </AboutMeConatiner>
    )
}

export default AboutMe
