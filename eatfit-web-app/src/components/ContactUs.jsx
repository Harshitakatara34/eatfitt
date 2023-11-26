import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import { useToast } from "@chakra-ui/react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name,
      email,
      text,
    };
    toast({
      title: `Thank you for reaching out ${name}!`,
      description: "We'll get back to you soon",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    console.log(obj);
  };

  return (
    <StyledContact id="contact">
      <ContactForm>
        <Heading>Contact Us</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <StyledInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <StyledInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <StyledTextarea
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <StyledButton
              type="submit"
              id="submit"
              fontSize={"20px"}
              _hover={{
                fontWeight: "bold",
                cursor: "pointer",
                backgroundColor: "gray",
                color: "white",
                border: "none",
              }}
            >
              Submit
            </StyledButton>
          </FormControl>
        </form>
      </ContactForm>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-image: url("https://www.curefoods.in/images/careers-bg.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const ContactForm = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added box shadow for a subtle effect */
  font-family: BrandonTextWeb-Medium, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  font-size: 20px;
  width: 50%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 17px;
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid gray;
  font-size: 20px;
  padding: 10px;

  @media (max-width: 768px) {
    height: 30px;
    font-size: 15px;
  }
`;

const StyledTextarea = styled(Textarea)`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid gray;
  font-size: 20px;
  padding: 10px;

  @media (max-width: 768px) {
    height: 100px;
    font-size: 15px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

export default ContactUs;
