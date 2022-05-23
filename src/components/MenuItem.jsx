import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='flex items-center'
    >
      <div className="icon-placeholder w-[40px] h-[40px] rounded-full mr-[20px] basis-[40px] grow-0 shrink-0" style={style} />
      <div className="text-placeholder w-[200px] h-[20px] shrink-1 grow-1" style={style} />
    </motion.li>
  );
};