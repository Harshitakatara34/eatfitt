import React from "react";
import { Modal, ModalOverlay,Image, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Text, Center, Button } from "@chakra-ui/react";

const ProductModal = ({ isOpen, onClose, product }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{product.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center flexDirection="column" align="center">
          <Image src={product.image}/>
            <Text mt={2}>{product.name}</Text>
            <Text mt={2}>{product.cal} Cal | {product.type}</Text>
            <Text fontWeight="bold" fontSize="16px" mt={2}>₹{product.price}</Text>
            <Text mt={2}>{product.description}</Text>
            <Button backgroundColor={"#052465"} color="white" mb={5} mt={5}>Add to Cart</Button>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
