import Map from '@components/Map';
import Image from 'next/image';

import mapa1 from '@images/mapa1.png'
import mapa2 from '@images/mapa2.png'

const Followus = () => {

  return (
    <div className='bg-black/90 text-white p-8 min-h-[600px] flex flex-col '>
      <div className='flex'>
        <div className='flex map-container w-[550px] relative'>
        <Map  />  
        </div>
        <div className='flex flex-col px-8 gap-2'>
          <p>
            <span className='font-bold'>{'Desde la Ciudad de Guatemala a Quetzaltenango (Xela):'}</    span> Quienes vienen a Guatemala normalmente llega al Aeropuerto La Aurora en Ciudad de Guatemala. En el aeropuerto se encuentra facilmente un taxi o un autobus hasta la terminal de buses, donde hay muchas empresas con destino a Quetzaltenango {'(Xela)'}.
          </p>
          <p>
            Los horarios de los autobuses son variables. Entonces se aconseja buscar informaciones directamente en las oficinas de las empresas a la terminal. Por ejemplo: Transportes Alamo {'(teléfono: 7884 0505)'} , debera coordinar el mejor horario para su conveniencia.
          </p>
          <p>
            El pasaje tiene un valor aproximado Q. 75.00 ($ 10.00), cuyo recorrido es de entre 3 a 4 horas. "Se les recomienda tener cuidado con las maletas cuando viaje en los autobuses".
          </p>
          <div className='flex flex-col gap-1 text-cyan-700'> 
            <h3 className='font-bold'>
              Unión de Agricultores Minifundistas de Guatemala -U.A.M.-
            </h3>
            <span>
              1a. Avenida 6-87, zona 1 - Barrio San Bartolomé
            </span>
            <span>
              Quetzaltenango, Guatemala.
            </span>
            <h4 className='font-bold'>
              Teléfono:
            </h4>
            <span>
          { '(502) 7761 4063 / (502) 7765 0915 / (502) 7725 1444' }
            </span>
            <h4 className='font-bold'>
          Correo electronico:
            </h4>
            <span>
              unionagric@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-col my-2 gap-2'>
        <p><span>{'Desde Quetzaltenango (Xela) a la oficina de UAM:'}</span> Luego de llegar a la terminal, se toma un bus {'(normalmente son microbuses colectivos, el pasaje vale Q. 1.25)'} que vaya al Parque Bolivar, donde se baja. Tome 6a. calle por 2 cuadras a la esquina de la 1ra. avenida. Camine por otros 2 minutos en 1a. avenida, va a ver el edificio a la izquierda como la foto.</p>
      </div>
      <Image src={mapa1} width='100%' height='700px' />
      <Image src={mapa2} width='100%' height='700px' />
    </div>
  )
}

export default Followus