import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@chakra-ui/react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";
import CustomFilter from "./Filter";

const Menu = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFilterType, setSelectedFilterType] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");

  useEffect(() => {
    fetchFoodItems();
  }, [selectedFilterType, selectedOrder]);

  const fetchFoodItems = () => {
    setLoading(true);

    let apiUrl = "https://eatfittt.onrender.com/foods?_page=1&_limit=48";

    if (selectedFilterType !== "") {
      apiUrl += `&type=${selectedFilterType}`;
    }

    if (selectedOrder === "asc") {
      apiUrl += `&_sort=price&_order=asc`;
    }

    if (selectedOrder === "desc") {
      apiUrl += `&_sort=price&_order=desc`;
    }

    axios
      .get(apiUrl)
      .then((response) => {
        setLoading(false);
        setFoodItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderLoadingSpinner = () => (
    <Box
      height={"200px"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CircularProgress value={59} size="100px" thickness="4px" />
    </Box>
  );

  const renderFoodItems = () => (
    <Box id="foodMenu">
      {foodItems.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Box>
  );

  return (
    <StyledMenuContainer id="menu">
      <CustomFilter
        selectedFilter={selectedFilterType}
        setSelectedFilter={setSelectedFilterType}
    order={selectedOrder}
       Order={setSelectedOrder}
      />
      {loading ? renderLoadingSpinner() : renderFoodItems()}
    </StyledMenuContainer>
  );
};

export default Menu;

const StyledMenuContainer = styled.div`
  #foodMenu {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    #foodMenu {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }

  #card:hover {
    color: inherit;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;
