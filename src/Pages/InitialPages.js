import React from "react";

//Page Components
import LandingPage from "../components/LandingPage";
import LearnBy from "../components/LearnBy";
import Motivation from "../components/Motivation";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, fade } from "../animation";

const InitialPages = () => {

  
  return (
    <div>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <LandingPage></LandingPage>
        <LearnBy />
        <Motivation />
      </motion.div>
    </div>
  );
};

export default InitialPages;
