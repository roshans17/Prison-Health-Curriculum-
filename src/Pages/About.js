import React, { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const About = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledAbout>
        <h1>Prison Health Disparities.</h1>
        <div className="detail">
          <p>
            This curriculum was created as a part of an effort to help educate
            the masses of some of the health inequities that persist behind
            bars. It was implemented into a Brown University course, BIOL 0170
            (Biotechnology in Medicine), in the fall of 2021. The objectives of
            this website are to:{" "}
          </p>
          <ul>
            <li>
              <span>Identify </span> various aspects of biotechnology that
              influence the health of prisoners and how they perpetuate health
              disparities within prisons.
            </li>
            <li>
              <span> Analyze </span> different ethical components of the prison
              healthcare system that biotechnologist need to be cognizant of
              when creating/distributing biotechnology.
            </li>
            <li>
              <span> Generate </span> potential solutions to prison health
              disparities using a biotechnological frame of reference.
            </li>
          </ul>
          <p>Full syllabus along with citations will be published soon.</p>
        </div>
      </StyledAbout>
    </motion.div>
  );
};

const StyledAbout = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  /* font-size: 2rem; */
  flex-direction: column;
  h1 {
    margin: 2rem;
  }
  .detail {
    width: 70%;
  }
  li {
    margin-top: 1rem;
  }
  li:last-child{
    margin-bottom: 2rem;
  }
`;

export default About;
