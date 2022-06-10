import { useState } from 'react';
import Image from 'next/image';
import mapaUAM from '@images/MapaUAM.png';
import { motion } from 'framer-motion';
import dbConnect from 'lib/dbConnect';
import Base from '@models/Base';

const Bases = ({data}) => {
  const [ position, setPosition ] = useState(0);
  const [ info, setInfo ] = useState(1);
  const [ showButtons, setshowButtons ] = useState(false);

  const changeInfo = direction =>{
    if(direction == "left") {
      if(info != 0) setInfo(--info);
      else setInfo(data.length - 1);
    } else {
      if(info != data.length -1 ) setInfo(++info);
      else setInfo(0)
    }
  }

  return (
    <div>
      <div 
        className='w-full lg:h-[510px] bg-orange-200 relative flex justify-between font-ubuntu md:flex-row flex-col '
        onMouseEnter={()=> {setshowButtons(true)}}
        onMouseLeave={()=> {setshowButtons(false)}} >
        <div className='p-5 h-[200px]'>
          <motion.div 
            className='mt-[40px] md:mt-[50px] lg:ml-[90px] md:ml-[32px] md:text-[60px] font-bold text-orange-600' >
            { data[info].title }
          </motion.div>
          <motion.div 
            className='mt-[20px] lg:ml-[90px] md:ml-[32px] max-w-[325px] md:text-[20px] text-yellow-700'   >
            <p>
              { data[info].description }
            </p>
            <p>
              { data[info].place }
            </p>
          </motion.div>
        </div>
        <div className='max-w-[500px] p-5'>
          <motion.div className='lg:w-[400px] md:w-[300px] h-full lg:mr-16 md:mr-8' >
            <Image src={data[info].imgURL} width='420px' height='510px' />
          </motion.div>
        </div>
          {
            showButtons ? <div className='absolute w-full h-full flex justify-between items-center p-4'>
              <button
                onClick={ ()=> changeInfo('left') } 
                className='p-1 rounded-full bg-yellow-600' >
                <button 
                  className='p-3 rounded-full shadow-[0_20px_70px_15px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_70px_15px_rgba(0,0,0,0.9)]' />
              </button>
              <button 
                className='p-1 rounded-full bg-yellow-600' >
                <button
                  onClick={ ()=> changeInfo('rigth') } 
                  className='p-3 rounded-full shadow-[0_20px_70px_15px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_70px_15px_rgba(0,0,0,0.9)]' />
              </button>
            </div> : null
          }
      </div>
      <Image src={mapaUAM} width='1400px' height='1000px' />
      <div className='bg-white md:p-8 p-6'>
      {
        data.map((item, index) =>(
          <div key={`info-${index}`}>
            <h2 className='text-3xl text-blue-700 font-bold'>{item.title}</h2>
            <div className='md:p-5 py-5 flex flex-col gap-2 md:text-justify'>
              <span className='text-blue-700 font-bold'>
                <p>{ item.description }</p> 
                <p>{ item.place }</p>
              </span>
              { 
                (item.parrafs) ? item.parrafs.map((parraf, index)=>(
                  <p key={`parrafs-${index}`}>
                      {parraf}
                  </p>
                )) : null
              }
            </div>
          </div>
        )) 
      }  
      </div>
    </div>
  )
}

export default Bases;

export async function getServerSideProps(){
  try{
    await dbConnect();
    const response = await Base.find({});

    const bases = response.map(base =>{
      const baseObj = base.toObject();
      baseObj._id = `${baseObj._id}`;
      return baseObj;
    })

    return {props: {data: bases}}
  }
  catch(e){
    console.log(e);
  }
}