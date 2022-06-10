import Link from "next/link";
import Image from "next/image";

const data = [
  {
    title: 'AECID - ESPAÑA',
    description: 'Primera modificación',
    imgURL: 'https://www.uamxela.org/images/cooperantes/Cooperantes01.jpg',
    link: 'https://www.aecid.es/ES',
  },
  {
    title: 'DVV INTERNATIONAL - ALEMANIA',
    description: 'Primera modificación',
    imgURL: 'https://www.uamxela.org/images/cooperantes/Cooperantes02.jpg',
    link: 'https://www.dvv-international.de/',
  },
  {
    title: 'FARMAMUNDI - ESPAÑA',
    description: 'Primera modificación',
    imgURL: 'https://www.uamxela.org/images/cooperantes/Cooperantes03.jpg',
    link: 'https://farmaceuticosmundi.org/',
  },
  {
    title: 'FUNDACIÓ PAU I SOLIDARITAT - ESPAÑA',
    description: 'Primera modificación',
    imgURL: 'https://www.uamxela.org/images/cooperantes/Cooperantes04.jpg',
    link: 'https://pauisolidaritat.pv.ccoo.es/',
  },
  {
    title: 'HEIFER INTERNATIONAL - U.S.A.',
    description: 'Primera modificación',
    imgURL: 'https://www.uamxela.org/images/cooperantes/Cooperantes05.jpg',
    link: 'https://www.heifer.org/',
  },
  {
    title: 'HELVETAS - SUIZA',
    description: 'Primera modificación',
    imgURL: 'https://www.uamxela.org/images/cooperantes/Cooperantes06.jpg',
    link: 'https://www.helvetas.org/es/guatemala/quienes-somos/Programa-Guatemala',
  },
  {
    title: 'HORIZONT 3000 - AUSTRIA',
    description: 'Primera modificación',
    imgURL: 'https://www.uamxela.org/images/cooperantes/Cooperantes07.jpg',
    link: 'https://www.horizont3000.at/',
  },
  {
    title: 'ICCO - HOLANDA',
    description: 'Primera modificación',
    imgURL: 'https://www.uamxela.org/images/cooperantes/Cooperantes08.jpg',
    link: 'https://www.icco-cooperation.org/en/',
  },
  {
    title: 'INTERMÓN OXFAM - ESPAÑA',
    description: 'Primera modificación',
    imgURL: 'https://www.uamxela.org/images/cooperantes/Cooperantes09.jpg',
    link: 'https://www.oxfamintermon.org/es',
  },
  {
    title: 'KFB - AUSTRIA',
    description: 'Primera modificación',
    imgURL: 'https://www.uamxela.org/images/cooperantes/Cooperantes10.jpg',
    link: 'https://www.kfb.at//',
  },
  {
    title: 'ASOCIACIÓN PANKARA - ESPAÑA',
    description: 'Primera modificación',
    imgURL: 'https://www.uamxela.org/images/cooperantes/Cooperantes11.jpg',
    link: 'https://pankaraecoglobal.blogspot.com',
  },
  {
    title: 'VETERINARIOS SIN FRONTERAS - ESPAÑA',
    description: 'Primera modificación',
    imgURL: 'https://www.uamxela.org/images/cooperantes/Cooperantes12.jpg',
    link: 'https://www.avsf.org/es/mision',
  },
  {
    title: 'COUNTERPART INTERNATIONAL - U.S.A.',
    description: 'Primera modificación',
    imgURL: 'https://www.uamxela.org/images/cooperantes/Cooperantes13.jpg',
    link: 'https://www.counterpart.org/',
  },
]


const Cooperation = () => {
  return (
    <div>
      {
        <div className="w-full">
          <Image src={data[0].imgURL} width='1300px' height='600px' />
        </div>
      }
      <div className="bg-slate-200 md:p-8 p-4">
      <h3 className="uppercase ubuntou text-2xl mb-4">Agencias de Cooperación</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {
          data.map(item =>(
            <a href={item.link} target='_blank' >
              <div className="w-full relative">
                <Image src={item.imgURL} width='400px' height='200px' />
                <span className="absolute bottom-0 left-0 z-10 bg-black/50 w-full text-white p-3">{ item.title }</span>
              </div>
            </a>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Cooperation