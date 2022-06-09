import dbConnect from "lib/dbConnect";
import Video from "@models/Video";

const Multimedia = ({videos}) => {

  return (
    <div className="bg-white/90 flex flex-col items-center py-7 md:px-4 font-robotoSlab">
    <h3 className="font-ubuntu text-3xl font-bold text-sky-800">Informativos</h3>
    <div  className='grid lg:grid-cols-3 gap-5 p-4  auto-rows-[300px] w-full'>
      {
        videos.map(video=>(
          <div className="flex flex-col bg-black">
            <div className="shrink-1 grow-1 relative w-full h-[300px] overflow-hidden flex justify-center items-start">
              <video
                controls
                src={video.videoURL}
                className='h-full' />
            </div>
            <span className="text-white p-4 font-semibold">{video.title}</span>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Multimedia;

export async function getServerSideProps(){
  try{
    await dbConnect();
    
    const response = await Video.find();
    
    const videos = response.map(video =>{
      const videoObj = video.toObject();
      videoObj._id = `${videoObj._id}`;
      return videoObj;
    })

    return {props: {videos}}
  }
  catch(e){
    console.log(e)
    return {props: {videos: e}}
  }
}