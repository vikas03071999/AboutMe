import React, { useContext } from 'react'
import styled from 'styled-components'
import  ProfilePicture  from '../Assets/Images/Vikas1922894.jpg'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { AiFillTwitterCircle } from "react-icons/ai"
import { Context } from '../Context/Context'
// REACT BLUE COLOR CODE = "#61dafb"
const SidebarContainer = styled.div`
    flex:20%;
    height: 100vh;
    background-color: #20232a;
    overflow-y: scroll;
`;

const SidebarWrapper = styled.div`
    padding: 10px;
    height: 100%;
`;

const PictureNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    cursor: pointer;
`;

const Picture = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 4px solid #61dafb;
`;

const Name = styled.h2`
    color: white;
    font-weight: 500;
`

const SidebarItems = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0;
    align-items: center;
    justify-content: center;
    padding: 0;
`;

const SidebarItem = styled.li`
    color: white;
    font-weight: 400;
    list-style: none;
    font-size: 18px;
    cursor: pointer;
    &:hover{
        color: #61dafb !important;
    }
`;

const ConnectWithMe = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 24px;
    align-items: center;
    justify-content: center;
`;

const Sidebar = () => {

  const {activeClass,dispatch} = useContext(Context)
  console.log(activeClass)
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <PictureNameContainer>
            <Picture src={ProfilePicture} />
            <Name>Vikas Belal</Name>
        </PictureNameContainer>
        <SidebarItems>
            <a href="#home" onClick={()=>dispatch({type:"ACTIVATE_HOME"})} style={{textDecoration:"none"}}><SidebarItem style={{color:activeClass === "Home" ? "#61dafb":"white"}} href="#home">Home</SidebarItem></a>
            <a href="#aboutMe" onClick={()=>dispatch({type:"ACTIVATE_ABOUT"})} style={{textDecoration:"none"}}><SidebarItem style={{color:activeClass === "About" ? "#61dafb":"white"}} href="#aboutMe">About me</SidebarItem></a>
            <a href="#whatIDo" onClick={()=>dispatch({type:"ACTIVATE_WHATIDO"})} style={{textDecoration:"none"}}><SidebarItem style={{color:activeClass === "What I Do" ? "#61dafb":"white"}} href="#whatIDo">Skills</SidebarItem></a>
            <a href="#resume" onClick={()=>dispatch({type:"ACTIVATE_RESUME"})} style={{textDecoration:"none"}}><SidebarItem style={{color:activeClass === "Resume" ? "#61dafb":"white"}} href="#resume">Resume</SidebarItem></a>
            <a href="#portfolio" onClick={()=>dispatch({type:"ACTIVATE_PORTFOLIO"})} style={{textDecoration:"none"}}><SidebarItem style={{color:activeClass === "Portfolio" ? "#61dafb":"white"}} href="#portfolio">Portfolio</SidebarItem></a>
            <a href="#contact" onClick={()=>dispatch({type:"ACTIVATE_CONTACT"})} style={{textDecoration:"none"}}><SidebarItem style={{color:activeClass === "Contact" ? "#61dafb":"white"}} href="#contact">Contact</SidebarItem></a>
        </SidebarItems>
        <ConnectWithMe>
            <a href="https://www.linkedin.com/in/vikas-belal-0193671a4/" target="_blank"><FaLinkedin style={{color:"white",fontSize:"20px",cursor:"pointer"}}/></a>
            <a href="https://github.com/vikas03071999" target="_blank"><FaGithubSquare style={{color:"white",fontSize:"20px",cursor:"pointer"}}/></a>
            <a href="https://leetcode.com/belalvikas/" target="_blank"><SiLeetcode style={{color:"white",fontSize:"20px",cursor:"pointer"}}/></a>
            <a href=""><AiFillTwitterCircle style={{color:"white",fontSize:"20px",cursor:"pointer"}}/></a>
        </ConnectWithMe>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
