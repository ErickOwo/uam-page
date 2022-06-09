import React from 'react';
import Image from 'next/image';
import mapaUAM from '@images/MapaUAM.png'

const data = [
  {
    title: 'ADICTA',
    description: 'Asociación de Desarrollo Integral Tejutla.',
    place: 'Tejutla, San Marcos, Guatemala.',
    imgURL: 'https://www.uamxela.org/images/Ximages/slideramb01.png',
    parraf: `ADICTA nace en el año 1993, sus 150 socios y socias pertenecen al grupo étnico Mam y se organizan en 7 grupos.
    Su propósito original fue la implementación de proyectos de agua en domicilios y la organización y formación de líderes comunitarios. Desde el año 2000 se viene trabajando con el deshidratado de frutas con grupos de mujeres de las comunidades organizadas, con el fin de aprovechar los recursos existentes en la región. En el año 2003 comienzan a producir almíbares de durazno, jaleas de manzana, ponche de frutas, mermelada de piña con zanahoria. También un grupo de 35 apicultores producen miel y derivados.
    La UAM ha facilitado micro financiamientos a socios/as de ADICTA para proyectos de producción, procesamiento y comercialización, así como asesoramiento técnico para el personal de ADICTA.`
  },
  {
    title: 'APROSADC',
    description: 'Asociación de Promotores de Salud y Desarrollo Comunitario.',
    place: 'Sipacapa, San Marcos, Guatemala.',
    imgURL: 'https://www.uamxela.org/images/Ximages/slideramb03.png',
    parraf: `Existen dos grupos étnicos: el grupo maya sipakapense que representa el 75% de la población y el grupo ladino que conforma el 25%. Se habla el español y el sipakapense. La conforman 180 socios y socias, 100 hombres y 80 mujeres, de 12 comunidades diferentes de la etnia Mam.
    Los servicios que brinda APROSADC a sus asociados, en coordinación con UAM, son: asistencia técnica; producción de cultivos, capacitación en control de calidad del producto, manejo de animales, manejo de bosque, agua y suelo; financiamiento, comercialización y otras capacitaciones o asesorías.`
  },
  {
    title: 'ASDIAT',
    description: 'Asociación de Desarrollo Integral Ajtikonel.',
    place: 'Santa Maria Chiquimula, Totonicapán, Guatemala.',
    imgURL: 'https://www.uamxela.org/images/Ximages/slideramb05.png',
    parraf: `Está integrada por 200 socios y 150 socias, 350 personas en total, de diferentes comunidades de etnia Kiché. Los principales cultivos que se producen en la región son maíz y frijol, en su mayoría para autoconsumo, una parte de su producción es pecuaria, tales como engorde de ganado ovino y bovino, y producción de gallinas criollas.
    Los servicios que brinda AJTIKONEL a sus asociados/as, en coordinación con la UAM, son: manejo de animales, manejo de bosque, agua y suelo, financiamiento, comercialización y otras capacitaciones y asesorías.`
  },
  {
    title: 'ADICHSAL',
    description: 'Asociación de Desarrollo Integral Chwi Santa Lucia.',
    place: 'Asociación de Desarrollo Integral Chwi Santa Lucia.',
    imgURL: 'https://www.uamxela.org/images/Ximages/slideramb04.png',
    parraf: `ADICHSAL es una asociación civil ubicada en la cabecera municipal de Santa Lucía La Reforma, departamento de Totonicapán. ADICHSAL fue constituida en 1998. También está inscrita como una comercializadora de legumbres frescas.
    La constituyen 275 socios/as, de los cuales 125 son mujeres, de 12 comunidades campesinas de la etnia Kiché. ADICHSAL brinda a sus asociados/as, en coordinación con la UAM, los siguientes servicios: asistencia técnica, producción de cultivos, capacitación en control de calidad del producto, manejo de animales, manejo de bosque, agua y suelo, crédito, comercialización, y otras capacitaciones o asesorías.`
  },
  {
    title: 'ASDIA',
    description: 'Asociación de Desarrollo Integral Aguacateca.',
    place: 'Aguacatán, Huehuetenango, Guatemala.',
    imgURL: 'https://www.uamxela.org/images/Ximages/slideramb01.png',
    parraf: `Se fundó en marzo de 1996 y la integran 83 socios/as de 4 comunidades diferentes: Aldea Tuixcox, Caserío Ojo de Agua, Caserío Tucuná Pueblo y Caserío Los Alisos. Es destacable el hecho de que más de la mitad de los socios/as son mujeres, concretamente 44 mujeres frente a 39 hombres del total de 83.
    Se fundó en marzo de 1996 y la integran 83 socios/as de 4 comunidades diferentes: Aldea Tuixcox, Caserío Ojo de Agua, Caserío Tucuná Pueblo y Caserío Los Alisos. Es destacable el hecho de que más de la mitad de los socios/as son mujeres, concretamente 44 mujeres frente a 39 hombres del total de 83.`
  },
  {
    title: 'ASODIQ',
    description: 'Asociación de Desarrollo Integral el Quetzal.',
    place: 'Cajolá, Quetzaltenango, Guatemala.',
    imgURL: 'https://www.uamxela.org/images/Ximages/slideramb06.png',
    parraf: null
  },
  {
    title: 'SLU',
    description: '52 Grupos Focales Organizados.',
    place: 'Santa Lucia Utatlán, Sololá, Guatemala.',
    imgURL: 'https://www.uamxela.org/images/Ximages/slideramb07.png',
    parraf: null
  },
]


const Bases = () => {
  return (
    <div>
      <div className='w-full h-[510px] bg-yellow-300/80'>

      </div>
      <Image src={mapaUAM} width='1400px' height='1000px' />
      <div className='bg-white p-8'>
      {
        data.map((item, index) =>(
          <div key={index}>
            <h2 className='text-3xl text-blue-700 font-bold'>{item.title}</h2>
            <div className='p-5 flex flex-col gap-2 text-justify'>
              <span className='text-blue-700 font-bold'>
                <p>{ item.description }</p> 
                <p>{ item.place }</p>
              </span>
              { 
                (item.parraf) ? item.parraf.split('\n').map(parraf=>(
                  <p>
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