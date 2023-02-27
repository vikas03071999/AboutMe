import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ProfilePicture from '../Assets/Images/DisplayPicture.jpeg'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { AiFillTwitterCircle, AiOutlineClose } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import { Context } from '../Context/Context'
// REACT BLUE COLOR CODE = "#61dafb"
const SidebarContainer = styled.div`
    flex:20%;
    height: 100vh;
    background-color: #20232a;
    overflow-y: scroll;
    @media (max-width:992px){
        display: none;
    }
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
    object-fit: cover;
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

// for resolution less than 992px
const NavbarContainer = styled.div`
    height: 66px;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    z-index: 999;
    @media (min-width:993px) and (max-width:1280px){
        display: none;
    }
`;
const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 66px;
    background-color: #161515;
   
`;
const NameToLeft = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 22px;
    font-weight: 500;
    margin-left: 15px;
`;
const IconsToRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-right: 15px;
`;
const NavbarDropDownWrapper = styled.div`
    background-color: #161515;
    z-index: 999;

`;
const NavbarItems = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 20px;
`;

const NavbarItem = styled.li`
    list-style: none;
    font-weight: 400;
    font-size: 17px;
    width: 100%;
    padding: 6px 0px;
    border-bottom: 1px solid #342f2f;
    cursor: pointer;
    &:hover{
        color: #61dafb !important;
    }
`

const Sidebar = () => {

    const { activeClass, dispatch } = useContext(Context);
    const [ showMenu, setShowMenu] = useState(false);
    return (
        <>
            <SidebarContainer>
                <SidebarWrapper>
                    <PictureNameContainer>
                        <Picture src={ProfilePicture} />
                        <Name>Vikas Belal</Name>
                    </PictureNameContainer>
                    <SidebarItems>
                        <a href="#home" onClick={() => dispatch({ type: "ACTIVATE_HOME" })} style={{ textDecoration: "none" }}><SidebarItem style={{ color: activeClass === "Home" ? "#61dafb" : "white" }} href="#home">Home</SidebarItem></a>
                        <a href="#aboutMe" onClick={() => dispatch({ type: "ACTIVATE_ABOUT" })} style={{ textDecoration: "none" }}><SidebarItem style={{ color: activeClass === "About" ? "#61dafb" : "white" }} href="#aboutMe">About me</SidebarItem></a>
                        <a href="#whatIDo" onClick={() => dispatch({ type: "ACTIVATE_WHATIDO" })} style={{ textDecoration: "none" }}><SidebarItem style={{ color: activeClass === "What I Do" ? "#61dafb" : "white" }} href="#whatIDo">Skills</SidebarItem></a>
                        <a href="#resume" onClick={() => dispatch({ type: "ACTIVATE_RESUME" })} style={{ textDecoration: "none" }}><SidebarItem style={{ color: activeClass === "Resume" ? "#61dafb" : "white" }} href="#resume">Resume</SidebarItem></a>
                        <a href="#portfolio" onClick={() => dispatch({ type: "ACTIVATE_PORTFOLIO" })} style={{ textDecoration: "none" }}><SidebarItem style={{ color: activeClass === "Portfolio" ? "#61dafb" : "white" }} href="#portfolio">Portfolio</SidebarItem></a>
                        <a href="#contact" onClick={() => dispatch({ type: "ACTIVATE_CONTACT" })} style={{ textDecoration: "none" }}><SidebarItem style={{ color: activeClass === "Contact" ? "#61dafb" : "white" }} href="#contact">Contact</SidebarItem></a>
                    </SidebarItems>
                    <ConnectWithMe>
                        <a href="https://www.linkedin.com/in/vikas-belal-0193671a4/" target="_blank"><FaLinkedin style={{ color: "white", fontSize: "20px", cursor: "pointer" }} /></a>
                        <a href="https://github.com/vikas03071999" target="_blank"><FaGithubSquare style={{ color: "white", fontSize: "20px", cursor: "pointer" }} /></a>
                        <a href="https://leetcode.com/belalvikas/" target="_blank"><SiLeetcode style={{ color: "white", fontSize: "20px", cursor: "pointer" }} /></a>
                        <a href=""><AiFillTwitterCircle style={{ color: "white", fontSize: "20px", cursor: "pointer" }} /></a>
                    </ConnectWithMe>
                </SidebarWrapper>
            </SidebarContainer>
            <NavbarContainer>
                <NavbarWrapper>
                    <NameToLeft>Vikas Belal</NameToLeft>
                    <IconsToRight>
                        <a href="https://www.linkedin.com/in/vikas-belal-0193671a4/" target="_blank"><FaLinkedin style={{ color: "white", fontSize: "19px", cursor: "pointer" }} /></a>
                        <a href="https://github.com/vikas03071999" target="_blank"><FaGithubSquare style={{ color: "white", fontSize: "19px", cursor: "pointer" }} /></a>
                        <a href="https://leetcode.com/belalvikas/" target="_blank"><SiLeetcode style={{ color: "white", fontSize: "19px", cursor: "pointer" }} /></a>
                        <a href=""><AiFillTwitterCircle style={{ color: "white", fontSize: "19px", cursor: "pointer" }} /></a>
                        <a>
                            {   showMenu ? 
                                <AiOutlineClose style={{ color: "white", fontSize: "32px", cursor: "pointer" }} onClick={()=>setShowMenu(!showMenu)}/>:
                                <GiHamburgerMenu style={{ color: "white", fontSize: "32px", cursor: "pointer" }} onClick={()=>setShowMenu(!showMenu)}/>
                             } 
                        </a>
                    </IconsToRight>
                </NavbarWrapper>
                {showMenu &&<NavbarDropDownWrapper>
                    <NavbarItems>
                        <a href="#home" onClick={() => {dispatch({ type: "ACTIVATE_HOME" });setShowMenu(false);}} style={{ textDecoration: "none" }}><NavbarItem style={{ color: activeClass === "Home" ? "#61dafb" : "white" }} href="#home">Home</NavbarItem></a>
                        <a href="#aboutMe" onClick={() => {dispatch({ type: "ACTIVATE_ABOUT" });setShowMenu(false)}} style={{ textDecoration: "none" }}><NavbarItem style={{ color: activeClass === "About" ? "#61dafb" : "white" }} href="#aboutMe">About me</NavbarItem></a>
                        <a href="#whatIDo" onClick={() => {dispatch({ type: "ACTIVATE_WHATIDO" });setShowMenu(false)}} style={{ textDecoration: "none" }}><NavbarItem style={{ color: activeClass === "What I Do" ? "#61dafb" : "white" }} href="#whatIDo">Skills</NavbarItem></a>
                        <a href="#resume" onClick={() => {dispatch({ type: "ACTIVATE_RESUME" });setShowMenu(false)}} style={{ textDecoration: "none" }}><NavbarItem style={{ color: activeClass === "Resume" ? "#61dafb" : "white" }} href="#resume">Resume</NavbarItem></a>
                        <a href="#portfolio" onClick={() => {dispatch({ type: "ACTIVATE_PORTFOLIO" });setShowMenu(false)}} style={{ textDecoration: "none" }}><NavbarItem style={{ color: activeClass === "Portfolio" ? "#61dafb" : "white" }} href="#portfolio">Portfolio</NavbarItem></a>
                        <a href="#contact" onClick={() => {dispatch({ type: "ACTIVATE_CONTACT" });setShowMenu(false)}} style={{ textDecoration: "none" }}><NavbarItem style={{ color: activeClass === "Contact" ? "#61dafb" : "white",borderBottom:"none" }} href="#contact">Contact</NavbarItem></a>
                    </NavbarItems>
                </NavbarDropDownWrapper>}
            </NavbarContainer>
        </>
    )
}

export default Sidebar
