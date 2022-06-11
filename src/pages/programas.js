import Program from "@containers/Program"
import dbConnect from "lib/dbConnect";
import Programa from "@models/Programa";


const Programas = ({data}) => {
  return (
    <div className="">
      <div 
        className='w-full  h-[420px] bg-[url("../assets/images/portada-programas.jpg")] bg-[length:100%_100%]'
        id='up' />
      <div className="flex flex-col mt-2">
        {
          data.map((item, index)=>(
            <Program
              key={index}
              id={ item.description } 
              title={ item.title }
              imgURL={ item.imgURL }
              info={item.textContent} />
          ))
        }
      </div>
    </div>
  )
}

export default Programas;

export async function getServerSideProps(){
  try{
    await dbConnect();
    const response = await Programa.find({});

    const programas = response.map(programa =>{
      const programaObj = programa.toObject();
      programaObj._id = `${programaObj._id}`;
      return programaObj;
    })

    return {props: {data: programas}}
  }
  catch(e){
    console.log(e);
  }
}