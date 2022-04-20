import React, { useState } from "react";
//Styled
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  text,
  introAnim,
  pageModule1Animation,
  easeFrame,
  footerAnim,
} from "../animation";
import Vaccine from "../Images/vaccine.png";
//Adding Components
import Control from "../components/Controls";
import Content from "../components/Content";
import Survey from "../components/Survey";
//Import Content
import contentData from "../Module1Object";

import { firebase } from "../config/firebase-config";

const Module1 = () => {
  //State
  const [content, setContent] = useState(contentData());
  const [access, setAccess] = useState(false);
  const [user, setUser] = useState();
  const [currentContent, setCurrentContent] = useState(content[0]);

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
          <motion.p variants={text}>"About 3 in 10 people</motion.p>
        </Hide>
        <Hide>
          <motion.p variants={text}>in state and federal prisons</motion.p>
        </Hide>
        <Hide>
          <motion.p variants={text}>
            were infected with the COVID-19 virus."
          </motion.p>
        </Hide>
        <Slider variants={slider}></Slider>
      </Frame1>
      <StyledModule1
        variants={pageModule1Animation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.h1 variants={fade}>
          Module 1: <br></br>
          The Disproportionate Impact of COVID-19
        </motion.h1>

        <motion.div variants={lineAnim} className="line"></motion.div>
        <StyledContentWrapper variants={fade}>
          {access ? (
            <Content currentContent={currentContent} content={content}>
              {" "}
            </Content>
          ) : (
            <div> </div>
          )}
        </StyledContentWrapper>
        <motion.div variants={fade}>
          <Control
            currentContent={currentContent}
            setCurrentContent={setCurrentContent}
            content={content}
          />
        </motion.div>
        <motion.div varaints={fade}>
          <StyledFooter variants={footerAnim}>
            <p>
              "Lack of data or analysis is not a surprise, since jails are
              paramilitary settings, where the group that has the health data is
              usually under the control of security service"
            </p>
          </StyledFooter>
        </motion.div>
        <StyledImage>
          <motion.img
            variants={photoAnim}
            src={Vaccine}
            alt="image of vaccine"
          />
        </StyledImage>
      </StyledModule1>
    </div>
  );
};

const StyledModule1 = styled(motion.div)`
  min-height: 100vh;
  padding-left: 3rem;
  padding-top: 3rem;
  .line {
    height: 0.5rem;
    width: 70%;
    background: #cccc;
    margin-bottom: 2rem;
  }
  .video {
    display: flex;
    justify-content: center;
  }
  .Data-Questions {
    display: flex;
  }
  .Access {
    margin-bottom: 5rem;
  }
  .Questions-After-Article {
    margin-bottom: 2rem;
  }
  .Trust {
    margin-bottom: 8rem;
  }
  .Intro {
    margin-bottom: 3rem;
  }
  .content {
    width: 100%;
    h3 {
      display: flex;
      justify-content: center;
    }
    p {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-decoration: none;
      list-style-type: none;
      li {
        margin-bottom: 10px;
        margin-top: 10px;
      }
      li:last-child {
        margin-bottom: 0px;
      }
    }
  }
`;

const StyledContentWrapper = styled(motion.div)`
  display: flex;
  align-self: center;
  height: 100%;
  width: 100%;
`;
const StyledImage = styled.div`
  overflow: hidden;
  img {
    position: fixed;
    bottom: 0;
    right: 0;
  }
`;
const StyledFooter = styled(motion.div)`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 7%;
  background-color: #0e2226;
  color: white;
  font-size: 1.1rem;
  text-align: center;
  z-index: 3;
  word-spacing: 3.5px;
`;

const Hide = styled.div`
  overflow: hidden;
  background: black;
  width: 50%;
`;

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

const Slider = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 5%;
  width: 100%;
  height: 100vh;
  background-color: #a7adb3;
  z-index: 4;
`;
export default Module1;
