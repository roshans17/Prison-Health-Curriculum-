import React from "react";
//Styled
import styled from "styled-components";
//Import icons
import biotech from "../Images/biotech.svg";
import community from "../Images/community.svg";
import health from "../Images/health.svg";
import notebooks from "../Images/notebooks.png";

//Animation
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import {
  text,
  fade,
  engagingAnim,
  thinkingAnim,
  reason1Anim,
  reason3Anim,
  reason2Anim,
  photoAnim,
} from "../animation";

const Motivation = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();
  return (
    <StyledMotivation>
      <StyledImage>
        <motion.img
          variants={photoAnim}
          animate={controls5}
          ref={element5}
          src={notebooks}
          alt="picture of notebooks/studing"
        />
      </StyledImage>
      <motion.h1 variants={fade} animate={controls} ref={element}>
        Why you should learn about the health of prisoners:
      </motion.h1>
      <Reasons>
        <Reason1 variants={reason1Anim} animate={controls2} ref={element2}>
          <div className="image">
            <img src={biotech} alt="biotech" />
            <p>
              Biotechnology is <span> rapidly </span> evolving, and it is our
              duty and a learning goal of this course, to examine the ethical
              implications of the field.
            </p>
          </div>
        </Reason1>
        <Reason2 variants={reason2Anim} animate={controls3} ref={element3}>
          <div className="image">
            <img src={community} alt="picture of building" />
            <p>
              The health of prisoners <span>influences</span> community health.
              A big misconception is that disease stay gated behind walls.
            </p>
          </div>
        </Reason2>
        <Reason3 variants={reason3Anim} animate={controls4} ref={element4}>
          <div className="image">
            <img src={health} alt="health" />
            <p>
              Prisoners are <span>humans.</span> They are someone’s family
              member, friend, and loved one.
            </p>
          </div>
        </Reason3>
      </Reasons>
    </StyledMotivation>
  );
};

const StyledMotivation = styled.div`
  min-height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  h1 {
    display: flex;
    width: 60%;
    padding-bottom: 6rem;
    font-weight: 400;
    font-size: 3rem;
    flex-wrap: wrap;
  }
`;

const StyledImage = styled.div`
  img {
    position: absolute;
    top: 0px;
    right: 0px;
  }
`;

const Reasons = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Reason1 = styled(motion.div)`
  font-size: 1.4rem;
  padding: 3rem;
  width: 60%;
  .image {
    display: flex;
    align-items: center;
    img {
      padding-right: 2rem;
      order: 2;
      width: 30%;
    }
    p {
      text-align: right;
    }
  }
`;

const Reason2 = styled(motion.div)`
  font-size: 1.4rem;
  padding: 3rem;
  width: 60%;
  .image {
    display: flex;
    align-items: center;
    img {
      padding-right: 2rem;
      width: 30%;
    }
    p {
      text-align: left;
    }
  }
`;
const Reason3 = styled(motion.div)`
  font-size: 1.4rem;
  padding: 3rem;
  width: 60%;
  .image {
    display: flex;
    align-items: center;
    img {
      padding-right: 2rem;
      width: 30%;
      order: 2;
    }
    p {
      text-align: right;
    }
  }
`;

export default Motivation;
