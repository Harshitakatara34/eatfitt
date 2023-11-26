import { Box, Button, Select, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const Filter = ({ selectedFilter, setSelectedFilter, order, setOrder }) => {
  const handleTypeChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleOrder = (val) => {
    setOrder(val);
  };

  return (
    <StyledFilter>
      <Box id="filter">
        <select value={selectedFilter} onChange={handleTypeChange}>
          <option value="">Select dietary preferences</option>
          <option value="Sweets">Sweets</option>
          <option value="Drinks">Drinks</option>
          <option value="vegan">vegan</option>
          <option value="Khichadi">Khichadi</option>
          <option value="High fiber">High fiber</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-vegetarian">Non-vegetarian</option>
        </select>
      </Box>
      <Box id="sort">
        <Text>Sort By Price</Text>
        <Button value={"asc"} onClick={() => handleOrder("asc")}>
          Low-High
        </Button>
        <Button value={"desc"} onClick={() => handleOrder("desc")}>
          High-Low
        </Button>
      </Box>
    </StyledFilter>
  );
};

const StyledFilter = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 60; 
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: auto;
  padding: 1%;
  select {
    color: white;
    font-size: 17px;
    background-color: #052465;
    padding: 13px;
    border-radius: 10px;
  }
  option {
    background-color: #ffffff;
    color: black;
  }
  #sort {
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      font-weight: bold;
    }
  }
  button {
    padding: 13px;
    border-radius: 10px;
    background-color: #dbd8d8;
    border: none;
    width: 20%;
  }
  @media (max-width: 768px) {
    flex-direction: column;

    #sort {
      width: 90%;
      margin: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;

      button {
        margin-left: 10px;
        width: 30%;
      }
    }

    #filter {
      margin-top: 10px;
    }
  }
`;

export default Filter;
