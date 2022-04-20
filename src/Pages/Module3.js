import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";

const Module3 = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Lock>
        <p>This module is locked for the time being.</p>
      </Lock>
    </motion.div>
  );
};

const Lock = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
export default Module3;
