import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import gifButterflies from '@images/animated-logo/Mariposas2.gif';
import uamLogo from '@images/animated-logo/logo-uam.png';


const Butterflies = () => {
  return (
    <>
      <div className="cont-logo-maps relative flex justify-center h-min h-max-none select-none bg-slate-50/10">
        <div className='content-butterflies relative w-[540px]'>
          <div className="image-UAM relative h-min z-10">
            <Image src={uamLogo} width='540px' height='540px' alt="" />
          </div>
          <motion.div 

            animate={{ x: -350,
                       opacity: [0, 1, 1, 1 ,1]  }}
            initial={{ x: 120,
                       opacity: 0 }}
            transition={{ ease: "linear", repeat: Infinity, duration: 14.253 }}
            className="butterflies absolute top-0 md:w-full md:h-full w-[120px] h-[120px] ">
            <Image 
              src={gifButterflies} 
              width='300px' 
              height='300px' 
              alt="" /> 
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Butterflies