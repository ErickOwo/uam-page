import {useState, useEffect} from "react";
import Image from "next/image";
import dbConnect from "lib/dbConnect";
import Cooperation from "@models/Cooperation";

const CooperationComponent = ({data}) => {
  const [ position, setPosition ] = useState(0);

  const shiftToRight = ()=>{
    if(position > 0) setPosition(--position);
    else setPosition(data?.length - 1);
  }
  const shiftToLeft = ()=>{
    if(position < data?.length -1) setPosition(++position);
    else setPosition(0);
  }

  useEffect(()=>{
    const intervalGallery = setInterval(()=>{
      shiftToLeft();
    },2700);
    return ()=> clearInterval(intervalGallery);
  });


  return (
    <div>
      {
        <div className="w-full bg-white">
          <Image src={data[position].imgURL} width='1600px' height='600px' />
        </div>
      }
      <div className="bg-slate-200 md:p-8 p-4">
      <h3 className="uppercase ubuntou text-2xl mb-4">Agencias de Cooperación</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {
          data.map(item =>(
            <a href={item.linkcooperation} target='_blank' >
              <div className="w-full relative">
                <Image 
                  src={item.imgURL} 
                  width='400px' 
                  height='200px' />
                <span 
                  className="absolute bottom-0 left-0 z-10 bg-black/50 w-full text-white p-3">
                    { item.title }
                </span>
              </div>
            </a>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default CooperationComponent;

export async function getServerSideProps(){
  try{
    await dbConnect();
    const response = await Cooperation.find({});

    const cooperations = response.map(cooperation =>{
      const cooperationObj = cooperation.toObject();
      cooperationObj._id = `${cooperationObj._id}`;
      return cooperationObj;
    })

    return {props: {data: cooperations}}
  }
  catch(e){
    console.log(e);
  }
}