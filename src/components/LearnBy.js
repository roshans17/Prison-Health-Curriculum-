import React from "react";
//Styled
import styled from "styled-components";
//Import images
import engaging from "../Images/engaging.png";
import thinking from "../Images/thinking.png";
import participating from "../Images/participating.png";

//Animation
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import {
  text,
  fade,
  engagingAnim,
  buttonAnim,
  lineAnim2,
} from "../animation";

const LearnBy = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

  const scroll = () => {
    window.scrollTo(0, 1620);
  };
  return (
    <PageLayout>
      <motion.h1
        variants={text}
        animate={controls}
        ref={element}
        className="Learn"
      >
        LEARN BY
        <motion.div
          variants={lineAnim2}
          animate={controls}
          ref={element}
          className="line"
        ></motion.div>
      </motion.h1>
      <div className="Care">
        <motion.button
          onClick={scroll}
          variants={buttonAnim}
          animate={controls3}
          ref={element3}
        >
          {" "}
          WHY SHOULD I CARE?
        </motion.button>
      </div>
      <motion.div
        variants={engagingAnim}
        animate={controls2}
        ref={element2}
        className="engaging"
      >
        <div className="image">
          <img src={engaging} alt="books" />
          <h3>engaging</h3>
          <p>with all materials in subsequent modules</p>
        </div>
      </motion.div>
      <motion.div
        variants={engagingAnim}
        animate={controls2}
        ref={element2}
        className="thinking"
      >
        <div className="image">
          <img src={thinking} alt="a man thinking" />
          <h3>thinking</h3>
          <p>critically about end of module questions</p>
        </div>
      </motion.div>
      <motion.div
        variants={engagingAnim}
        animate={controls2}
        ref={element2}
        className="participating"
      >
        <div className="image">
          <img src={participating} alt="two people conversing" />
          <h3>participating</h3>
          <p>in meaningful conversations</p>
        </div>
      </motion.div>
    </PageLayout>
  );
};

const PageLayout = styled(motion.div)`
  min-height: 100vh;
  background-color: #050a0d;
  color: #ffff;
  display: grid;
  grid-template-columns: 5% 30fr 30fr 30fr 5%;
  align-items: center;
  text-align: center;
  grid-template-rows: 10fr 20fr 50fr 20fr;
  h1 {
    grid-row: 2/3;
    grid-column: 3/4;
    font-size: 2.4rem;
  }
  .line {
    height: 0.5rem;
    width: 100%;
    background: #cccc;
    margin-bottom: 2rem;
  }
  .engaging {
    padding-top: 1rem;
    grid-column: 2/3;
    grid-row: 3/4;
  }
  .thinking {
    grid-column: 3/4;
    justify-content: center;
    grid-row: 3/4;
  }
  .participating {
    grid-column: 4/5;
    justify-content: center;
    grid-row: 3/4;
  }
  .Care {
    grid-column: 4/5;
    grid-row: 2/3;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export default LearnBy;
