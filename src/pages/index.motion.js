import { motion } from "framer-motion";

export const variants = {
  title: {
    initial: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 2.5,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.5,
      },
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 2.5,
      },
    },
  },
};
