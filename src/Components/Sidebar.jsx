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
            <SidebarItem style={{color:activeClass === "Home" ? "#61dafb":"white"}}>Home</SidebarItem>
            <SidebarItem style={{color:activeClass === "About" ? "#61dafb":"white"}}>About me</SidebarItem>
            <SidebarItem style={{color:activeClass === "What I Do" ? "#61dafb":"white"}}>What I do</SidebarItem>
            <SidebarItem style={{color:activeClass === "Resume" ? "#61dafb":"white"}}>Resume</SidebarItem>
            <SidebarItem style={{color:activeClass === "Portfolio" ? "#61dafb":"white"}}>Portfolio</SidebarItem>
            <SidebarItem style={{color:activeClass === "Contact" ? "#61dafb":"white"}}>Contact</SidebarItem>
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
