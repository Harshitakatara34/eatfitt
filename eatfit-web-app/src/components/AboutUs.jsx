import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import footerLogo from "../images/footerLogo.png";
import styled from "styled-components";
import { FaTwitter, FaInstagram } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <DIV id="about">
      <ContentWrapper>
        <Image src={footerLogo} alt="Footer Logo" justifyContent={"center"} margin={"auto"}/>
        <Text>
          At Eatfit we offer healthy, yummy, honest & wholesome Indian food,
          made with real ingredients, zero trans fat, and lots of love!
          #HealthyMadeHappier
        </Text>
      </ContentWrapper>
      <Heading as='h3' size={'lg'}>Follow us on</Heading>
      <Box id="icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </Box>
    </DIV>
  );
};

export default AboutUs;

const DIV = styled.div`
  background-color: #052465;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh; /* Adjust this value based on your needs */
  text-align: center;
`;

const ContentWrapper = styled.div`
  margin-bottom: 20px;
`;
