import React, { useState, useEffect } from "react";
import { db } from "../config/firebase-config";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  text,
  introAnim,
  pageModule2Animation,
  easeFrame,
} from "../animation";

import styled from "styled-components";
//Components
import Content2 from "../components/Content2";
import Control from "../components/Controls";
//Images
import Module2Image from "../Images/module2.png";
//Data
import content2Data from "../Module2Object";
//Firebase
import { firebase } from "../config/firebase-config";

const Module2 = () => {
  //State
  const [content, setContent] = useState(content2Data());
  const [currentContent, setCurrentContent] = useState(content[0]);
  const [access, setAccess] = useState(false);
  const [user, setUser] = useState();

  const getUserID = () => {
    let authFlag = true;
    firebase.auth().onAuthStateChanged((user) => {
      if (authFlag) {
        authFlag = false;
        if (user) {
          setUser({ uid: user.uid });
          setAccess(true);
        }
      } else {
        setAccess(false);
      }
    });
  };
  return (
    <div onMouseMove={getUserID}>
      <Frame1 variants={introAnim} initial="hidden" animate="show" exit="exit">
        <Hide>
          <motion.p variants={text}>"The Eighth Amendment</motion.p>
        </Hide>
        <Hide>
          <motion.p variants={text}> requires that prisons provide</motion.p>
        </Hide>
        <Hide>
          <motion.p variants={text}>medical care to inmates."</motion.p>
        </Hide>
        <Slider variants={slider}></Slider>
      </Frame1>
      <StyledModule2
        variants={pageModule2Animation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.h1 variants={fade}>
          Module 2: <br></br>
          Organ Donation | Transplant
        </motion.h1>{" "}
        <motion.div variants={lineAnim} className="line"></motion.div>
        <StyledContentWrapper variants={fade}>
          {access ? (
            <Content2
              content={content}
              currentContent={currentContent}
              className="Content2"
            ></Content2>
          ) : (
            <div></div>
          )}
        </StyledContentWrapper>
        <Control
          currentContent={currentContent}
          setCurrentContent={setCurrentContent}
          content={content}
          className="Controls"
        ></Control>
      </StyledModule2>
    </div>
  );
};

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100vh;
  background-color: black;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    color: white;
    font-size: 3rem;
    font-weight: bold;
    line-height: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
  background: black;
  width: 50%;
`;
const Slider = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 5%;
  width: 100%;
  height: 100vh;
  background-color: #a7adb3;
  z-index: 4;
`;

const StyledModule2 = styled(motion.div)`
  min-height: 100vh;
  padding-left: 3rem;
  padding-top: 3rem;
  background: url(${Module2Image});
  background-size: cover;
  background-position: center;

  .Clinical-Case {
    p {
      font-weight: 500;
    }
    width: 85%;
  }

  .line {
    height: 0.5rem;
    width: 70%;
    background: #527279;
    margin-bottom: 2rem;
  }

  .Controls {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Clinical-Questions {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 85%;
    align-items: stretch;
    justify-content: center;

    h3 {
      display: flex;
      justify-content: center;
    }
    li {
      list-style: none;
      margin-bottom: 10px;
      padding: 0.5rem;
      margin-top: 10px;
      font-weight: 500;
    }
  }
  .Clinical-Analysis {
    font-size: 0.9rem;
    font-weight: 450;
    display: flex;
    flex-direction: column;
    width: 85%;
    h3 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .Real-Example {
    width: 85%;
    font-size: 0.9rem;
    font-weight: 450;
    display: flex;
    flex-direction: column;

    h2 {
      margin-bottom: 4rem;
    }
    li {
      list-style: none;
      margin-top: 3rem;
      margin-bottom: 10px;
      display: flex;
    }
  }
  .Organ-Donation {
    /* width: 85%; */
    font-size: 0.9rem;
    font-weight: 450;
    display: flex;
    flex-direction: column;
  
  }
`;

const StyledContentWrapper = styled(motion.div)`
  display: flex;
  align-self: center;
  justify-content: center;
  height: 100%;
  width: 75%;
  h2 {
    display: flex;
    justify-content: center;
  }
`;
export default Module2;
