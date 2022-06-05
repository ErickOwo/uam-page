import Image from "next/image";

import img1 from '@images/about-images/CuadroInformativo01.jpg';
import img2 from '@images/about-images/CuadroInformativo02.jpg';
import img3 from '@images/about-images/CuadroInformativo03.jpg';
import img4 from '@images/about-images/CuadroInformativo04.jpg';

const About = () => {
  
  return (
    <div className="bg-slate-50/70 md:p-8 p-4 flex flex-col gap-4">
      <section className='flex flex-col gap-4'>
        <h3 className='font-bold text-2xl text-cyan-700'>BREVE REPASO A NUESTRA HISTORIA</h3>
        <p className='text-left md:text-justify'>
          En el año de 1993, circunstancias del entorno favorecieron el desarrollo de UAM. Entre aspectos económicos, políticos, locales, nacionales e internacionales, se encuentran: Apoyo de las agencias internacionales, Situación de guerra inestable y procesos de paz iniciado, Dificultades de formar una organizacion como UAM, Sector Agrícola abandonado, las Necesidades de las Comunidades con una Tendencia Municipal y Regional.
        </p>
        <p className='text-left md:text-justify'>
          Las Asociaciones Microregionales de Base, conocidas también como 'AMB´s', apoyadas desde su fundación por "Agua del Pueblo", hasta octubre de 1993 venían desarrollando cada cual su proceso de trabajo en forma aislada, centrando exclusivamente su atención en lo local, es decir, que sus preocupaciones y trabajo no iba mas allá del ámbito de las comunidades y grupos que integran cada AMB, sin mayor relación entre ellas.
        </p>
        <p className='text-left md:text-justify'>
          Dentro del proceso de trabajo, cada una de las asociaciones se fue encontrando con distintas limitaciones para atender sus necesidades, problemas e inquietudes, particularmente para resolver problemas que les eran comunes a todas las AMB's, como la falta de financiamiento, la ausencia de personal propio. Tampoco se contaba en ese momento con instancias para coordinar la realización de proyectos generales que beneficiaran a estas Asociaciones, por ejemplo, el programa alternativo de Educación Formal para Dirigentes, Agricultura Orgánica, Comercialización, otros.
        </p>
        <p className='text-left md:text-justify'>
          Además, no contaban con un órgano que facilitara la dirección, gestión y control de programas regionales, así como tampoco había una definición de políticas y estrategias de trabajo a ese nivel, ni el conocimiento y discusión de sus principales problemas comunes. Estas fueron inicialmente las causas o condicionantes, para que tanto los Presidentes de las Juntas Directivas de las AMB´s como sus respectivos Asesores, llegaran a la conclusión de conformar el 20 de septiembre de 1993: LA UNIDAD DE ASOCIACIONES MICROREGIONALES DE BASE {'<>'} ASOCIACIÓN UNIÓN DE AGRICULTORES MINIFUNDISTAS DE GUATEMALA, identificada con las siglas UAM.
        </p>
        <p className='text-left md:text-justify'>
          UAM, tuvo como propósito inicial constituirse en un órgano rector del desarrollo regional, que facilitara la coordinación entre las AMB´s, para desarrollar un trabajo conjunto, donde todas salieran beneficiadas. Para contar con una estructura formal, eligieron una Junta Directiva Provisional, establecieron un pequeño plan de trabajo y se dividieron en comisiones para atender las acciones concretas que identificaron en su plan de trabajo.
        </p>
      </section>
      <section className='flex flex-col gap-4'>
        <h3 className='font-bold text-2xl text-cyan-700'>INFORMACIÓN LEGAL</h3>
        <p className='text-left md:text-justify'>
          UAM es una Institución privada al servicio de la comunidad agrícola minifundista, la cual fue creada en julio de mil novecientos noventa y cuatro (1994), por la iniciativa de Asociaciones Microregionales de base (AMBs) representadas en los Presidentes de las Juntas Directivas de cada Asociación comprometidos con el desarrollo de nuestra Guatemala.
        </p>
        <p className='text-left md:text-justify'>
          Es una asociación civil, de servicio social y desarrollo integral, sin fines de lucro, inscrita en el Registro Civil.
        </p>
        <p className='text-left md:text-justify'>
          En el transcurso de su existencia UAM ha contribuido con diversos grupos de agricultores minifundistas, quienes cuentan con capacitación, apoyo técnico y económico para el desarrollo de sus comunidades, utilizando mecanismos de trabajo eficaces.
        </p>
        <p className='text-left md:text-justify'>
          En conclusión, se busca la forma de hacer que los pequeños agricultores aprovechen de la mejor manera sus tierras y contribuyan así al desarrollo de nuestra sociedad.
        </p>
        <p className='text-left md:text-justify'>
          De acuerdo con sus Estatutos, la Unión de Agricultores Minifundistas se constituye por los siguientes órganos.
        </p>
        <p className='text-left md:text-justify'>
          La asamblea General de Asociados, Junta Directiva Central, Equipo Técnico Central y Equipos Técnicos Locales.
        </p>
        <p className='text-left md:text-justify'>
          La Asamblea se compone actualmente de 3,500 asociados; en la Asamblea participan 3 representantes de cada Junta Directiva, de cada Asociación que conforma a UAM. Los asociados destinan recursos, dedican parte de su tiempo a la Asociación, facilitan relaciones con el sector privado y con las autoridades gubernamentales del país y dan su apoyo a las actividades de la misma.
        </p>
        <p className='text-left md:text-justify'>
          La Junta Directiva es electa por la Asamblea General de Representantes de Asociados, para un período de dos años, pudiendo ser reelectos únicamente para un período consecutivo adicional.
        </p>
        <p className='text-left md:text-justify'>
          Desde su inicio UAM tiene como política institucional que en la medida en que sea posible el personal sea calificado y comprometido. Para hacer efectivos y eficientes en la realización de sus programas, su operación se basa en que sus asesores sean originarios de las comunidades en donde se desarrollan los mismos, preferiblemente que hablen el idioma local o de la región en donde se desarrollan las actividades. En lo relativo al Grupo Técnico Asesor, éste está integrado por profesionales especialistas en el campo específico en el cual se va a realizar el trabajo, de acuerdo a los diversos programas que se ejecutan en la institución, se encuentra bajo la supervisión del Director General para el buen cumplimiento de los objetivos.
        </p>
        <p className='text-left md:text-justify'>
          UAM es una institución que en el desarrollo de su trabajo destaca los siguientes aspectos: Capacitación en aspectos de agroecología y organización, Organización de grupos de hombres y mujeres, Financiamiento para producción y comercialización, Educación de adultos a distancia y Gestión de proyectos de desarrollo.
        </p>
        <div className="flex flex-wrap gap-2 uppercase justify-between">
          <div className="flex flex-col gap-2">
            <Image src={img1} width='280px' height='190px' />
            <span>Campesino a Campesino</span>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={img2} width='280px' height='190px' />
            <span>Formación de Liderezas</span>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={img3} width='280px' height='190px' />
            <span>Equidad de Género</span>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={img4} width='280px' height='190px' />
            <span>Recurso Local</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;