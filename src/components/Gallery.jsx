import Link from 'next/link';
import Image from 'next/image';
import img1 from '@images/animated-gallery/1.jpg';
import img2 from '@images/animated-gallery/2.jpg';
import img3 from '@images/animated-gallery/3.jpg';
import img4 from '@images/animated-gallery/4.jpg';
import img5 from '@images/animated-gallery/5.jpg';
import img6 from '@images/animated-gallery/6.jpg';
import img7 from '@images/animated-gallery/7.jpg';
import img8 from '@images/animated-gallery/8.jpg';
import img9 from '@images/animated-gallery/9.jpg';
import img10 from '@images/animated-gallery/10.jpg';
import img11 from '@images/animated-gallery/11.jpg';
import img12 from '@images/animated-gallery/12.jpg';

import imgSpriteLeft from '@images/sprite-left.png'
import imgSpriteRight from '@images/sprite-right.png'


const images = [
  { imageUrl: img1,
    description: 'Vitatol: Suplemento Vitamínico',
    id: 1,
   },
  { imageUrl: img2,
    description: 'Filtro de Aguas Servidas',
    id: 2,
   },
  { imageUrl: img3,
    description: 'Capital Semilla',
    id: 3,
   },
  { imageUrl: img4,
    description: 'Capital Semilla',
    id: 4,
   },
  { imageUrl: img5,
    description: 'Aprovechamiento Recurso Local',
    id: 5,
   },
  { imageUrl: img6,
    description: 'Proyectos Textiles',
    id: 6,
   },
  { imageUrl: img7,
    description: 'Granjas Campesinas',
    id: 7,
   },
  { imageUrl: img8,
    description: 'Botiquin Comunitario',
    id: 8,
   },
  { imageUrl: img9,
    description: 'Capacitaciones',
    id: 9,
   },
  { imageUrl: img10,
    description: 'Procesamiento',
    id: 10,
   },
  { imageUrl: img11,
    description: 'Comercialización',
    id: 11,
   },
  { imageUrl: img12,
    description: 'Apicultura',
    id: 12,
   }
]

const Gallery = () => {
  return(
    <div className="dg-wrapper select-none bg-white/90 pt-10 md:pb-24 pb-16 px-4 md:px-14 font-anton font-light tracking-[2px] flex flex-col items-center">
      <div className='flex overflow-hidden relative gap-16 w-full justify-center'>
      <div className='absolute w-full h-full z-10 flex items-center justify-around'>
        <button className='bg-gray-600/50 lg:h-[250px] lg:w-[100px] md:w-[70px] w-[39px] ' >
          <Image src={imgSpriteLeft} width='100px' height='250px' />
        </button>
        <button className='bg-gray-600/50 lg:h-[250px] lg:w-[100px] md:w-[70px] w-[39px] '>
          <Image src={imgSpriteRight} width='100px' height='250px' />
        </button>
      </div>
      {
        images.map(image=>(
          <div className='img-container flex flex-col items-center overflow-hidden border border-black min-w-[250px] min-h-[449px] bg-whit2' key={image.id}>
            <div className='imageContainer w-[600px] h-[410px] '>
              <Image 
                src={image.imageUrl} 
                width='750px'  
                height='500px'
                className='h-full w-full object-center'
                />
            </div>
            <span className='text-center pb-2'>{image.description}</span>
          </div>
        ))
      }
      </div>
      <span className=' self-center font-bold md:text-2xl text-xl mt-10'>EMPRENDIMIENTOS PARA EL DESARROLLO</span>    
    </div>
  );
}

export default Gallery