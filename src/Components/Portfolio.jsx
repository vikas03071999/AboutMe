import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import MyWork1 from '../Assets/Images/MyWork1.PNG'
import MyWork2 from '../Assets/Images/MyWork2.PNG'
import MyWork3 from '../Assets/Images/MyWork3.PNG'
import MyWork4 from '../Assets/Images/MyWork4.PNG'
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
`;
const TitleUnderline = styled.span`
    width: 80px;
    border: 3px solid #61dafb;
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
const ProjectsContainer = styled.div`
    display: flex;
`;
const ProjectColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 30%;
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
    &:hover{
        background-color: #201f1f;
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
    &:hover{
        background-color: #201f1f;
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
    &:hover{
        background-color: #201f1f;
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
    &:hover{
        background-color: #201f1f;
    }
`;
const ProjectCardImage = styled.img`
    height: inherit;
    width: inherit;
    border-radius: 10px;
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


const Portfolio = () => {
    const [showImage1, setShowImage1] = useState(true);
    const [showImage2, setShowImage2] = useState(true);
    const [showImage3, setShowImage3] = useState(true);
    const [showImage4, setShowImage4] = useState(true);
    const [showImage5, setShowImage5] = useState(true);
    const [showImage6, setShowImage6] = useState(true);
    const [showImage7, setShowImage7] = useState(true);
    // const [showImage8, setShowImage8] = useState(true);
    const {dispatch} = useContext(Context)

    const handleSidebar = () => {
        dispatch({
            type:"ACTIVATE_PORTFOLIO"
        })
    }
    return (
        <PortfolioContainer onMouseOver={handleSidebar}>
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
                <ProjectsContainer>
                    <ProjectColumn>
                        <ProjectCardSmall onMouseOver={() => setShowImage1(false)} onMouseLeave={() => setShowImage1(true)}>
                            {
                                showImage1 ?
                                    <ProjectCardImage src={MyWork1} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[0].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[0].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }

                        </ProjectCardSmall>
                        <ProjectCardLarge onMouseOver={() => setShowImage2(false)} onMouseLeave={() => setShowImage2(true)}>
                            {
                                showImage2 ?
                                    <ProjectCardImage src={MyWork2} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[1].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[1].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardLarge>
                    </ProjectColumn>
                    <ProjectColumn>
                        <ProjectCardExtraLarge onMouseOver={() => setShowImage3(false)} onMouseLeave={() => setShowImage3(true)}>
                            {
                                showImage3 ?
                                    <ProjectCardImage src={MyWork3} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[2].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[2].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardExtraLarge>
                        <ProjectCardMedium onMouseOver={() => setShowImage4(false)} onMouseLeave={() => setShowImage4(true)}>
                            {
                                showImage4 ?
                                    <ProjectCardImage src={MyWork4} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[3].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[3].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardMedium>
                    </ProjectColumn>
                    <ProjectColumn>
                        <ProjectCardSmall onMouseOver={() => setShowImage5(false)} onMouseLeave={() => setShowImage5(true)}>
                            {
                                showImage5 ?
                                    <ProjectCardImage src={MyWork2} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[4].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[4].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardSmall>
                        <ProjectCardSmall onMouseOver={() => setShowImage6(false)} onMouseLeave={() => setShowImage6(true)}>
                            {
                                showImage6 ?
                                    <ProjectCardImage src={MyWork2} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[5].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[5].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                            }
                        </ProjectCardSmall>
                        <ProjectCardMedium onMouseOver={() => setShowImage7(false)} onMouseLeave={() => setShowImage7(true)}>
                        {
                                showImage7 ?
                                    <ProjectCardImage src={MyWork2} /> :
                                    <AboutProject>
                                        <ProjectTitle>{userProjects[6].projectName}</ProjectTitle>
                                        <CurrentProjectCategory>{userProjects[6].techStack}</CurrentProjectCategory>
                                    </AboutProject>
                        }    
                        </ProjectCardMedium>
                    </ProjectColumn>
                </ProjectsContainer>
            </PortfolioWrapper>
        </PortfolioContainer>
    )
}

export default Portfolio
