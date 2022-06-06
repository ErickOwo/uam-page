import { useState } from 'react';
import Recurso from 'models/Recurso';
import dbConnect from 'lib/dbConnect';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AiFillCloseCircle } from 'react-icons/ai';

const Source = ({ images }) => {
  const [ openModal, setOpenModal ] = useState(false);
  const [ modalIsOpen, setModal ] = useState(false);
  const [ modalData, setModalData ] = useState({img: null, name: null, position: null});

  const handleModal = (img, name, position) =>{
    setModalData({img, name, position})

    setModal(true);
    setOpenModal(true);
  }

  const closeModal = () =>{
    setOpenModal(false);
    setTimeout(()=>{
      setModal(false);
    }, 1200)
  }

  const variantsOverlay = {
    show: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 1.3,
      },
    },
    hidde: {
      opacity: 0,
      transition: {
        ease: 'easeOut',
        duration: 2,
      },
    },
  };
  const variantsModal = {
    show: {
      scale: 1,
      transition: {
        ease: 'easeInOut',
        duration: 1.8,
      },
    },
    hidde: {
      scale: .4,
      transition: {
        ease: 'easeOut',
        duration: 1.5,
      },
    },
  };

  return (
    <>
      <div className='p-5 bg-white select-none'>
        <h3 className='uppercase mb-4 font-bold text-2xl text-center lg:text-left'>Equipo Técnico</h3>
        <div className='flex flex-wrap gap-5 justify-center lg:justify-between '>
          {
            images.map((image, index) =>(
              <button 
                key={index} 
                className='flex relative w-[370px] md:h-[270px] h-[190px]' 
                onClick={()=> handleModal(image.imgURL, image.name, image.position) } >
                <Image src={image.imgURL} width='390px' height='290px' />
                <div className='absolute bottom-0 z-10 flex flex-col p-4 text-lg bg-black/60 text-white w-full'>
                  <span >{image.name}</span>
                </div>
              </button>
            ))
          }
        </div>
      </div>
      {
        modalIsOpen ? <motion.div
          initial={{ opacity: 0 }}
          variants={variantsOverlay}
          animate={openModal ? 'show' : 'hidde'}
          className="modal-overlay w-screen h-screen fixed top-0 left-0 bg-black/70 flex justify-center items-center z-40" >
          <motion.div
            initial={{ scale: .4 }}
            variants={variantsModal}
            animate={openModal ? 'show' : 'hidde'}
            className="modal min-w-min min-h-min py-5 bg-black flex flex-col justify-center items-center" >
            
            <div className='relative w-11/12 h-11/12 flex justify-center'>
              <button 
                className='absolute z-10 -right-5 -top-2 text-4xl  text-white border-2 border-white rounded-3xl bg-black'
                onClick={()=> closeModal()} >
                <AiFillCloseCircle />
              </button>
              <Image className='w-full' src={modalData?.img} width='1100px' height='700px' />
              <div className='absolute bottom-0 z-10 bg-black/80 text-white flex flex-col w-max p-5 items-center rounded-xl mb-2 md:text-xl text-sm'>
                <span>{modalData?.name}</span>
                <span>{modalData?.position}</span>
              </div>
            </div>

          </motion.div>
        </motion.div> : null
      }
    </>
  )
}

export default Source;

export async function getServerSideProps(){
  try{
    await dbConnect();
    const response = await Recurso.find({});

    const recursos = response.map(recurso =>{
      const recursoObj = recurso.toObject();
      recursoObj._id = `${recursoObj._id}`;
      return recursoObj;
    })

    return {props: {images: recursos}}
  }
  catch(e){
    return {props: {images: e}}
  }
}