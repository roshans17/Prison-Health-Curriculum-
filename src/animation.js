export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 1.0,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};

export const pageModule1Animation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 3.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const pageModule2Animation = {
  hidden: {
    opacity: 0,
    scale: 1.25,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: 3.7,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: { x: -600 },
  show: {
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};
export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const photoAnim = {
  hidden: { scale: 1.25, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "70%",
    transition: { duration: 1 },
  },
};
export const lineAnim2 = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};

export const slider = {
  hidden: { y: "110%" },
  show: {
    y: "-110%",
    transition: {
      duration: 2.75,
      delay: 3.0,
    },
  },
};

export const text = {
  hidden: { y: "100%" },
  show: {
    y: 0,
    transition: { duration: 1 },
  },
};

export const introAnim = {
  hidden: { y: "0%" },
  show: {
    y: "-110%",
    transition: { duration: 1.5, delay: 3.5, staggerChildren: 0.5 },
  },
};

export const engagingAnim = {
  hidden: { opacity: 0, x: -100 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const thinkingAnim = {
  hidden: { opacity: 0, x: -100 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const reason1Anim = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};
export const reason2Anim = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const reason3Anim = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const footerAnim = {
  hidden: { height: 0, opacity: 0 },
  show: {
    height: "7%",
    opacity: 1,
    transition: { duration: 0.75 },
  },
};

export const buttonAnim = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.0 },
  },
};
