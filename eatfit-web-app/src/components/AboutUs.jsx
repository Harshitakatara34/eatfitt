import { Box, Heading, Image, Text } from "@chakra-ui/react";
import footerLogo from "../images/footer.png";
import styled from "styled-components";
import React from "react";
import { FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const AboutUs = () => {
  return (
    <DIV id="about">
      <ContentWrapper>
        <Image
          src={footerLogo}
          alt="Footer Logo"
          justifyContent={"center"}
          margin={"auto"}
        />
        <Box textAlign="center">
          <Text>
            Welcome to Eatfit – the ultimate destination for delicious,
            nutritious, and wholesome Indian cuisine. Our dishes are
            meticulously crafted with authentic ingredients, ensuring zero trans
            fat and infused with an abundance of love. At Eatfit, we believe in
            making healthy eating delightful, and every bite reflects our
            commitment to your well-being. Join us on the journey of
            #HealthyMadeHappier, where flavor meets nutrition, and every meal is
            a celebration of wellness. Embark on a culinary adventure with us
            and savor the goodness of real, wholesome ingredients that nourish
            your body and soul. Discover the joy of mindful eating at Eatfit,
            where every dish is a testament to our passion for health and
            happiness.
          </Text>
        </Box>
      </ContentWrapper>
      <Heading as="h3" size={"lg"} mt={10}>
        Connect with us
      </Heading>
      <IconContainer>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} />
        </a>
      </IconContainer>
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
  height: 100vh;
  text-align: center;
`;

const ContentWrapper = styled.div`
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
