import { useState } from 'react';
import Image from 'next/image';
import mapaUAM from '@images/MapaUAM.png';
import { motion } from 'framer-motion';

const data = [
  {
    title: 'ADICTA',
    description: 'Asociación de Desarrollo Integral Tejutla.',
    place: 'Tejutla, San Marcos, Guatemala.',
    imgURL: 'https://www.uamxela.org/images/Ximages/slideramb01.png',
    parrafs: `ADICTA nace en el año 1993, sus 150 socios y socias pertenecen al grupo étnico Mam y se organizan en 7 grupos.
    
    Su propósito original fue la implementación de proyectos de agua en domicilios y la organización y formación de líderes comunitarios. Desde el año 2000 se viene trabajando con el deshidratado de frutas con grupos de mujeres de las comunidades organizadas, con el fin de aprovechar los recursos existentes en la región. En el año 2003 comienzan a producir almíbares de durazno, jaleas de manzana, ponche de frutas, mermelada de piña con zanahoria. También un grupo de 35 apicultores producen miel y derivados. 
    
    La UAM ha facilitado micro financiamientos a socios/as de ADICTA para proyectos de producción, procesamiento y comercialización, así como asesoramiento técnico para el personal de ADICTA.`
  },
  {
    title: 'APROSADC',
    description: 'Asociación de Promotores de Salud y Desarrollo Comunitario.',
    place: 'Sipacapa, San Marcos, Guatemala.',
    imgURL: 'https://www.uamxela.org/images/Ximages/slideramb03.png',
    parrafs: `Existen dos grupos étnicos: el grupo maya sipakapense que representa el 75% de la población y el grupo ladino que conforma el 25%. Se habla el español y el sipakapense. La conforman 180 socios y socias, 100 hombres y 80 mujeres, de 12 comunidades diferentes de la etnia Mam.

    Los servicios que brinda APROSADC a sus asociados, en coordinación con UAM, son: asistencia técnica; producción de cultivos, capacitación en control de calidad del producto, manejo de animales, manejo de bosque, agua y suelo; financiamiento, comercialización y otras capacitaciones o asesorías.`
  },
  {
    title: 'ASDIAT',
    description: 'Asociación de Desarrollo Integral Ajtikonel.',
    place: 'Santa Maria Chiquimula, Totonicapán, Guatemala.',
    imgURL: 'https://www.uamxela.org/images/Ximages/slideramb05.png',
    parrafs: `Está integrada por 200 socios y 150 socias, 350 personas en total, de diferentes comunidades de etnia Kiché. Los principales cultivos que se producen en la región son maíz y frijol, en su mayoría para autoconsumo, una parte de su producción es pecuaria, tales como engorde de ganado ovino y bovino, y producción de gallinas criollas.

    Los servicios que brinda AJTIKONEL a sus asociados/as, en coordinación con la UAM, son: manejo de animales, manejo de bosque, agua y suelo, financiamiento, comercialización y otras capacitaciones y asesorías.`
  },
  {
    title: 'ADICHSAL',
    description: 'Asociación de Desarrollo Integral Chwi Santa Lucia.',
    place: 'Asociación de Desarrollo Integral Chwi Santa Lucia.',
    imgURL: 'https://www.uamxela.org/images/Ximages/slideramb04.png',
    parrafs: `ADICHSAL es una asociación civil ubicada en la cabecera municipal de Santa Lucía La Reforma, departamento de Totonicapán. ADICHSAL fue constituida en 1998. También está inscrita como una comercializadora de legumbres frescas.

    La constituyen 275 socios/as, de los cuales 125 son mujeres, de 12 comunidades campesinas de la etnia Kiché. ADICHSAL brinda a sus asociados/as, en coordinación con la UAM, los siguientes servicios: asistencia técnica, producción de cultivos, capacitación en control de calidad del producto, manejo de animales, manejo de bosque, agua y suelo, crédito, comercialización, y otras capacitaciones o asesorías.`
  },
  {
    title: 'ASDIA',
    description: 'Asociación de Desarrollo Integral Aguacateca.',
    place: 'Aguacatán, Huehuetenango, Guatemala.',
    imgURL: 'https://www.uamxela.org/images/Ximages/slideramb01.png',
    parrafs: `Se fundó en marzo de 1996 y la integran 83 socios/as de 4 comunidades diferentes: Aldea Tuixcox, Caserío Ojo de Agua, Caserío Tucuná Pueblo y Caserío Los Alisos. Es destacable el hecho de que más de la mitad de los socios/as son mujeres, concretamente 44 mujeres frente a 39 hombres del total de 83.
    
    Se fundó en marzo de 1996 y la integran 83 socios/as de 4 comunidades diferentes: Aldea Tuixcox, Caserío Ojo de Agua, Caserío Tucuná Pueblo y Caserío Los Alisos. Es destacable el hecho de que más de la mitad de los socios/as son mujeres, concretamente 44 mujeres frente a 39 hombres del total de 83.`
  },
  {
    title: 'ASODIQ',
    description: 'Asociación de Desarrollo Integral el Quetzal.',
    place: 'Cajolá, Quetzaltenango, Guatemala.',
    imgURL: 'https://www.uamxela.org/images/Ximages/slideramb06.png',
    parrafs: null
  },
  {
    title: 'SLU',
    description: '52 Grupos Focales Organizados.',
    place: 'Santa Lucia Utatlán, Sololá, Guatemala.',
    imgURL: 'https://www.uamxela.org/images/Ximages/slideramb07.png',
    parrafs: null
  },
]

const Bases = () => {
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
        <div className='p-5'>
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
                (item.parrafs) ? item.parrafs.split('\n').map((parraf, index)=>(
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

export default Bases