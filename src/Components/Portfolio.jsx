import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import BlogAppThumbnail from '../Assets/Images/BlogAppThumbnail.PNG'
import ChatAppThumbnail from '../Assets/Images/ChatAppThumbnail.PNG'
import QuizAppThumbnail from '../Assets/Images/QuizAppThumbnail.PNG'
import ProductivityAppThumbnail from '../Assets/Images/ProductivityAppThumbnail.jpg'
import EcommerceThumbnail from '../Assets/Images/EcommerceThumbnail.PNG'
import MyBioThumbnail from '../Assets/Images/MyBioThumbnail.PNG'
import AiImageAppThumbnail from '../Assets/Images/AiImageAppThumbnail.jpg'
import { userProjects } from '../Data/UserData'
import { Context } from "../Context/Context"

const PortfolioContainer = styled.div`
    background-color: #f8f9fa;
    padding: 62px 42px;
`;
const PortfolioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 45px;
`;
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
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
`;
const ProjectCategories = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    gap: 20px;
`
const ProjectCategory = styled.span`
    cursor: pointer;
    color: #7b8084;
    font-weight: 400;
    &:hover{
        color: #61dafb;
    }
`;
const ProjectsContainerThreeColumn = styled.div`
    display: flex;
    @media (max-width:950px){
        display: none;
    }
`;

// const ThreeColumnView = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     @media (max-width:950px){
//         display: none;
//     }
// `;
const ProjectColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 30%;
    align-items: center; 
    
`;
const ProjectCardSmall = styled.div`
    cursor: pointer;
    width: 285px;
    height: 190px;
    border-radius: 5px;
    margin-bottom: 20px;
    border: 2px solid #F5F5F5;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 7px;
    transition: all 0.6s ease;
    border: 1px solid #61dafb;
    &:hover{
        background-color: #201f1f;
    }
    @media (min-width:1151px) and (max-width:1199px){
        width: 275px;
        height: 180px;
    }
    @media (min-width:1092px) and (max-width:1150px){
        width: 265px;
        height: 170px;
    }
    @media (min-width:1051px) and (max-width:1091px){
        width: 255px;
        height: 160px;
    }
    @media (min-width:1021px) and (max-width:1050px){
        width: 245px;
        height: 150px;
    }
    @media (min-width:992px) and (max-width:1020px){
        width: 240px;
        height: 145px;
    }
    @media (max-width:600px){
        width: 360px;
        height: 260px;
    }

`;
const ProjectCardMedium = styled.div`
    cursor: pointer;
    width: 286px;
    height: 286px;
    border-radius: 5px;
    margin-bottom: 20px;
    border: 2px solid #F5F5F5;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 7px;
    transition: all 0.6s ease;
    border: 0.5px solid #61dafb;
    &:hover{
        background-color: #201f1f;
    }
    @media (min-width:1151px) and (max-width:1199px){
        width: 276px;
        height: 276px;
    }
    @media (min-width:1092px) and (max-width:1150px){
        width: 266px;
        height: 266px;
    }
     @media (min-width:1051px) and (max-width:1091px){
        width: 256px;
        height: 256px;
    }
    @media (min-width:1021px) and (max-width:1050px){
        width: 246px;
        height: 246px;
    }
    @media (min-width:992px) and (max-width:1020px){
        width: 241px;
        height: 428px;
    }
    @media (max-width:600px){
        width: 360px;
        height: 356px;
    }
`;
const ProjectCardLarge = styled.div`
    cursor: pointer;
    width: 286px;
    height: 429px;
    border-radius: 5px;
    margin-bottom: 20px;
    border: 2px solid #F5F5F5;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 7px;
    transition: all 0.6s ease;
    border: 0.5px solid #61dafb;
    &:hover{
        background-color: #201f1f;
    }
    @media (min-width:1151px) and (max-width:1199px){
        width: 276px;
        height: 419px;
    }
    @media (min-width:1092px) and (max-width:1150px){
        width: 266px;
        height: 409px;
    }
    @media (min-width:1051px) and (max-width:1091px){
        width: 256px;
        height: 400px;
    }
    @media (min-width:1021px) and (max-width:1050px){
        width: 246px;
        height: 390px;
    }
    @media (min-width:992px) and (max-width:1020px){
        width: 239px;
        height: 385px;
    }
    @media (max-width:600px){
        width: 360px;
        height: 490px;
    }
`;
const ProjectCardExtraLarge = styled.div`
    cursor: pointer;
    width: 286px;
    height: 478px;
    border-radius: 5px;
    margin-bottom: 20px;
    border: 2px solid #F5F5F5;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 7px;
    transition: all 0.6s ease;
    border: 0.5px solid #61dafb;
    &:hover{
        background-color: #201f1f;
    }
    @media (min-width:1151px) and (max-width:1199px){
        width: 276px;
        height: 468px;
    }
    @media (min-width:1092px) and (max-width:1150px){
        width: 266px;
        height: 458px;
    }
    @media (min-width:1051px) and (max-width:1091px){
        width: 256px;
        height: 448px;
    }
    @media (min-width:1021px) and (max-width:1050px){
        width: 246px;
        height: 438px;
    }
    @media (min-width:992px) and (max-width:1020px){
        width: 239px;
        height: 433px;
    }
    @media (max-width:600px){
        width: 360px;
        height: 540px;
    }

`;
const ProjectCardImage = styled.img`
    height: inherit;
    width: inherit;
    object-fit: cover;
`;
const AboutProject = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: center;
    justify-content: center;
    transition: all 0.6s ease;
`;
const ProjectTitle = styled.h3`
    color: #61dafb;
    margin:0;
`;
const CurrentProjectCategory = styled.p`
    color: white;
    margin:0;
`;

const ProjectsContainerTwoColumn = styled.div`
    display: none;
    @media (min-width:601px) and (max-width:950px){
        display: flex;
        justify-content: center;
        margin: 0px 100px;
    }
    @media (min-width:900px) and (max-width:950px){
        margin: 0px 70px;
    }
    
    @media (min-width:850px) and (max-width:899px){
        margin: 0px 40px;
    }
    @media (min-width:768px) and (max-width:849px){
        margin: 0px 20px;
    }
`;

const ProjectsContainerSingleColumn = styled.div`
    display: none;
    
    @media(min-width:280px) and (max-width:600px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
`;

const Portfolio = () => {
    const [showImage1, setShowImage1] = useState(true);
    const [showImage2, setShowImage2] = useState(true);
    const [showImage3, setShowImage3] = useState(true);
    const [showImage4, setShowImage4] = useState(true);
    const [showImage5, setShowImage5] = useState(true);
    const [showImage6, setShowImage6] = useState(true);
    const [showImage7, setShowImage7] = useState(true);
    // const [showImage8, setShowImage8] = useState(true);
    const { dispatch } = useContext(Context)

    const handleSidebar = () => {
        dispatch({
            type: "ACTIVATE_PORTFOLIO"
        })
    }
    return (
        <PortfolioContainer id='portfolio' onMouseOver={handleSidebar} onWheel={handleSidebar}>
            <PortfolioWrapper>
                <TitleWrapper>
                    <Title>My Work</Title>
                    <TitleUnderline></TitleUnderline>
                </TitleWrapper>
                {/* <ProjectCategories>
                    <ProjectCategory>All</ProjectCategory>
                    <ProjectCategory>Web</ProjectCategory>
                    <ProjectCategory>DSA</ProjectCategory>
                    <ProjectCategory>Machine Learning</ProjectCategory>
                </ProjectCategories> */}
                <ProjectsContainerThreeColumn>
                    {/* <ThreeColumnView> */}
                    <ProjectColumn>
                        <a href="https://ai-image-generator-swart.vercel.app/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardSmall onMouseOver={() => setShowImage1(false)} onMouseLeave={() => setShowImage1(true)}>
                            {
                                showImage1 ?
                                    <ProjectCardImage src={AiImageAppThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[0].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[0].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }

                        </ProjectCardSmall></a>
                        <a href="https://vikas03071999.github.io/ChatApp/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardLarge onMouseOver={() => setShowImage2(false)} onMouseLeave={() => setShowImage2(true)} onClick={() => window.location}>
                            {
                                showImage2 ?
                                    <ProjectCardImage src={ChatAppThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[1].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[1].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardLarge></a>
                    </ProjectColumn>
                    <ProjectColumn>
                        {/* <a href="https://vikas03071999.github.io/QuizApp/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardExtraLarge onMouseOver={() => setShowImage3(false)} onMouseLeave={() => setShowImage3(true)}>
                            {
                                showImage3 ?
                                    <ProjectCardImage src={QuizAppThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[2].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[2].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardExtraLarge></a> */}
                        <a href="https://productivity-suite-livid.vercel.app/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardExtraLarge onMouseOver={() => setShowImage3(false)} onMouseLeave={() => setShowImage3(true)}>
                            {
                                showImage3 ?
                                    <ProjectCardImage src={ProductivityAppThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[2].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[2].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardExtraLarge></a>
                        <a href="https://vikas03071999.github.io/Ecommerce/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardMedium onMouseOver={() => setShowImage4(false)} onMouseLeave={() => setShowImage4(true)}>
                            {
                                showImage4 ?
                                    <ProjectCardImage src={EcommerceThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[3].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[3].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardMedium></a>
                    </ProjectColumn>
                    <ProjectColumn>
                        <a href="https://know-me-5iql.vercel.app" target="_blank" style={{ textDecoration: "none" }}><ProjectCardSmall onMouseOver={() => setShowImage5(false)} onMouseLeave={() => setShowImage5(true)}>
                            {
                                showImage5 ?
                                    <ProjectCardImage src={MyBioThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[4].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[4].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardSmall>
                        </a>
                        <a href="https://vikas03071999.github.io/QuizApp/" target="_blank" style={{ textDecoration: "none" }}>
                            <ProjectCardSmall onMouseOver={() => setShowImage6(false)} onMouseLeave={() => setShowImage6(true)}>
                            {
                                showImage6 ?
                                    <ProjectCardImage src={QuizAppThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[5].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[5].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardSmall>
                        </a>
                        <ProjectCardMedium onMouseOver={() => setShowImage7(false)} onMouseLeave={() => setShowImage7(true)}>
                            {
                                showImage7 ?
                                    <ProjectCardImage src={EcommerceThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[6].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[6].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardMedium>
                    </ProjectColumn>
                    {/* </ThreeColumnView> */}
                    {/* <TwoColumnView>
                        <ProjectColumn>
                            <ProjectCardSmall onMouseOver={() => setShowImage1(false)} onMouseLeave={() => setShowImage1(true)}>
                                {
                                    showImage1 ?
                                        <ProjectCardImage src={BlogAppThumbnail} /> :
                                        <AboutProject>
                                            <ProjectTitle>{userProjects[0].projectName}</ProjectTitle>
                                            <CurrentProjectCategory>{userProjects[0].techStack}</CurrentProjectCategory>
                                        </AboutProject>
                                }

                            </ProjectCardSmall>
                            <a href="https://vikas03071999.github.io/ChatApp/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardLarge onMouseOver={() => setShowImage2(false)} onMouseLeave={() => setShowImage2(true)} onClick={() => window.location}>
                                {
                                    showImage2 ?
                                        <ProjectCardImage src={ChatAppThumbnail} /> :
                                        <AboutProject>
                                            <ProjectTitle>{userProjects[1].projectName}</ProjectTitle>
                                            <CurrentProjectCategory>{userProjects[1].techStack}</CurrentProjectCategory>
                                        </AboutProject>
                                }
                            </ProjectCardLarge></a>
                            <ProjectCardSmall onMouseOver={() => setShowImage6(false)} onMouseLeave={() => setShowImage6(true)}>
                                {
                                    showImage6 ?
                                        <ProjectCardImage src={BlogAppThumbnail} /> :
                                        <AboutProject>
                                            <ProjectTitle>{userProjects[5].projectName}</ProjectTitle>
                                            <CurrentProjectCategory>{userProjects[5].techStack}</CurrentProjectCategory>
                                        </AboutProject>
                                }
                            </ProjectCardSmall>
                            <ProjectCardMedium onMouseOver={() => setShowImage7(false)} onMouseLeave={() => setShowImage7(true)}>
                                {
                                    showImage7 ?
                                        <ProjectCardImage src={EcommerceThumbnail} /> :
                                        <AboutProject>
                                            <ProjectTitle>{userProjects[6].projectName}</ProjectTitle>
                                            <CurrentProjectCategory>{userProjects[6].techStack}</CurrentProjectCategory>
                                        </AboutProject>
                                }
                            </ProjectCardMedium>
                        </ProjectColumn>
                        <ProjectColumn>
                            <a href="https://vikas03071999.github.io/QuizApp/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardExtraLarge onMouseOver={() => setShowImage3(false)} onMouseLeave={() => setShowImage3(true)}>
                                {
                                    showImage3 ?
                                        <ProjectCardImage src={QuizAppThumbnail} /> :
                                        <AboutProject>
                                            <ProjectTitle>{userProjects[2].projectName}</ProjectTitle>
                                            <CurrentProjectCategory>{userProjects[2].techStack}</CurrentProjectCategory>
                                        </AboutProject>
                                }
                            </ProjectCardExtraLarge></a>
                            <a href="https://vikas03071999.github.io/Ecommerce/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardMedium onMouseOver={() => setShowImage4(false)} onMouseLeave={() => setShowImage4(true)}>
                                {
                                    showImage4 ?
                                        <ProjectCardImage src={EcommerceThumbnail} /> :
                                        <AboutProject>
                                            <ProjectTitle>{userProjects[3].projectName}</ProjectTitle>
                                            <CurrentProjectCategory>{userProjects[3].techStack}</CurrentProjectCategory>
                                        </AboutProject>
                                }
                            </ProjectCardMedium></a>
                            <ProjectCardSmall onMouseOver={() => setShowImage5(false)} onMouseLeave={() => setShowImage5(true)}>
                                {
                                    showImage5 ?
                                        <ProjectCardImage src={MyBioThumbnail} /> :
                                        <AboutProject>
                                            <ProjectTitle>{userProjects[4].projectName}</ProjectTitle>
                                            <CurrentProjectCategory>{userProjects[4].techStack}</CurrentProjectCategory>
                                        </AboutProject>
                                }
                            </ProjectCardSmall>
                        </ProjectColumn>
                    </TwoColumnView> */}
                </ProjectsContainerThreeColumn>
                <ProjectsContainerTwoColumn>
                    <ProjectColumn>
                        <a href="https://ai-image-generator-swart.vercel.app/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardSmall onMouseOver={() => setShowImage1(false)} onMouseLeave={() => setShowImage1(true)}>
                            {
                                showImage1 ?
                                    <ProjectCardImage src={AiImageAppThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[0].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[0].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }

                        </ProjectCardSmall></a>
                        <a href="https://vikas03071999.github.io/ChatApp/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardLarge onMouseOver={() => setShowImage2(false)} onMouseLeave={() => setShowImage2(true)} onClick={() => window.location}>
                            {
                                showImage2 ?
                                    <ProjectCardImage src={ChatAppThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[1].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[1].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardLarge></a>
                        <a href="https://vikas03071999.github.io/QuizApp/" target="_blank" style={{ textDecoration: "none" }}>
                            <ProjectCardSmall onMouseOver={() => setShowImage6(false)} onMouseLeave={() => setShowImage6(true)}>
                                {
                                    showImage6 ?
                                        <ProjectCardImage src={QuizAppThumbnail} /> :
                                        <AboutProject>
                                            <ProjectTitle>{userProjects[5].projectName}</ProjectTitle>
                                            <CurrentProjectCategory>{userProjects[5].techStack}</CurrentProjectCategory>
                                        </AboutProject>
                                }
                            </ProjectCardSmall>
                        </a>
                        <ProjectCardMedium onMouseOver={() => setShowImage7(false)} onMouseLeave={() => setShowImage7(true)}>
                            {
                                showImage7 ?
                                    <ProjectCardImage src={EcommerceThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[6].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[6].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardMedium>
                    </ProjectColumn>
                    <ProjectColumn>
                        <a href="https://productivity-suite-livid.vercel.app/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardExtraLarge onMouseOver={() => setShowImage3(false)} onMouseLeave={() => setShowImage3(true)}>
                            {
                                showImage3 ?
                                    <ProjectCardImage src={ProductivityAppThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[2].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[2].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardExtraLarge></a>
                        <a href="https://vikas03071999.github.io/Ecommerce/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardMedium onMouseOver={() => setShowImage4(false)} onMouseLeave={() => setShowImage4(true)}>
                            {
                                showImage4 ?
                                    <ProjectCardImage src={EcommerceThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[3].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[3].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardMedium></a>
                        <ProjectCardSmall onMouseOver={() => setShowImage5(false)} onMouseLeave={() => setShowImage5(true)}>
                            {
                                showImage5 ?
                                    <ProjectCardImage src={MyBioThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[4].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[4].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardSmall>
                    </ProjectColumn>
                </ProjectsContainerTwoColumn>
                <ProjectsContainerSingleColumn>
                    <ProjectColumn>
                        <a href="https://ai-image-generator-swart.vercel.app/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardSmall onMouseOver={() => setShowImage1(false)} onMouseLeave={() => setShowImage1(true)}>
                            {
                                showImage1 ?
                                    <ProjectCardImage src={AiImageAppThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[0].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[0].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }

                        </ProjectCardSmall></a>
                        <a href="https://vikas03071999.github.io/ChatApp/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardLarge onMouseOver={() => setShowImage2(false)} onMouseLeave={() => setShowImage2(true)} onClick={() => window.location}>
                            {
                                showImage2 ?
                                    <ProjectCardImage src={ChatAppThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[1].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[1].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardLarge></a>
                        <a href="https://productivity-suite-livid.vercel.app/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardExtraLarge onMouseOver={() => setShowImage3(false)} onMouseLeave={() => setShowImage3(true)}>
                            {
                                showImage3 ?
                                    <ProjectCardImage src={ProductivityAppThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[2].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[2].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardExtraLarge></a>
                        <a href="https://vikas03071999.github.io/Ecommerce/" target="_blank" style={{ textDecoration: "none" }}><ProjectCardMedium onMouseOver={() => setShowImage4(false)} onMouseLeave={() => setShowImage4(true)}>
                            {
                                showImage4 ?
                                    <ProjectCardImage src={EcommerceThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[3].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[3].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardMedium></a>
                        <ProjectCardSmall onMouseOver={() => setShowImage5(false)} onMouseLeave={() => setShowImage5(true)}>
                            {
                                showImage5 ?
                                    <ProjectCardImage src={MyBioThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[4].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[4].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardSmall>
                        <a href="https://vikas03071999.github.io/QuizApp/" target="_blank" style={{ textDecoration: "none" }}>
                            <ProjectCardSmall onMouseOver={() => setShowImage6(false)} onMouseLeave={() => setShowImage6(true)}>
                                {
                                    showImage6 ?
                                        <ProjectCardImage src={QuizAppThumbnail} /> :
                                        <AboutProject>
                                            <ProjectTitle>{userProjects[5].projectName}</ProjectTitle>
                                            <CurrentProjectCategory>{userProjects[5].techStack}</CurrentProjectCategory>
                                        </AboutProject>
                                }
                            </ProjectCardSmall>
                        </a>
                        <ProjectCardMedium onMouseOver={() => setShowImage7(false)} onMouseLeave={() => setShowImage7(true)}>
                            {
                                showImage7 ?
                                    <ProjectCardImage src={EcommerceThumbnail} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[6].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[6].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardMedium>
                    </ProjectColumn>
                </ProjectsContainerSingleColumn>
            </PortfolioWrapper>
        </PortfolioContainer>
    )
}

export default Portfolio
