import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import imgSpriteLeft from '@images/sprite-left.png';
import imgSpriteRight from '@images/sprite-right.png';

const Gallery = ({ images }) => {
  const [ position, setPosition ] = useState(0);

  const shiftToRight = ()=>{
    if(position > 0) setPosition(--position);
    else setPosition(images?.length - 1);
  }
  const shiftToLeft = ()=>{
    if(position < images?.length -1) setPosition(++position);
    else setPosition(0);
  }

  useEffect(()=>{
    const intervalGallery = setInterval(()=>{
      shiftToLeft();
    },2700);
    return ()=> clearInterval(intervalGallery);
  });

  return(
    <div className="dg-wrapper select-none mt-2 bg-gray-900/90 pt-10 md:pb-24 pb-16 px-4 md:px-14 font-anton font-light tracking-[2px] flex flex-col items-center justify-center">
      <div className='absolute w-full h-full z-10 flex items-center justify-around'>
        <button
          className='bg-gray-600/50 lg:h-[250px] lg:w-[100px] md:w-[70px] w-[39px] '
          onClick={()=> shiftToRight()}  >
          <Image src={imgSpriteLeft} width='100px' height='250px' />
        </button>
        <button
          className='bg-gray-600/50 lg:h-[250px] lg:w-[100px] md:w-[70px] w-[39px] '
          onClick={()=> shiftToLeft()}  >
          <Image src={imgSpriteRight} width='100px' height='250px' />
        </button>
      </div>

      <div className='overflow-hidden relative h-[470px] w-full'>
        <div className='flex gap-16 absolute left-[calc(50%-125px)]' >
          {
          images?.map((image, index)=>(
            <motion.div 
            className='img-container flex flex-col items-center overflow-hidden border border-black w-[250px] h-[469px] bg-white absolute' 
            key={`gallery-${index}`}
            animate={{
              left: `${(index - position) * 269}px`,
              scale: index === position ? 1 : 0.9,
              transition:{
                type: "spring",
                stiffness: 40,
                damping: 20
              }
            }}
             >
              <div className='imageContainer w-[600px] h-[420px]'>
                <Image
                src={image.imgURL}
                width='750px'
                height='500px'
                className='h-full w-full object-center'
                />
              </div>
              <span className='text-center pb-2'>{image.title}</span>
            </motion.div>
          ))
          }
        </div>
      </div>
      <span className=' self-center font-semibold md:text-2xl text-xl mt-10 text-slate-50'>EMPRENDIMIENTOS PARA EL DESARROLLO</span>
    </div>
  );
}

export default Gallery;
