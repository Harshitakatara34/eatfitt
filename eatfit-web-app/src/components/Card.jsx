import { Box, Button, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import React from "react";
import ProductModal from "./ProductModal";
import { useState } from "react";
import { Center } from "@chakra-ui/react";
const HoverableImage = styled(Image)`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

const Card = ({ title, name, cal, type, price, image }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <Box
      fontFamily="BrandonTextWeb-Medium, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif"
      fontSize="15px"
      textAlign="left"
      padding="15px"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      borderRadius="10px"
      marginBottom="20px"
      position="relative"
      overflow="hidden"
    >
      <Box height="300px" marginBottom="10px">
        <HoverableImage
          w="90%"
          h="50%"
          src={image}
          alt={name}
          objectFit="cover"
          borderRadius="10px"
        />
      </Box>
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        padding="15px"
        backgroundColor="#fff"
        borderTop="none"
        zIndex="1"
      >
        <Text marginBottom="5px" fontWeight="bold" fontSize="18px">
          {title}
        </Text>
        <Text marginBottom="5px" color="black">
          {name}
        </Text>
        <Text color="gray" marginBottom="5px">
          {cal} Cal | {type}
        </Text>
        <Text marginBottom="5px" fontWeight="bold" fontSize="16px">
          ₹{price}
        </Text>
        <Button
         onClick={handleAddButtonClick}
          border="none"
          width="100%"
          color="white"
          fontSize="17px"
          fontWeight="bold"
          backgroundColor="#052465"
          _hover={{ cursor: "pointer" }}
        >
          ADD
        </Button>
       
      
       
       
      </Box>
      <ProductModal isOpen={isModalOpen} onClose={handleCloseModal} product={{ title, name, cal, type, price,image }} mt={"50%"}/>
    </Box>
  );
};

export default Card;
