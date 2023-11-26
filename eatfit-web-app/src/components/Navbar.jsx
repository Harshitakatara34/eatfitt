import React, { useState } from "react";
import { Box, Image, Link } from "@chakra-ui/react";
import logo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <StyledNavbar>
      <LogoContainer>
        <Link href="/">
          <Image src={logo} width={"80%"} />
        </Link>
      </LogoContainer>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <MenuContainer>
          {menuItems.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              _hover={{
                backgroundColor: "#052465",
                color: "white",
                borderRadius: "5px",
              }}
            >
              {item.label}
            </Link>
          ))}
        </MenuContainer>
      )}
    </StyledNavbar>
  );
};

// ... (MobileMenu component)

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <MobileContainer>
      <FaBars className="burger-icon" onClick={toggleMenu} />
      <MobileNavBar isOpen={menuOpen}>
        <FaTimes className="close-icon" onClick={closeMenu} />
        {menuItems.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            onClick={closeMenu}
            _hover={{ backgroundColor: "blue", color: "white" }}
          >
            {item.label}
          </Link>
        ))}
      </MobileNavBar>
    </MobileContainer>
  );
};

// ... (remaining code)

const menuItems = [
  { id: 1, label: "About Us", link: "#about" },
  { id: 2, label: "Testimonials", link: "#testimonials" },
  { id: 3, label: "Menu", link: "#menu" },
  { id: 4, label: "Contact Us", link: "#contact" },
];

const StyledNavbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 200;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  font-weight: 500;

  @media (max-width: 768px) {
    .burger-icon,
    .close-icon {
      display: block;
      cursor: pointer;
    }
    a:hover {
      background-color: blue; // Change color on hover
      color: white; // Change text color on hover
    }
  }
`;

const LogoContainer = styled.div`
  width: 15%;

  a {
    color: black;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 35%;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;

  a {
    color: black;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

// ... (previous code)

const MobileNavBar = styled.div`
  width: 50%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: right 0.3s ease;
  z-index: 100000;

  a {
    color: black;
    text-decoration: none;
    margin: 10px 0;
    transition: color 0.3s ease;

    &:hover {
      background-color: #052465;
    }
  }

  .close-icon {
    align-self: flex-end;
    margin-right: 10px;
  }
`;

// ... (remaining code)

export default Navbar;
