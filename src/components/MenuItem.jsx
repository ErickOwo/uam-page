import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

export const MenuItem = ({ color, name, url }) => {
  const style = { border: `2px solid ${color}` };
  if(url) return (
    <Link href={url}>
      <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='flex items-center'
      >
        <div className="text-placeholder w-full h-[30px] shrink-1 grow-1" style={style}>
          { name }
        </div>
      </motion.li>
    </Link>
  );
};