import Program from "@containers/Program"


const programs = [
  {
    title: 'Programa de Género y Desarrollo',
    imgURL: 'https://www.uamxela.org/Programas117page/images/programas/Genero/Portadasgenero.png',
    id: 'agroecologia',
    objectives: `Eliminar los obstáculos existentes para la igualdad entre hombres y mujeres con mayor énfasis a las mujeres indígenas del área rural donde la Unión de Agricultores Minifundistas de Guatemala. Fomentar la participación de las mujeres en ámbitos de los que hasta ahora no ha sido excluido. Talleres de auto estima. Talleres que busquen el empoderamiento de la mujer. Participación ciudadana. Derechos de la mujer. Divulgación del Dia de la Mujer, No violencia contra la mujer.

    Actualmente la sociedad guatemalteca tiene grandes barreras que obstaculizan el desempeño y empoderamiento de las mujeres y grupos vulnerables. Respeto a la vida: a pesar que hay leyes a favor y en protección a la mujer: la violencia contra las mujeres sigue en aumento y con mas Azaña. Participación: la mujer indígena y rural no tiene participación activa en las organizaciones, en la política partidista, en cargos públicos. Para ella solo existen espacios para ver la desigualdad que existe en la sociedad. Acceso a la tierra: todavía existe el prejuicio de que la mujer no debe poseer la tierra en propiedad, este recurso es solo para el hombre. Educción: la mujer indígena en nuestra sociedad tiene los niveles más bajos de educación escolarizada, Acceso a la salud: la atención primaria en salud es una estrategia no llevada en todo.
    
    Las mujeres son el 52% de la población en general, sin embargo es la que menos participa en puestos de elección y de nombramiento en puestos públicos y privados.
    
    En el caso de las mujeres en general y especialmente con las indígenas rurales, la igualdad de trato y de oportunidades siguen siendo un factor por las cual las mujeres no desarrollan el potencial que como mujeres y seres humanos posee.
    
    Ante ello el programa de AGROECOLOGIA impulsa procesos a través de fortalecer los recursos locales como el recursos humano y los recursos naturales, para que se propicien acciones que contribuyan a la sostenibilidad comunitaria, para ello se tiene identificado líneas estratégicas tales como:`
  },
  {
    title: 'Programa de Educación',
    imgURL: 'https://www.uamxela.org/Programas117page/images/programas/educacion/Portadaseducacion.png',
    id: 'educacion',
    objectives: `Elevar el nivel de desarrollo y desempeño institucional de las asociaciones y socios Incrementando el nivel de participación ciudadana, capacitación para proyectos innovadores, poder de autogestión de las personas y organizaciones del sistema UAM a través de procesos educativos de formación para iniciativas económicas que busquen el empoderamiento de las persona más necesitadas.`,
    vision: `Ser un programa de educación para el trabajo que fortalezca a las personas en especial a las mujeres adultas y jóvenes (hombres y mujeres) del área rural de Guatemala, para que participen activamente en el desarrollo local.`,
    mision: `Facilitar el acceso a la capacitación técnica a personas de áreas que han sido excluidas del desarrollo humano permitiendo más opciones alcanzar mejores niveles de vida.`
  },
]

const Programas = () => {
  return (
    <div className="">
      <div 
        className='w-full  h-[420px] bg-[url("../assets/images/portada-programas.jpg")] bg-[length:100%_100%]'
        id='up' />
      <div className="flex flex-col mt-2">
        <Program
          id={ programs[1].id } 
          title={ programs[1].title }
          imgURL={ programs[1].imgURL }
          objectives={ programs[1].objectives }
          vision={ programs[1].vision }
          mision={ programs[1].mision } />
      </div>
    </div>
  )
}

export default Programas