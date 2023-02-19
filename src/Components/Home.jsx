import React from 'react'
import styled from 'styled-components'
import { RxDoubleArrowDown } from "react-icons/rx";
import HB3 from "../Assets/Images/HB3.jpg"
import HB1 from "../Assets/Images/HB1.jpg"
import HB2 from "../Assets/Images/HB2.jpg"
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
`;

const WhatAmI = styled.h1`
    font-size: 55px;
    margin: 0;
`;

const BasedIn = styled.p`
    font-size: 32px;
    font-weight: 300;
    margin: 0;
`;

const HireMe = styled.button`
    border: 2px solid #61dafb;
    padding: 10px 30px;
    color: #61dafb;
    font-family: 'Libre Franklin', sans-serif;
    background: transparent;
    border-radius: 30px;
    font-size: 20px;
    cursor: pointer;

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
    return (
        <HomeContainer>
            <InfoContainer>
                <Welcome>Welcome</Welcome>
                <WhatAmI>I am a Web Developer</WhatAmI>
                <BasedIn>based in Uttarakhand, India</BasedIn>
                <HireMe>Hire me</HireMe>
            </InfoContainer>
            <NavigateDownArrow href='#'>
                <ArrowWrapper>
                    <RxDoubleArrowDown style={{ color: "white" }} />
                </ArrowWrapper>
            </NavigateDownArrow>
        </HomeContainer>
    )
}

export default Home