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


const AboutMeInfo = styled.div`
    display: flex;
    gap: 20px;
    @media (min-width: 280px) and (max-width:992px){
        flex-direction: column;
        gap:50px;
        padding: 20px;
    }

    @media (min-width: 600px ) and (max-width:768px){
        padding: 18px;  
    }
    @media (min-width: 500px ) and (max-width:599px){
        font-size: 15px;
    }
    @media (min-width:280px) and (max-width:350px){
        font-size: 15px;
    }
    @media (min-width:350px) and (max-width:500px){
        font-size: 19px;
    }
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
    @media (min-width: 768px) and (max-width:992px){
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
    }
    @media (min-width: 600px ) and (max-width:768px){
        display: flex;
        align-items: center;
        justify-content: center;
        font-size : 23px ;
    }
    @media (min-width: 500px ) and (max-width:600px){
        /* display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center; */
        font-size : 22px ;
    }
    @media (min-width:280px) and (max-width:350px){
        font-size: 13px;
    }
    @media (min-width:350px) and (max-width:500px){
        font-size: 17px;
    }
`;

const DescRemainingPara = styled.p`
    margin: 0;
    font-size: 18px;
    padding-right: 70px;
    @media (min-width: 768px) and (max-width:992px){
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 17px;
        padding: 0;
        /* padding-left: 15px;
        padding-right: 15px */
    }
    @media (min-width: 600px ) and (max-width:768px){
        display: flex;
        align-items: center;
        justify-content: center;
        font-size  : 16px ;
        padding: 0;
    }
    @media (min-width: 500px ) and (max-width:599px){
        display: flex;
        align-items: center;
        justify-content: center;
        font-size  : 15px ;
        padding: 0;
    }
    @media (min-width:280px) and (max-width:350px){
        display: flex;
        align-items: center;
        justify-content: center;
        font-size  : 11px ;
        padding: 0;
    }
    @media (min-width:350px) and (max-width:500px){
        display: flex;
        align-items: center;
        justify-content: center;
        font-size  : 13px ;
        padding: 0;
    }
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
    @media (min-width:280px) and (max-width:350px){
        font-size: 9px;
        width: auto !important;
    }
    @media (min-width:350px) and (max-width:500px){
        font-size: 14px;
        width: auto !important;
    }
`;

const DetailValue = styled.p`
    margin-left: 10px;
    @media (min-width:280px) and (max-width:350px){
        font-size: 9px;
    }
    @media (min-width:350px) and (max-width:500px){
        font-size: 14px;
    }
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
                        <DescStartingLine>I am <span style={{ color: "#61dafb" }}>  Vikas Belal</span>, a full stack developer</DescStartingLine><br />
                        <DescRemainingPara>
                        specialized in creating and maintaining websites using various programming languages,
                        such as HTML, CSS, and JavaScript. I am responsible for designing, 
                        coding, testing, and deploying web applications or sites, 
                        and ensuring that they are functional, user-friendly, and visually appealing.<br /> I have good
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
