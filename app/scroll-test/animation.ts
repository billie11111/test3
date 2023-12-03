export const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: "80px",
  },
  animate: {
    opacity: 1,
    y: "0px",
  },
};

export const svgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

export const pathVariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};
