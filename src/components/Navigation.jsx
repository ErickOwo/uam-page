import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({ itemIds }) => (
  <motion.ul className="p-[25px] absolute top-[50px] w-full z-40 flex flex-col gap-2" variants={variants}>
    {itemIds.map((i, index) => (
      <MenuItem 
      key={`mobile-header-${index}`}
      color={i.color}
      name={i.name}
      url={i?.url}  />
    ))}
  </motion.ul>
);
