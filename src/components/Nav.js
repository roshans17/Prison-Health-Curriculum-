import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
//Animation
import { motion } from "framer-motion";
import { fade } from "../animation";
import { googleAuth } from "../service/auth";
import { googleProvider } from "../config/firebase-config";
import { auth } from "../config/firebase-config";

const Nav = () => {
  const { pathname } = useLocation();
  const [displayName, setDisplayName] = useState("Sign In");
  
  const handleOnClick = async (provider) => {
    const res = await googleAuth(provider);
    console.log(res);
    const user = auth.currentUser;
    const displayName = user.displayName;
    console.log(displayName);
    setDisplayName(displayName);
  };
  return (
    <StyledNav
      transition={{ duration: 4.0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Box
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/Module1">Module 1</Link>
          <Box
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/Module1" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/Module2">Module 2</Link>
          <Box
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/Module2" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/Module3">Module 3</Link>
          <Box
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/Module3" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/About">About</Link>
          <Box
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/About" ? "50%" : "0%" }}
          />
        </li>
        <a onClick={() => handleOnClick(googleProvider)}>{displayName}</a>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  min-height: 7vh;
  position: fixed;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
  a {
    color: #f2efe9;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    position: relative;
    cursor: pointer;
    padding: 0 4rem 0 4rem;
  }

  ul {
    align-items: center;
    display: flex;
    list-style: none;
  }

  li {
    position: relative;
  }
`;

const Box = styled(motion.div)`
  height: 0.2rem;
  border-radius: 10px;
  background: white;
  width: 0%;
  position: absolute;
  bottom: -25%;
  left: 25%;
`;

export default Nav;
