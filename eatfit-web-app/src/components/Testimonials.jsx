import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import maleAvatar from "../images/maleAvatar.jpg";
import femaleAvatar from "../images/femaleAvatar.jpg";
import styled from "styled-components";

const testimonialsData = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: femaleAvatar,
    text:
      "EATFIT has revolutionized my approach to healthy living. The mouthwatering and nutritious meals make it a joy to prioritize wellness.",
  },
  {
    id: 2,
    name: "Bob Anderson",
    avatar: maleAvatar,
    text:
      "EATFIT has completely transformed my relationship with food. The wholesome and flavorful meals are a perfect blend of health and taste.",
  },
  {
    id: 3,
    name: "Eva Martinez",
    avatar: femaleAvatar,
    text:
      "I am grateful for EATFIT's role in making healthy living simple and enjoyable. The diverse meal options keep me excited about my dietary choices.",
  },
  {
    id: 4,
    name: "Michael Brown",
    avatar: maleAvatar,
    text:
      "EATFIT has become an integral part of my daily routine. The convenience, coupled with delicious and nutritious meals, is a game-changer for me.",
  },
];

// Rest of the component remains unchanged


const Testimonials = () => {
  return (
    <DIV id="testimonials">
      <Heading textAlign="center">Testimonials</Heading>
      <GridContainer>
        {testimonialsData.map((testimonial) => (
          <TestimonialBox key={testimonial.id}>
            <TestimonialContent>
              <ImageContainer>
                <Image
                  borderRadius={"50%"}
                  src={testimonial.avatar}
                  w={"100%"}
                  height={"100%"}
                  objectFit={"cover"}
                />
              </ImageContainer>
              <Heading as={"h4"} size={"lg"}>
                {testimonial.name}
              </Heading>
            </TestimonialContent>
            <Text>{testimonial.text}</Text>
          </TestimonialBox>
        ))}
      </GridContainer>
    </DIV>
  );
};

const DIV = styled.div`
  width: 75%;
  margin: auto;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialBox = styled.div`
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const TestimonialContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

export default Testimonials;
