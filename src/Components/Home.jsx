import React, { useContext } from 'react'
import styled from 'styled-components'
import { RxDoubleArrowDown } from "react-icons/rx";
import HB3 from "../Assets/Images/HB3.jpg"
import HB1 from "../Assets/Images/HB1.jpg"
import HB2 from "../Assets/Images/HB2.jpg"
import { userDetails } from '../Data/UserData';
import { Context } from "../Context/Context"
// REACT BLUE COLOR CODE = "#61dafb"

const HomeContainer = styled.div`
    @keyframes backgroundToggle {
        0% {background-image:url(${HB1})}
        40% {background-image:url(${HB2})}
        80% {background-image:url(${HB3})}
        100% {background-image:url(${HB1})}
    }
    animation-name: backgroundToggle;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    /* background-image: url(${HB2}); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    color: white;
`;

const Welcome = styled.h2`
    font-weight: 500;
    font-size: 32px;
    margin: 0;
    @media (min-width:280px) and (max-width:350px){
        font-size: 15px;
    }
    @media (min-width:350px) and (max-width:500px){
        font-size: 19px;
    }
    @media (min-width:500px) and (max-width:768px){
        font-size: 27px;
    }
    
    @media (min-width:620px) and (max-width:668px){
        font-size: 25px;
    }

    @media (min-width:550px) and (max-width:619px){
        font-size: 23px;
    }

    @media (min-width: 500px) and (max-width: 549px){
        font-size: 21px;
    }
`;

const WhatAmI = styled.h1`
    font-size: 55px;
    margin: 0;
    @media (min-width:280px) and (max-width:350px){
        font-size: 22px;
    }
    @media (min-width:350px) and (max-width:500px){
        font-size: 27px
    }
    @media (min-width:668px) and (max-width:768px){
        font-size: 50px;
    }
    
    @media (min-width:620px) and (max-width:668px){
        font-size: 45px;
    }

    @media (min-width:550px) and (max-width:619px){
        font-size: 41px;
    }

    @media (min-width: 500px) and (max-width: 549px){
        font-size: 37px;
    }
`;

const BasedIn = styled.p`
    font-size: 32px;
    font-weight: 300;
    margin: 0;
    @media (min-width:280px) and (max-width:350px){
        font-size: 15px;
    }
    @media (min-width:350px) and (max-width:500px){
        font-size: 19px;
    }
    @media (min-width:668px) and (max-width:768px){
        font-size: 27px;
    }
    
    @media (min-width:620px) and (max-width:668px){
        font-size: 25px;
    }

    @media (min-width:550px) and (max-width:619px){
        font-size: 23px;
    }

    @media (min-width: 500px) and (max-width: 549px){
        font-size: 21px;
    }
`;

const ViewMyWork = styled.a`
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
    @media (min-width:668px) and (max-width:768px){
        font-size: 17px;
    }
    
    @media (min-width:620px) and (max-width:668px){
        font-size: 16px;
    }

    @media (min-width:550px) and (max-width:619px){
        font-size: 15px;
    }

    @media (min-width: 500px) and (max-width: 549px){
        font-size: 14px;
    }
`;

const NavigateDownArrow = styled.a`
    margin-top: 35px;
    cursor: pointer;
`;
const ArrowWrapper = styled.span`
    font-size: 40px;
    @keyframes arrowAnimator {
        0%   {top:0px;}
        100% {top:80px;}
    }
    animation-name: arrowAnimator;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    position: relative;
`;



const Home = () => {

    const {dispatch} = useContext(Context)

    const handleSidebar = () => {
        dispatch({
            type:"ACTIVATE_HOME"
        })
    }

    return (
        <HomeContainer id="home" onMouseEnter={handleSidebar} onWheel={handleSidebar}>
            <InfoContainer>
                <Welcome>Welcome</Welcome>
                <WhatAmI>I am a {userDetails.designation}</WhatAmI>
                <BasedIn>based in {userDetails.state}, {userDetails.country}</BasedIn>
                <ViewMyWork href="#portfolio">View my work</ViewMyWork>
            </InfoContainer>
            <NavigateDownArrow href='#portfolio'>
                <ArrowWrapper>
                    <RxDoubleArrowDown style={{ color: "white" }} />
                </ArrowWrapper>
            </NavigateDownArrow>
        </HomeContainer>
    )
}

export default Home
