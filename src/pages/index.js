import Photo from 'models/Photo';
import dbConnect from 'lib/dbConnect';

import Butterflies from '@components/Butterflies'
import Nosotros from '@containers/Nosotros';
import History from '@containers/History';
import Gallery from '@components/Gallery';

export default function Home({ images }) {
  return (
    <>
      <Butterflies /> 
      <Nosotros />
      <Gallery images={images} />
      <History />
    </>
  )
}

export async function getServerSideProps(){
  try{
    await dbConnect();
    const response = await Photo.find({});

    const photos = response.map(photo =>{
      const photoObj = photo.toObject();
      photoObj._id = `${photoObj._id}`;
      return photoObj;
    })

    return {props: {images: photos}}
  }
  catch(e){
    console.log(e);
  }
}
