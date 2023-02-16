import React from 'react'
import styled from 'styled-components'
import  ProfilePicture  from '../Assets/Images/Vikas1922894.jpg'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { AiFillTwitterCircle } from "react-icons/ai"

// REACT BLUE COLOR CODE = "#61dafb"
const SidebarContainer = styled.div`
    flex:20%;
    background-color: aqua;
    height: 100vh;
    background-color: #20232a;
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
        color: #61dafb;
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
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <PictureNameContainer>
            <Picture src={ProfilePicture} />
            <Name>Vikas Belal</Name>
        </PictureNameContainer>
        <SidebarItems>
            <SidebarItem>Home</SidebarItem>
            <SidebarItem>About me</SidebarItem>
            <SidebarItem>What I do</SidebarItem>
            <SidebarItem>Resume</SidebarItem>
            <SidebarItem>Portfolio</SidebarItem>
            <SidebarItem>Contact</SidebarItem>
        </SidebarItems>
        <ConnectWithMe>
            <FaLinkedin style={{color:"white",fontSize:"20px",cursor:"pointer"}}/>
            <FaGithubSquare style={{color:"white",fontSize:"20px",cursor:"pointer"}}/>
            <SiLeetcode style={{color:"white",fontSize:"20px",cursor:"pointer"}}/>
            <AiFillTwitterCircle style={{color:"white",fontSize:"20px",cursor:"pointer"}}/>
        </ConnectWithMe>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
