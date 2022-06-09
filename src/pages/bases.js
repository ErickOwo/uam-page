import React from 'react';
import Image from 'next/image';
import mapaUAM from '@images/MapaUAM.png'

const Bases = () => {
  return (
    <div>
      <Image src={mapaUAM} width='1400px' height='1000px' />
      <div className='bg-white p-5'>
        <h2 className='text-3xl text-blue-700 font-bold'>ADICTA</h2>
        <div className='p-5'>
          <span className='text-blue-700 font-bold'>
            <p>Asociación de Desarrollo Integral Tejutla.</p> 
            <p>Tejutla, San Marcos, Guatemala.</p>
          </span>
          <p>
            ADICTA nace en el año 1993, sus 150 socios y socias pertenecen al grupo étnico Mam y se organizan en 7 grupos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Bases