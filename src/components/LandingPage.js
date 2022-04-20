import React, { useRef } from "react";
import landingimage from "../Images/landing-page.jpg";
//Styled
import styled from "styled-components";
//Pages
import LearnBy from "../components/LearnBy";

//FramerMotion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
//ReactRouterDom
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import scrollToLearnBy from "../components/scrollToLearnBy";

const LandingPage = () => {
  const scroll = () => {
    window.scrollTo(0, 810);
  };

  return (
    <div>
      <Landing variants={photoAnim}>
        <div animate="show" className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>HEALTH INEQUITIES</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>WITHIN PRISONS</motion.h2>
          </Hide>
          <motion.button
            transition={{ duration: 0.75 }}
            onClick={scroll}
            variants={fade}
          >
            LEARN TODAY
          </motion.button>
        </div>
      </Landing>
    </div>
  );
};

const Landing = styled(motion.div)`
  background-image: url(${landingimage});
  min-height: 100vh;
  display: grid;
  grid-template-columns: 5% 60fr 40fr 5%;
  color: #f2efe9;
  background-size: cover;
  background-position: center;
  font-weight: 700;
  font-size: 2.2rem;
  font-family: normal;
  align-items: center;
  .title {
    grid-column: 2/3;
  }

  button {
    margin: 5rem 0rem 0rem 0rem;
  }
  h2 {
    font-weight: bold;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default LandingPage;
