import React, { useContext } from 'react'
import styled from 'styled-components'
import { SiGmail, SiLinkedin } from "react-icons/si";
import { FiPhone } from "react-icons/fi";
import { Context } from '../Context/Context';

const ContactContainer = styled.div`
  padding: 62px 42px;
`;

const ContactWrapper = styled.div`
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
const ContactInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;
const SingleContactInformation = styled.div`
    display: flex;
    gap: 45px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;
const ContactKey = styled.span`
    font-size: 25px;
    font-weight: 500;
    flex: 20%;
`;
const ContactValue = styled.span`
    font-size: 20px;
    flex: 80%;
`;
const Footer = styled.div`
  background-color:#f8f9fa;
  display: flex;
  padding: 50px 25px;
`
const LeftSection = styled.div`
  flex: 70%;
  font-size: 18px;
`;
const RightSection = styled.div`
  flex:30%;
  font-size: 18px;
`;
const location = window.location.href;



const Contact = () => {
  const { dispatch } = useContext(Context)
  const handleSidebar = () => {
    dispatch({
      type: "ACTIVATE_CONTACT"
    })
  }
  return (
    <>
      <ContactContainer id="contact" onMouseOver={handleSidebar}>
        <ContactWrapper>
          <TitleWrapper>
            <Title>Get in Touch</Title>
            <TitleUnderline></TitleUnderline>
          </TitleWrapper>
          <ContactInformation>
            <SingleContactInformation>
              <ContactKey>Address</ContactKey>
              <ContactValue>Krishnapuri,<br />Pithoragarh, Uttarkhand<br />India</ContactValue>
            </SingleContactInformation>
            <SingleContactInformation>
              <ContactKey><FiPhone style={{ color: "#61dafb" }} /> </ContactKey>
              <ContactValue>(+91) 8171167303</ContactValue>
            </SingleContactInformation>
            <SingleContactInformation>
              <ContactKey><SiGmail style={{ color: "red", alignSelf: "center" }} /> </ContactKey>
              <ContactValue>belal.vikas.5@gmail.com</ContactValue>
            </SingleContactInformation>
            <SingleContactInformation>
              <ContactKey><SiLinkedin /> </ContactKey>
              <ContactValue><a href="https://www.linkedin.com/in/vikas-belal-0193671a4/"
                style={{ textDecoration: "none", color: "#61dafb" }} target="_blank">
                Vikas Belal</a></ContactValue>
            </SingleContactInformation>
          </ContactInformation>
        </ContactWrapper>
      </ContactContainer>
      <Footer>
        <LeftSection>Copyright © 2023 <a href={location}
          style={{ textDecoration: "none", color: "#61dafb" }}>Vikas</a>. All Rights Reserved.</LeftSection>
        <RightSection>Terms & Policy | Disclaimer</RightSection>
      </Footer>
    </>
  )
}


export default Contact
